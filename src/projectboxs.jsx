import { useState , useEffect} from 'react'
import './App.css'
import { FiExternalLink,FiGithub  } from "react-icons/fi";
import Splittext from "./assets/TextAnimations/SplitText/SplitText.jsx";
import Aos from 'aos';
import 'aos/dist/aos.css'


function Projectboxes(op) {
  const count=op.side;
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  useEffect(()=>{
    Aos.init({
      // mirror: true,
      once:false,
      duration:800,
      easing:'ease',
      offset: 60
  })
},[]);
  return (
        <div className='boxes'>
            <section 
             data-aos={count?"fade-right":"fade-left"} easing="ease-in-out" 
            className={`boximg  ${count==true ?"start-0 proanimleft":"end-0" }`} >
                <section  className={`bgimg `} style={{backgroundImage:`url("${op.image}")`} }>
                  
                </section>

            </section>
             <section 
              data-aos={count?"fade-left":"fade-right"} data-aos-delay="10"

             className={`boxtext ${count==true ?"text-end end-0":" text-start start-0"} `}>
             
             <div className={`overflow-hidden  w-100  gap-2 d-flex ${count==true ?" flex-row justify-content-end":"justify-content-end flex-row-reverse"}`}>
              <span 
             data-aos="fade-down" data-aos-delay="500"
              className='fst-italic  fw-light fs-5'>&#40;{op.date}&#41; </span> 
              <h3
              data-aos="fade-down" data-aos-delay="500"
             
              className='d-inline'> {op.topic}</h3>
              </div>
              
              <p
               data-aos="fade-up" data-aos-delay="500"
              className={` paratopic  w-100 position-relative ${count==true ?"text-end pslider":" text-start pslidel"}`}>{op.desn}</p>
              <div
               data-aos={count?"fade-left":"fade-right"} data-aos-delay="500"
              className={`boxpara ${count==true ?"proanimrightpara":"proanimleftpara" }`}>
                <p>{op.content} </p>
              </div>
              <section className={` w-100 ${count==true ?"text-end ":" text-start"} `}>
              <section className={`  tools d-flex flex-wrap ${count==true ?" flex-row-reverse":" flex-row"} `}>            
              <p
              data-aos="zoom-out" data-aos-delay="500"
              >{op.tool1}</p>
              <p
              data-aos="zoom-out" data-aos-delay="500"
              >{op.tool2}</p>
              <p
              data-aos="zoom-out" data-aos-delay="500"
              >{op.tool3}</p>
              <p
              data-aos="zoom-out" data-aos-delay="500"
              >{op.tool4}</p>
              <p
              data-aos="zoom-out" data-aos-delay="500"
              >{op.tool5}</p>
              <p
              data-aos="zoom-out" data-aos-delay="500"
              >{op.tool7}</p>
              
              <p
              data-aos="zoom-out" data-aos-delay="500"
              >{op.tool8}</p><br/>
              </section>
              <a href={`${op.link1}`} className={`text-decoration-none text-dark `}  >  <Splittext
  text={`LIVE DEMO`}
  className={`text-2xl font-semibold text-center ${op.mde==false? "dark":""}`}
  delay={150}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing="easeOutCubic"
  threshold={0.2}
  rootMargin="-50px"
  onLetterAnimationComplete={handleAnimationComplete}
/><FiExternalLink className={` ${op.mde==false? "dark":""}`} /></a>
             
              <a href={`${op.link2}`} className={`text-decoration-none text-dark ${op.mde==false? "dark":""}`} ><Splittext
  text={`SOURCE CODE`}
  className={`text-2xl font-semibold text-center ${op.mde==false? "dark":""}`}
  delay={150}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing="easeOutCubic"
  threshold={0.2}
  rootMargin="-50px"
  onLetterAnimationComplete={handleAnimationComplete}
/> <FiGithub className={`${op.mde==false? "dark":""}`} /></a>
              </section>
            </section> 

        </div>

  )
}

export default Projectboxes
