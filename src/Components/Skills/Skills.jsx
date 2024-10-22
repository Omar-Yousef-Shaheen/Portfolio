import html from '../../assets/img/pngegg.png'
import css from '../../assets/img/css.png'
import js from '../../assets/img/js.png'
import react from '../../assets/img/react.png'
import redux from '../../assets/img/redux.png'

import { motion } from "framer-motion";





function Skills() {
  return (
  <motion.div className="container bg-light bg-opacity-25 p-5  rounded-5 "
  initial={{ scale: 0.4}}
  animate={{ scale: 1}}
  transition={{duration : 0.6}}
  >

     <div className="flex align-items-center justify-content-around  gap-5">
     <div className="imag-skills w-10 ">
      <img className='w-100 ' src={html} alt="html-img" />
     </div>
     <div className="progress w-100 me-auto" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div className="progress-bar bg-black fw-bold" style={{width : "90%"}}>90%</div>
      </div>
     </div>

     {/*  */}
     <div className="flex align-items-center justify-content-around mb-2 gap-5">
     <div className="imag-skills w-10 ">
      <img className='w-100 ' src={css} alt="css-img" />
     </div>
     <div className="progress w-100 me-auto" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div className="progress-bar bg-black fw-bold" style={{width : "85%"}}>87%</div>
      </div>
     </div>     
     {/*  */}
     <div className="flex align-items-center justify-content-around  gap-5">
     <div className="imag-skills w-9 ms-2 ">
      <img className='w-100 ' src={js} alt="js-img" />
     </div>
     <div className="progress w-100 ms-3" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div className="progress-bar bg-black fw-bold" style={{width : "90%"}}>90%</div>
      </div>
       
     </div> 
      {/*  */}
      <div className="flex align-items-center justify-content-around my-3 gap-5">
     <div className="imag-skills w-9 ms-2 ">
      <img className='w-100 ' src={react} alt="react-img" />
     </div>
     <div className="progress w-100 ms-3" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div className="progress-bar bg-black fw-bold" style={{width : "95%"}}>95%</div>
      </div>
     </div>   
        {/*  */}
        <div className="flex align-items-center justify-content-around  gap-5">
     <div className="imag-skills w-9 ms-2 ">
      <img className='w-100 ' src={redux} alt="react-img" />
     </div>
     <div className="progress w-100 ms-3" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div className="progress-bar bg-black fw-bold" style={{width : "70%"}}>70%</div>
      </div>
     </div>   
  </motion.div>
  
   
  )
}

export default Skills