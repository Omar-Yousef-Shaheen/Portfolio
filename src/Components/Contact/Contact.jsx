import { useEffect } from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import doneAnimation from "../../animation/done.animation/Animation - 1720960721381.json";
import contactAnimation from "../../animation/contact.animation/Animation - 1720961794535.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import InfoResume from "../InfoResume/InfoResume";

export default function Contact() {
  const [state, handleSubmit] = useForm("mwpepogy");
  useEffect(() => {
    if (state.succeeded) {
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    }
  }, [state.succeeded]);
  return (
    <motion.section
      className="contact-us"
      id="contact-us"
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex main-title">
        <h1 className="title flex">
          <span className="icon-envelope" />
          Contact Us
        </h1>
        <p className="sub-title">
          Contact us for more information and Get notified when i publish
          somtething new{" "}
        </p>
      </div>
      <div className="info flex ">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-one">
            <label htmlFor="email">Email Address:</label>
            <input
              required
              autoComplete="off"
              name="email"
              type="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="input-two">
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
          {state.succeeded ? (
            <div className="message-Form flex">
              <Lottie
                loop={false}
                style={{ height: 35 }}
                animationData={doneAnimation}
              />
              <p>Your message has been sent successfully. ✌</p>
            </div>
          ) : (
            ""
          )}
        </form>
        <div className="animation">
          <Lottie style={{ height: 440 }} animationData={contactAnimation} />
        </div>
      </div>
      <InfoResume />
    </motion.section>
  );
}
