import { useState, useEffect } from 'react'
import './App.css'
import Tilt from 'react-parallax-tilt';
import Aos from 'aos';
import 'aos/dist/aos.css'

function Skillbox(op) {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    Aos.init({
      mirror:true,
      once:false
    })
  },[])


  return (
    
    <div className={`${op.mde==false? "dark":""}`}
    data-aos="zoom-out" data-aos-delay="500"
    >
       <Tilt
    className={`background-stripes parallax-effect-glare-scale ${op.mde==false? "skillboxdark":""}`}
    perspective={500}
    glareEnable={true}
    glareMaxOpacity={0.45}
    scale={1.02}
  >
      <div className={`skillbox inner-element ${op.mde==false? "skillboxdark":""}`}>
      <section> 
            {op.icon}
            {/* {<FaHtml5/>} */}
        </section>
        <h4 className={` ${op.mde==false? "dark":""}`}>{op.name}</h4>
      </div>

      </Tilt>
    </div>
  )
}

export default Skillbox
