import { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('currentMode') ?? 'dark');
  useEffect(() => {
    
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="flex">
      <span
        className="menu icon-menu"
        onClick={() => {
          setShowModal(true);
        }}
      />
      <div />
      <nav>
        <ul className="flex">
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>
          <li>
            <Link to="skills">Skills</Link>
          </li>
          <li>
            <Link to="contact-us">Contact</Link>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="icon-moon"
      ></button>

      {showModal ? (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <span
                className="icon-close"
                onClick={() => {
                  setShowModal(false);
                }}
              />
            </li>
            <li>
              <Link onClick={()=>{
                
                showModal(false)
              }} to="/">About</Link>
            </li>
            
            <li>
              <Link  onClick={()=>{
                showModal(false)
              }}to="projects">Projects</Link>
            </li>
            <li>
              <Link  onClick={()=>{
                showModal(false)
              }}to="skills">Skills</Link>
            </li>
            <li>
              <Link onClick={()=>{
                showModal(false)
              }} to="contact-us">Contact</Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}
