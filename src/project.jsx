import { useState } from 'react'
import './App.css'
import Projectboxes from './projectboxs'
import screen1 from "./assets/screen1.png"
import screen2 from "./assets/screen2.png"
import screen3 from "./assets/pro3.png"
import dot from "./assets/dot.webp";

function Project(op) {
  const [count, setCount] = useState(0)

  return (
    <article id='project' className='topp'>
      <div className={`projectoverall ${op.mde==false? "dark":""}`} >
        <section className='projectname topic'>
          <h1>PROJECTS
          <img src={`${dot}`} alt="" />

          </h1>
          
        </section>
        <section className='projectcontent'>
          <Projectboxes mde={op.mde} side={true} image={screen1} date={"SEP 28,2024"} topic={"NEON"} desn={"IT COURSE WEBSITE CLONE"} tool1={"HTML"} tool2={"CSS"} tool3={"BOOTSTRAP"} tool4={""} tool5={""} tool6={""} tool7={""} tool8={""} link1={"https://bhahivpm.github.io/FULL-STACK/FRONT-END/PROJECTS/3/"} link2={"https://github.com/BHAHIVPM/FULL-STACK/tree/main/FRONT-END/PROJECTS/3"} content={"I designed a responsive website for Neon IT Course Center using HTML, CSS, and Bootstrap, ensuring a modern and user-friendly experience. The site includes course listings, interactive navigation, and a contact form, optimized for all devices. This project highlights my front-end development skills in creating professional educational websites."} />
          <Projectboxes mde={op.mde} side={false} image={screen2} date={"SEP 13,2024"} topic={"AC MECH"} desn={"AC SERVICE WEBSITE DESIGN"} tool1={"HTML"} tool2={"CSS"} tool3={"BOOTSTRAP"} tool4={""} tool5={""} tool6={""} tool7={""} tool8={""} link1={"https://bhahivpm.github.io/FULL-STACK/FRONT-END/PROJECTS/1/"} link2={"https://github.com/BHAHIVPM/FULL-STACK/tree/main/FRONT-END/PROJECTS/1"} content={"I designed a responsive website for AC Service Solutions using HTML, CSS, and Bootstrap, ensuring a modern and user-friendly experience. The site includes service listings, interactive navigation, and a contact form, optimized for all devices. This project highlights my front-end development skills in creating professional business websites."} />
          <Projectboxes mde={op.mde} side={true} image={screen3} date={"DEC 10,2024"} topic={"HOTEL-BILLING"} desn={"HOTEL ORDER BILLING "} tool1={"HTML"} tool2={"CSS"} tool3={"BOOTSTRAP"} tool4={"JAVASCRIPT"} tool5={"REACT"} tool6={""} tool7={""} tool8={""} link1={"https://bhahivpm.github.io/Billing-app/"} link2={"https://github.com/BHAHIVPM/Billing-app"} content={"I created a React-based order counter website using HTML, CSS, Bootstrap, and JavaScript, allowing users to track orders with each click. The site also generates and downloads the bill as a PDF, ensuring smooth functionality and a responsive design. This project highlights my skills in React development, state management, and PDF generation."} />
          {/* <Projectboxes side={false} image={screen2} date={"SEP 24,2024"} topic={"neon"} desn={" rgde gresxd sefa age"} tool1={"sdcfa"} tool2={"sdcfa"} tool3={"sdcfa"} tool4={"sdcfa"} tool5={"sdcfa"} tool6={"sdcfa"} tool7={"sdcfa"} tool8={"sdcfa"} link1={"https://bhahivpm.github.io/FULL-STACK/FRONT-END/PROJECTS/3/"} link2={"https://github.com/BHAHIVPM/FULL-STACK/tree/main/FRONT-END/PROJECTS/3"} content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex aut quidem obcaecati, quibusdam reiciendis saepe dolores unde deserunt debitis odio nihil culpa neq."} /> */}


        </section>

      </div>
    </article>

  )
}

export default Project
