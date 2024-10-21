import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ButtonToUp from "./Components/ButtonToUp/ButtonToUp";
import Contact from "./Components/Contact/Contact";

import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import Layout from "./Components/Layout/Layout";


const router = createBrowserRouter([{
  path: "/",
  element: <Layout/>,
  children:[
    {index :true ,element : <Hero/>},
    {path : "about" ,element : <Hero/>},
    {path : "projects" , element: <Main/>},
    {path : "contact-us" , element : <Contact/>}

  ]
}],
{
  basename: "/Portfolio",
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
      <ButtonToUp />
     </div>
  );
}

export default App;
