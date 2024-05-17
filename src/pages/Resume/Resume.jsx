import { FaBookReader } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import Internship from "./Internship";
import SkillItem from "./SkillItem";
const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="New Happy Senior Secondary School , Nimbahera"
            date="2019 - 2020"
            description="10th"
          />
          <TimelineItem
            title="Government Senior Secondary School , Nimbahera"
            date="2020 - 2021"
            description="12th in Science Maths"
          />
          <TimelineItem
            title="Rajasthan Technical University, Kota"
            date="2021 - 2025"
            description="B.Tech in computer Science"
          />
        </ol>
      </div>
      {/* internship section */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>

          <h3 className="h3">Internship</h3>
        </div>
        <ol className="timeline-list">
          <Internship
            title="Web Application developer intern in React"
            name="Anwimac technologies"
            date="11/2022 - 01/2023"
            description="As a React Intern Anwimac technologies, my role was involved working in various
            projects related to React.js"
          />
          <Internship
            title="Full Stack developer intern"
            name="Bharat Intern"
            date="8/2023 - 10/2023"
            description="The internship involve learning both front-end and back-end technologies,
            working on real-world project, gaining experience in web development and possibly acquiring skills in databases, frameworks , and other relevent technologies."
          />
        </ol>
      </div>
      {/* Skill section */}
      <div className="skill">
        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="WEB DESIGN" value={75} />
          <SkillItem title="React" value={70} />
          <SkillItem title="Java" value={75} />
          <SkillItem title="Javascript" value={70} />
          <SkillItem title="Database" value={85} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
