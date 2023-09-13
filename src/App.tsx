import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './pages/login';
import { ForgotPassword } from './pages/forgot-password';


let router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({ message: "Hello Data Router!" }),
    Component: () => <Login />,
  },
  {
    path: "/forgot",
    loader: () => ({ message: "Hello Data Router!" }),
    Component: () => <ForgotPassword />,
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
