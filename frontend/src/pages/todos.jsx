// 1. Imports
import { useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import getAxiosClient from "../axios-instance";

export default function Todos() {
  // 2. Hooks (always at the top level and never conditional)
  const modalRef = useRef();
  const queryClient = useQueryClient();

  // 3. useMutation for creating todos
  const { mutate: createNewTodo } = useMutation({
    mutationKey: ["newTodo"],
    mutationFn: async (newTodo) => {
      const axiosInstance = await getAxiosClient();
      const { data } = await axiosInstance.post("http://localhost:8080/todos", newTodo);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  // 4. useQuery for fetching todos
  const { data, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const axiosInstance = await getAxiosClient();
      const { data } = await axiosInstance.get("http://localhost:8080/todos");
      return data;
    },
  });

  // 5. react-hook-form setup
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  // 6. Modal toggle
  const toggleNewTodoModal = () => {
    if (!modalRef.current) return;
    modalRef.current.open ? modalRef.current.close() : modalRef.current.showModal();
  };

  // 7. Form submit handler
  const handleNewTodo = (values) => {
    createNewTodo(values);
    toggleNewTodoModal();
  };

  // 8. Loading/Error states
  if (isLoading) return <div>Loading Todos...</div>;
  if (isError) return <div>Error loading todos</div>;

  // 9. NewTodoButton
  function NewTodoButton() {
    return (
      <button className="btn btn-primary mb-4" onClick={toggleNewTodoModal}>
        New Todo
      </button>
    );
  }

  // 10. TodoModal
  function TodoModal() {
    return (
      <dialog className="modal" ref={modalRef}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">New Todo</h3>
          <form onSubmit={handleSubmit(handleNewTodo)}>
            <input {...register("name")} placeholder="Name" className="input input-bordered w-full" />
            <input {...register("description")} placeholder="Description" className="input input-bordered w-full mt-2" />
            <div className="modal-action mt-4">
              <button type="submit" className="btn btn-primary">Create Todo</button>
              <button type="button" className="btn btn-ghost" onClick={toggleNewTodoModal}>Close</button>
            </div>
          </form>
        </div>
      </dialog>
    );
  }

  // 11. TodoItemList
  function TodoItemList() {
    return (
      <div className="w-lg h-sm flex flex-col items-center justify-center gap-4">
        {data.success && data.todos && data.todos.length >= 1 ? (
          <ul className="flex flex-col items-center justify-center gap-4">
            {data.todos.map((todo) => (
              <li key={todo.id} className="inline-flex items-center gap-4">
                <div className="w-md">
                  <h3 className="text-lg">{todo.name}</h3>
                  <p className="text-sm">{todo.description}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No todos found. Create one!</p>
        )}
      </div>
    );
  }

  // 12. Final JSX
  return (
    <>
      <NewTodoButton />
      <TodoModal />
      <TodoItemList />
    </>
  );
}
