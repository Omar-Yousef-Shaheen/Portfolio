import html from '../../assets/img/html.png'
import css from '../../assets/img/css.png'
import js from '../../assets/img/js.png'
import react from '../../assets/img/react.png'
import redux from '../../assets/img/redux.png'

import { motion } from "framer-motion";
import SkillBar from './SkillBar'





function Skills() {
  const skills = [
    { image: html, alt: "html-img", level: 90, name: "HTML" },
    { image: css, alt: "css-img", level: 95, name: "CSS" },
    { image: js, alt: "js-img", level: 90, name: "JavaScript" },
    { image: react, alt: "react-img", level: 95, name: "React" },
    { image: redux, alt: "redux-img", level: 70, name: "Redux" },
  ];
  return (
  <motion.div className="container bg-light bg-opacity-25 p-5  rounded-5 "
  initial={{ scale: 0.4}}
  animate={{ scale: 1}}
  transition={{duration : 0.6}}
  >



     {skills.map((skill, index) => (
        <SkillBar
          key={index}
          skillImage={skill.image}
          skillAlt={skill.alt}
          skillLevel={skill.level}
          skillName={skill.name}
        />
      ))}
  </motion.div>
  
   
  )
}

export default Skills