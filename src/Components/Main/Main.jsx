import "./Main.css";
import { useState } from "react";
import { myProjects } from "./myProjects";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Main() {
  const [currentActive, setcurrentActive] = useState("all");
  const [projects, setProjects] = useState(myProjects);
  // !Function Filtertion projects and set CurrentActive
  const handleClick = (btnClick) => {
    setcurrentActive(btnClick);
    const filterProjects = myProjects.filter((item) => {
      return item.category === btnClick;
    });
    setProjects(filterProjects);
  };
  return (
    <main className="flex" id="projects">
      <section className="flex  left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setProjects(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>

        <button
          onClick={() => {
            handleClick("html&css");
          }}
          className={currentActive === "html&css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>

        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>
      </section>
      <section className="right-section flex">
        {projects?.map((item, index) => {
          return (
            <>
              <motion.article
                key={index}
                className="card"
                initial={{ scale: 0.6, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.2 }}
              >
                <img className="img-Projects" src={item?.imgProject} alt="" />
                <div className="box">
                  <h3 className="title">{item?.title}</h3>
                  <p className="subtitle">{item?.subTitle}</p>
                  <div className=" flex icons-box">
                    <div className="flex links-icons">
                      <Link to={item?.page} target="_blank">
                        <span className="icon-link" />
                      </Link>

                      <Link to={item?.githup} target="_blanck">
                        <span className="icon-github" />
                      </Link>
                    </div>

                    <div className="flex more-icon">
                      <span>more</span>
                      <span className="icon-arrow-right" />
                    </div>
                  </div>
                </div>
              </motion.article>
            </>
          );
        })}
      </section>
    </main>
  );
}
