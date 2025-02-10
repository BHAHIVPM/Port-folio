import { useState } from 'react'
import './App.css'
import Navbar from './nav.jsx'
import Home from './home.jsx'
import About from './about.jsx'
import Project from './project.jsx'
import Projectboxes from './projectboxs.jsx'
import Test from './test.jsx'
import Skill from './skill.jsx'
import Skillbox from './skillbox.jsx'
import Contact from './contact.jsx'
import Squares from "./assets/Backgrounds/Squares/Squares.jsx";
import { FaArrowCircleUp , FaSun,FaMoon} from "react-icons/fa";
import Footer from './footer.jsx'
import ClickSpark from "./assets/Animations/ClickSpark/ClickSpark.jsx";
function Full() {
    let a= !(window.matchMedia('(prefers-color-scheme: dark)').matches);
    console.log(a);
  const [count, setCount] = useState(a)
  const mode=()=>{
    setCount(!count);
  }
  return (
    <div className={`overflow-hidden totaloverall`}>

     <section className={`sqr  ${count==false? "darkbg":""}`}>
      <Squares 
      mde={count}
    speed={0.6} 
    squareSize={50}
    direction='diagonal'
    borderColor={`${ count==true? "#f2f2f2": "#292929"}`}
    hoverFillColor='#ff0808'
    />
     </section>

       <Navbar mde={count}/>
      <Home mde={count}/>
      <About mde={count}/>
      <Project mde={count}/>  
      
      <Skill mde={count}/>
        <Contact mde={count}/>
       
        <a href='#home'><FaArrowCircleUp className='bg-light rounded-circle'  /></a>
        <article className={`mode `}>
          <div onClick={mode} className={`${count===true? "day":"night"}`}>
          <FaMoon/>
            <FaSun/>
            
          </div>
        </article>

        <Footer mde={count}/>

        <div className={`front `}>
          <section className={` ${ count==false? "darkbg":"bg-light"}`}>
            <h1>WELCOME TO MY PORTFOLIO</h1>
          </section>
        </div>
    </div>
  )
}

export default Full
