import html from "../../assets/img/html.png";
import css from "../../assets/img/css.png";
import js from "../../assets/img/js.png";
import react from "../../assets/img/react.png";
import redux from "../../assets/img/redux.png";
import api from "../../assets/img/API.png";
import bootstrap from "../../assets/img/bootstrap.png";
import tailwind from "../../assets/img/tailwind.png";

import SkillBar from "./SkillBar";

function Skills() {
  const skills = [
    { image: html, alt: "html-img", level: 90, name: "HTML" },
    { image: css, alt: "css-img", level: 95, name: "CSS" },
    { image: bootstrap, alt: "bootstrap-img", level: 95, name: "bootstrap" },
    { image: js, alt: "js-img", level: 90, name: "JavaScript" },
    { image: api, alt: "api-img", level: 90, name: "API" },
    { image: react, alt: "react-img", level: 95, name: "React" },
    { image: tailwind, alt: "tailwind-img", level: 95, name: "tailwind" },
    { image: redux, alt: "redux-img", level: 70, name: "Redux" },
  ];
  return (
    <div className="container bg-light bg-opacity-25 p-5  rounded-5 ">
      {skills.map((skill, index) => (
        <SkillBar
          key={index}
          skillImage={skill.image}
          skillAlt={skill.alt}
          skillLevel={skill.level}
          skillName={skill.name}
        />
      ))}
    </div>
  );
}

export default Skills;
