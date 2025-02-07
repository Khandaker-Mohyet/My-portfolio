import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Main/Main";
import Contact from "../Components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
]);

export default router;