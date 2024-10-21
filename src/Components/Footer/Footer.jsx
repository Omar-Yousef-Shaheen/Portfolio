import { Link } from 'react-router-dom'
import './Footer.css'
export default function Footer() {
  return <>
  <footer>

   <div className='footer flex'>
   <ul className='flex'>
      <li><Link to="/">About</Link></li>
      <li><Link to="projects">Projects</Link></li>
      <li><Link to="">Speaking</Link></li>
      <li><Link to="contact-us">Contact</Link></li>
    </ul>
    <p> @ 2023 Spencer Sharp. All Rights reserved.</p>
   </div>

  </footer>
  
  </>
}
