import "./Hero.css";
import developerAnimation from '../../animation/developer.animation/Animation - 1720963041870.json'
import Lottie from "lottie-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section">
        <motion.h1 className="title"
        initial={{opacity : 0}}
        animate={{opacity : 1}}
        transition={{duration : 3}}
        >
        I'm
        <span className="my-name"> Omar Youssef</span>, 
        </motion.h1>
        <p className="sub-title">
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
        </p>
        <div className="all-icons flex">
          <a href="https://www.facebook.com/omar.bombony"  target="_blank" className="icon icon-facebook"/>
          <a href="https://wa.me/201141214658" target="_blank" className="icon icon-whatsapp"/>
          <a href="#contact-us" className="icon icon-gmail"/>
          <a href="https://www.linkedin.com/in/omar-shahen/"  target="_blank" className="icon icon-linkedin2"/>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie className="developer" animationData={developerAnimation}/>
      </div>
    </section>
  );
}
