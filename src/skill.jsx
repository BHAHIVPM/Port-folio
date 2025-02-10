import { useState, useEffect } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Skillbox from "./skillbox.jsx";
import { FaHtml5, FaBootstrap, FaJava, FaCss3Alt, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeSql } from "react-icons/bs";
import { DiPostgresql } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import dot from "./assets/dot.webp";
import Aos from "aos";
import "aos/dist/aos.css";

function Skill(op) {
  const [count, setCount] = useState("fe");
  const [activeTab, setActiveTab] = useState("fe");

  useEffect(() => {
    Aos.init({ mirror: true, once: false });
  }, []);
  useEffect(() => {
    console.log("Updated count:", count);
    setActiveTab(count);
  }, [count]);

  return (
    <article id="skill" className={`topp ${op.mde==false? "skilldark":""}`}>
      <section className="projectname topic">
        <h1>SKILLS
          <img src={`${dot}`} alt="" />
        </h1>
      </section>

      <div className="skilloverall">
        {/* Tabs for selecting skills category */}
        <section data-aos="fade-up" data-aos-delay="500" className="d-flex justify-content-center align-items-center">
          <Button onClick={() => setCount("fe")} className={`rounded-0 tab ${count === "fe" ?  "buttonclick" :  op.mde === false ? "darkclick" : " buttonnotclick"}`}>
            FRONT-END
          </Button>
          <Button onClick={() => setCount("be")} className={`rounded-0 tab ${count === "be" ? "buttonclick" : op.mde === false ? "darkclick" : " buttonnotclick"}`}>
            BACK-END
          </Button>
          <Button onClick={() => setCount("tl")} className={`rounded-0 tab ${count === "tl" ? "buttonclick" :  op.mde === false ? "darkclick" : " buttonnotclick"}`}>
            TOOLS
          </Button>
        </section>

        {/* Skills display section */}
        <section className="skillscontent">
          {activeTab === "fe" && (
            <div className="skillfe">
              <Skillbox mde={op.mde} name={"HTML"} icon={<FaHtml5 />} />
              <Skillbox mde={op.mde}name={"CSS"} icon={<FaCss3Alt />} />
              <Skillbox mde={op.mde} name={"BOOTSTRAP"} icon={<FaBootstrap />} />
              <Skillbox mde={op.mde} name={"JAVASCRIPT"} icon={<IoLogoJavascript />} />
              <Skillbox mde={op.mde} name={"REACT"} icon={<FaReact />} />
            </div>
          )}

          {activeTab === "be" && (
            <div className="skillbe">
              <Skillbox mde={op.mde} name={"JAVA"} icon={<FaJava />} />
              <Skillbox mde={op.mde} name={"SPRINGBOOT"} icon={<BiLogoSpringBoot />} />
              <Skillbox mde={op.mde} name={"SQL"} icon={<BsFiletypeSql />} />
              <Skillbox mde={op.mde} name={"POSTGRESQL"} icon={<DiPostgresql />} />
            </div>
          )}

          {activeTab === "tl" && (
            <div className="skillt">
              <Skillbox mde={op.mde} name={"GIT"} icon={<FaGitAlt />} />
              <Skillbox mde={op.mde} name={"GITHUB"} icon={<FaGithub />} />
              <Skillbox mde={op.mde} name={"VSCODE"} icon={<VscVscode />} />
              <Skillbox mde={op.mde} name={"POSTMAN"} icon={<SiPostman />} />
            </div>
          )}
        </section>
      </div>
    </article>
  );
}

export default Skill;
