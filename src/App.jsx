import "./App.css";
import Home from "./components/Home/Home";
import LayOut from "./components/LayOut/LayOut";
import NotFound from "./components/NotFound/NotFound";
import FoodSafety from "./components/FoodSafety/FoodSafety";
import AboutUs from "./components/AboutUs/AboutUs";
import Global from "./components/Global/Global";
import SchoolLife from "./components/SchoolLife/SchoolLife";
import Local from "./components/Local/Local";
import Preservation from "./components/Preservation/Preservation";
import Proccessing from "./components/Proccessing/Proccessing";
import Packaging from "./components/Packaging/Packaging";
import Details from "./components/Details/Details";
import Inspection from "./components/Inspection/Inspection";
import Byproduct from "./components/Byproduct/Byproduct";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const route = createBrowserRouter(
    [
      {
        path: "/",
        element: <LayOut />,
        children: [
          { path: "aboutus", element: <AboutUs /> },
          { path: "/", element: <Home /> },
          { path: "foodsafety", element: <FoodSafety /> },
          { path: "Home", element: <Home /> },
          { path: "Global", element: <Global /> },
          { path: "Details/Proccessing/1", element: <Byproduct /> },
          { path: "Proccessing", element: <Proccessing /> },  
          { path: "Details/:collectionname/:id", element: <Details /> },
          { path: "Preservation", element: <Preservation /> },
          { path: "Packaging", element: <Packaging /> },
          { path: "Local", element: <Local /> },
          { path: "SchoolLife", element: <SchoolLife /> },
          { path: "inspection", element: <Inspection /> },
          { path: "*", element: <NotFound /> },
        ],
      },
    ],
    {
      basename: "/moaj",
    }
  );
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
