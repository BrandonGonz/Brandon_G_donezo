import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import MainLayout from "./layouts/main-layout";
import ProtectedRoute from "./components/protected-route";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Todos from "./pages/todos";

// Initialize React Query client
const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route path="/todos" element={<MainLayout />}>
            <Route
              index // renders on /todos
              element={
                <ProtectedRoute>
                  <Todos />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
