import { useEffect, useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
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
    <header className="flex ">
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
          <ul className="mymodal">
            <li>
              <span
                className="icon-close"
                onClick={() => {
                  setShowModal(false);
                }}
              />
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("/");
                  setShowModal(false);
                }}
              >
                About
              </button>
            </li>

            <li>
              <button
                onClick={() => {
                  navigate("projects");
                  setShowModal(false);
                }}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("skills");
                  setShowModal(false);
                }}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("contact-us");
                  setShowModal(false);
                }}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}
