import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Contact from "./Components/Contact/Contact";

import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import Layout from "./Components/Layout/Layout";
import Skills from "./Components/Skills/Skills";


const router = createBrowserRouter([{
  path: "/",
  element: <Layout/>,
  children:[
    {path : "/" ,element : <Hero/>},
    {path : "projects" , element: <Main/>},
    {path : "skills" , element: <Skills/>},
    {path : "contact-us" , element : <Contact/>}
    
  ]
}],
{
  basename: "/Portfolio/",
}
)
function App() {
  return (
    
    <div id="header" className="container">
      {/* <Header />
      <Hero />
      <div className="line" />
      <Main />
      <div className="line" />
      <Contact />
      <div className="line" />
      <Footer /> */}

      <RouterProvider router={router} />
     </div>
  );
}

export default App;
