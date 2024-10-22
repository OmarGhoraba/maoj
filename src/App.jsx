import "./App.css";
import Home from "./components/Home/Home";
import LayOut from "./components/LayOut/LayOut";
import NotFound from "./components/NotFound/NotFound";
import FoodSafety from "./components/FoodSafety/FoodSafety";
import Refrances from "./components/Refrances/Refrances";
import AboutUs from "./components/AboutUs/AboutUs";
import GraduationProjects from "./components/GraduationProjects/GraduationProjects";
import Global from "./components/Global/Global";
import SchoolLife from "./components/SchoolLife/SchoolLife";
import Local from "./components/Local/Local";
import Preservation from "./components/Preservation/Preservation";
import Proccessing from "./components/Proccessing/Proccessing";
import Packaging from "./components/Packaging/Packaging";
import Details from "./components/Details/Details";
import FuturePlans from "./components/FuturePlans/FuturePlans";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        { path: "aboutus", element: <AboutUs /> },
        { path: "Home", element: <Home /> },
        { path: "foodsafety", element: <FoodSafety /> },
        { path: "Home", element: <Home /> },
        { path: "Refrances", element: <Refrances /> },
        { path: "GraduationProjects", element: <GraduationProjects /> },
        { path: "Global", element: <Global /> },
        { path: "Details/:id", element: <Details /> },
        { path: "Preservation", element: <Preservation /> },
        { path: "Packaging", element: <Packaging /> },
        { path: "Proccessing", element: <Proccessing /> },
        { path: "Local", element: <Local /> },
        { path: "SchoolLife", element: <SchoolLife /> },
        { path: "Futureplans", element: <FuturePlans /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
