import "./Hero.css";
import developerAnimation from "../../animation/developer.animation/Animation - 1720963041870.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import facebook from "../../assets/img/facebook.png";
import whatsapp from "../../assets/img/whatsap.png";
import linkdin from "../../assets/img/linkdin.png";
import SomeSkills from "../SomeSkills/SomeSkills";
import InfoResume from "../InfoResume/InfoResume";

export default function Hero() {
  return (
    <>
      <motion.section
        className="hero flex container-sm"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="left-section ">
          <h1 className="title">
            I'm
            <span className="my-name"> Omar Youssef</span>,
          </h1>
          <motion.p
            className="sub-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Front-End developer specializing in creating outstanding and
            functional user experiences. With my expertise in modern web
            technologies such as HTML5, CSS3, and JavaScript, along with
            libraries and frameworks like React.js, I can transform complex
            ideas into simple and attractive user interfaces.
            <br />
            <br />
            My goal is to deliver innovative and efficient tech solutions that
            help businesses and individuals achieve their digital goals. If you
            are looking for a frontend developer with passion and skill, I am
            here to help you realize your vision.
          </motion.p>
          <div className="all-icons flex">
            <a
              href="https://www.facebook.com/omar.bombony"
              target="_blank"
              className="icon"
            >
              <img src={facebook} className="w-100" alt="" />
            </a>
            <a
              href="https://wa.me/201141214658"
              target="_blank"
              className="icon"
            >
              <img src={whatsapp} className="w-100 pt-1" alt="" />
            </a>
            {/* <a href="#contact-us" className="icon ">
            <img src={gmail} className="w-100" alt="" />
          </a> */}
            <a
              href="https://www.linkedin.com/in/omar-shahen/"
              target="_blank"
              className="icon"
            >
              <img src={linkdin} className="w-75" alt="" />
            </a>
          </div>
        </div>

        <div className="right-section animation">
          <Lottie className="developer" animationData={developerAnimation} />
        </div>
      </motion.section>
      <SomeSkills />
    </>
  );
}
