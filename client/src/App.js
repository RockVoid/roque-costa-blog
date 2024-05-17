import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

import "./style.scss";

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />
  }
]);

function App() {
    return (
      <div className="app">
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </div>
    );
  }
  
  export default App;
