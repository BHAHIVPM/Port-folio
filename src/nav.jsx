import { useState,useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCode } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";
import pdf from "./assets/res.pdf"
function Navbar(op) {
  const [count, setCount] = useState(true);
  const hide=()=>
    {
      setCount(!count);
    }
    const [activeSection, setActiveSection] = useState("home");
    
    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll("article");
        let scrollPosition = window.scrollY;
  
        sections.forEach((section) => {
          
          const top = section.offsetTop - 200; // Adjust offset for better detection
          const bottom = top + section.clientHeight;
  
          if (scrollPosition >= top && scrollPosition < bottom) {
            console.log(section.id);
            setActiveSection(section.id);
            console.log(section.id);
          }
        });
      };
  
      window.addEventListener("scroll", handleScroll);
      // return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    console.log(activeSection);


  return (
    <div >
       <nav className={`navoverall ${op.mde==false? "navoveralldark":""} rounded-bottom-4`}>
        <section className='d-flex align-items-center justify-content-evenly'>
        <span><FaCode/></span>
        <h5 className={` ${op.mde==false? "dark":""} `}>Bhahirathan M</h5>
        </section>
        <section className='d-flex align-items-center justify-content-evenly '>
        <a href='#home ' className={`scrl text-decoration-none  ${activeSection==="home"? "active":""}  `}>Home</a>
        <a href='#about ' className={`scrl text-decoration-none ${activeSection==="about"? "active":""}  `}  >About</a>
        <a href='#project ' className={`scrl text-decoration-none ${activeSection==="project"? "active":""}  `}>Project</a>
        <a href='#skill'  className={`scrl text-decoration-none ${activeSection==="skill"? "active":""}  `}>Skills</a>
        <a href='#contact ' className={`scrl text-decoration-none ${activeSection==="contact"? "active":""}  `}>Contact</a>
        </section>
        <a className=' align-items-center justify-content-evenly ' href={`${pdf}`} target='_blank' >
            Download CV
        </a>
        
        <label for={"check"} className='fs-2'  onClick={hide}>{count==true?<TfiMenuAlt className={`${op.mde==false?"dark":""}`} />:<FiX />}</label>
        <input type="checkbox"  id={"check"}/>
        
       </nav>
       <div className={`backmenu ${count==true? "backmenuhide":"backmenushow"}`}></div>
       <section className={`menubar d-flex flex-column align-items-center justify-content-evenly ${count==true? "menuhide":"menushow"}`}>
        <a href='#home ' className={`scrl text-decoration-none ${activeSection==="home"? "active":""}  `}>Home</a>
        <a href='#about ' className={`scrl text-decoration-none ${activeSection==="about"? "active":""}  `} >About</a>
        <a href='#project ' className={`scrl text-decoration-none ${activeSection==="project"? "active":""}  `}>Project</a>
        <a href='#skill' className={`scrl text-decoration-none ${activeSection==="skill"? "active":""}  `}>Skills</a>
        <a href='#contact ' className={`scrl text-decoration-none ${activeSection=="contact"? "active":""}  `}>Contact</a>
        <a className='download d-flex align-items-center justify-content-evenly' href={`${pdf}`} target='_blank' >
            RESUME
        </a>
        </section>
        
    </div>
  )
}

export default Navbar
