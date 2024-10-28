import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function SkillBar({ skillImage, skillAlt, skillLevel, skillName }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(skillLevel), 100);
    return () => clearTimeout(timer);
  }, [skillLevel]);

  return (
    <div className="flex align-items-center justify-content-around  flex-wrap flex-md-nowrap gap-5 mb-3">
      <div className="imag-skills w-10 mt-5 mt-md-0">
        <img className="w-100" src={skillImage} alt={skillAlt} />
      </div>
      <div
        className="progress w-100 me-auto"
        role="progressbar"
        aria-label={`${skillName} progress`}
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <motion.div
          className="progress-bar bg-black fw-bold"
          style={{ width: `${progress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8 }}
        >
          {progress}%
        </motion.div>
      </div>
    </div>
  );
}

export default SkillBar;
