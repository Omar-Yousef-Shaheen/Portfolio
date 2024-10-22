import { useEffect, useState } from "react"
import "./ButtonToUp.css"
export default function ButtonToUp() {
  const [showBtn, setShowBtn] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll' , ()=>{
      if (scrollY > 100) {
        setShowBtn(true)
      
      }else{
        setShowBtn(false)
      }
    })
  },[])
  return <>
    <a href="#header" className={showBtn ? 'to-Up' : 'to-Up btnOpacity'}>
    <button className="icon-keyboard_arrow_up"></button>
  </a> 
  
  
  </>
}
