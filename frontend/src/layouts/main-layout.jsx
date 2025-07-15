import { Outlet, Link } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/todos" className="btn btn-ghost text-xl">Donezo</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><button className="btn btn-link">Logout</button></li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}
