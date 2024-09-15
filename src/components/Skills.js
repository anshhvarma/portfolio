import { BallCanvas } from "./canvas/Ball.js";
import 'react-multi-carousel/lib/styles.css';
import { technologies } from "../constant/index.js";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="skill-bx wow">
          <h2>Skills</h2>
          <p>I'm a skilled Full-Stack Developer with experience in Java, and expertise in frameworks such as React, Next.js, etc. I'm a quick learner who can easily collaborate with clients and push myself to fulfill required expectations.</p>
        </div>
        <div className="balls-container">
          {technologies.map((data, index) => (
            <div className="ball" key={index}>
              <BallCanvas icon={data.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
