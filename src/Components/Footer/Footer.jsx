import { Link } from "react-router-dom";
import "./Footer.css";
import InfoResume from "../InfoResume/InfoResume";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer flex">
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
          <p> @ 2024 Spencer Sharp. All Rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
