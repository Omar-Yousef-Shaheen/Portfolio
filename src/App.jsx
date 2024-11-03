import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Contact from "./Components/Contact/Contact";

import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import Layout from "./Components/Layout/Layout";
import Skills from "./Components/Skills/Skills";
import InfoResume from "./Components/InfoResume/InfoResume";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Hero /> },
        { path: "projects", element: <Main /> },
        { path: "skills", element: <Skills /> },
        { path: "contact-us", element: <Contact /> },
        // { path: "resume", element: <InfoResume /> },
      ],
    },
  ],
  {
    basename: "/Portfolio",
  }
);
function App() {
  return (
    <div id="header" className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
