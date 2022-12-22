import { createBrowserRouter } from "react-router-dom";

import MainContainer from "../container/MainContainer";
import ErrorPage from "../pages/Error";
import homePaths from "./home";
import projectPaths from "./projects";

export const router = createBrowserRouter([
  {
    element: <MainContainer />,
    errorElement: <ErrorPage />,
    children: [homePaths, projectPaths],
  },
]);