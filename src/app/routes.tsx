import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProjectsPage } from "./pages/ProjectsPage";
import { Articles } from "./pages/Articles";
import { About } from "./pages/About";
import { ContactPage } from "./pages/ContactPage";
import { Root } from "./pages/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: ProjectsPage },
      { path: "articles", Component: Articles },
      { path: "about", Component: About },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
