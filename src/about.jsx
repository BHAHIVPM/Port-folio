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
    const [count, setCount] = useState(0)
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
                <section className='aboutcontent '>
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

                            >Welcome to my portfolio! I'm deeply passionate about JavaScript and its ability to create dynamic web applications. My journey into web development began in July 2022 I thrive on MERN stack development, constantly learning and pushing boundaries to build innovative solutions. My insatiable curiosity drives me to stay updated with the latest developments, aiming to create impactful projects that contribute to technological advancement
                            </p>
                        </section>

                    </div>
                </section>
            </div>
        </article>

    )
}

export default About
