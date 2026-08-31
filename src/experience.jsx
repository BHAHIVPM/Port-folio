import { useEffect } from 'react'
import './App.css'
import dot from "./assets/dot.webp";
import { BiLogoSpringBoot } from "react-icons/bi";
import Aos from 'aos';
import 'aos/dist/aos.css'

function Experience(op) {
  useEffect(() => {
    Aos.init({
      mirror: true,
      once: false,
    })
  }, []);

  return (
    <article id='experience' className={`topp ${op.mde==false? "dark":""}`}>
      <section className='experiencename topic'>
        <h1>EXPERIENCE
          <img src={`${dot}`} alt="" />
        </h1>
      </section>

      <section className='experiencecontent'>
        <div
          data-aos="fade-up" data-aos-easing="ease-in-out"
          className={`experiencecard ${op.mde==false? "experiencecarddark":""}`}
        >
          <section className='experienceicon'>
            <BiLogoSpringBoot />
          </section>
          <section className='experiencedetails'>
            <h3>Backend Developer</h3>
            <h4>Minarsoft Technologies Pvt Ltd</h4>
            <p className='experiencemeta'>March 2025 &ndash; Present &nbsp;|&nbsp; Chennai, India</p>
            <ul>
              <li>Architected a multi-tenant SaaS application with dynamic, per-client database connections built for 100+ tenant environments with isolated data and no cross-tenant performance bottlenecks, from a single unified deployment.</li>
              <li>Implemented JWT-based stateless authentication using HTTP-only cookies, securing sessions without server-side state.</li>
              <li>Secured API communications with RSA encryption in transit and AES encryption for database storage.</li>
              <li>Integrated ClamAV for server-side antivirus scanning on all file uploads to block malware before it reaches storage.</li>
              <li>Designed RESTful APIs with Spring MVC, structured error handling and meaningful HTTP responses to cut down client-side debugging time.</li>
              <li>Configured SMTP-based automated email notifications for user communication and system event alerts.</li>
              <li>Maintained high code quality with SonarQube static analysis, consistently meeting quality gate standards.</li>
            </ul>
          </section>
        </div>
      </section>
    </article>
  )
}

export default Experience
