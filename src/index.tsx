import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./routers";
import { TodoProvider } from "./contexts/TodoContext";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  </React.StrictMode>
);
