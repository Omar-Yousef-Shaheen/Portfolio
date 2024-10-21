import "./Hero.css";
import developerAnimation from '../../animation/developer.animation/Animation - 1720963041870.json'
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <motion.section className="hero flex"
    initial={{opacity : 0 }}
    animate={{opacity : 1 }}
    transition={{duration : 0.3}}
    >
      <div className="left-section">
        <h1 className="title"
        
        >
        I'm
        <span className="my-name"> Omar Youssef</span>, 
        </h1>
        <motion.p className="sub-title"
          initial={{ scale: 0.6}}
          animate={{ scale: 1}}
          transition={{duration : 0.6}}
        >
          Front-End developer specializing in
          creating outstanding and functional user experiences. With my
          expertise in modern web technologies such as HTML5, CSS3, and
          JavaScript, along with libraries and frameworks like React.js, I can
          transform complex ideas into simple and attractive user interfaces.
          <br />
          My goal is to deliver innovative and efficient tech solutions that
          help businesses and individuals achieve their digital goals. If you
          are looking for a frontend developer with passion and skill, I am here
          to help you realize your vision.
        </motion.p>
        <div className="all-icons flex">
          <Link to="https://www.facebook.com/omar.bombony"  target="_blank" className="icon icon-facebook"/>
          <Link to="https://wa.me/201141214658" target="_blank" className="icon icon-whatsapp"/>
          <Link to="#contact-us" className="icon icon-gmail"/>
          <Link to="https://www.linkedin.com/in/omar-shahen/"  target="_blank" className="icon icon-linkedin2"/>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie  className="developer" animationData={developerAnimation}/>
      </div>
    </motion.section>
  );
}
