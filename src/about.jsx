import { useState,useEffect } from 'react'
import './App.css'
import pic1 from './assets/pic1.jpg'
import rotate1 from "./assets/pic2black.png"
import rotate2 from "./assets/pic2white.png"
import picfsd from "./assets/pic3.webp";
import dot from "./assets/dot.webp";
import Aos from 'aos';
import 'aos/dist/aos.css'

function About(op) {
    useEffect(()=>{
      Aos.init({
        mirror: true,
        once:false,
    })
},[]);

    return (
        <article id='about' className='topp'>
            <div className={`aboutoverall ${op.mde==false? "dark":""} `}>
                <section className='aboutname topic'>
                    <h1>ABOUT ME
                    <img src={`${dot}`} alt="" />

                    </h1>
                    
                </section>
                <section className='aboutcontent align-items-center '>
                    <div 
                    >
                        <section
                         data-aos="zoom-in"   data-aos-easing="ease-in-out"
                        className={`rotate ${op.mde==false? "rotatedark":""}`}>
                            <img src={`${op.mde==true? rotate1 : rotate2}`} alt="rotate" />
                            <img src={`${picfsd}`} alt="rotate" />
                        </section>
                        <section 
                         data-aos="fade-up"     data-aos-easing="ease-in-out"
                        className=' aboutimg '>
                            <img src={`${pic1}`} alt="DP" />


                        </section>
                    </div>
                    <div className='abouttext '>
                        <section>
                            <h2
                            data-aos="slide-left"   data-aos-easing="ease-in-out"

                            >I'm a <span>passionate</span> and <span>innovative</span> web developer with a strong focus on <span>full stack.</span></h2>
                        </section>
                        <section>
                            <p
                            data-aos="slide-left"   data-aos-easing="ease-in-out"

                            >Welcome to my portfolio! I'm a passionate Java Full Stack Developer, skilled in both front-end and back-end development. I specialize in building dynamic user interfaces and robust backend systems using Java and modern frameworks. Continuously learning, I stay updated with the latest advancements to enhance my skills and create innovative solutions. My goal is to develop impactful projects that contribute to technological growth and efficiency.
                            </p>
                        </section>

                    </div>
                </section>
            </div>
        </article>

    )
}

export default About
