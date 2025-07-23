import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router";
import routes from "./routes";

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <RouterProvider router={routes} />
  );
}
