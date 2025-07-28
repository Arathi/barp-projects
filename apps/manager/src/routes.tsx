import { createBrowserRouter } from "react-router";
import { Root } from "./pages/root";
import { Students } from "./pages/students";
import { StudentDetails } from "./pages/student-details";
import { Items } from "./pages/items";
import { ItemDetails } from "./pages/item-details";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/students",
        element: <Students />,
        children: [
          {
            path: "/students/:id",
            element: <StudentDetails />,
          },
        ],
      },
      {
        path: "/items",
        element: <Items />,
        children: [
          {
            path: "/items/:id",
            element: <ItemDetails />,
          },
        ],
      },
    ],
  },
]);
export default routes;
