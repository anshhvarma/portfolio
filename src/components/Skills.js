import { BallCanvas } from "./canvas/Ball.js"
import 'react-multi-carousel/lib/styles.css';
import {technologies} from "../constant/index.js"


export const Skills = () => {
  return (
    <section className="skill" id="skills">
        <div className="container">
                <div className="skill-bx wow">
                        <h2>Skills</h2>
                        <p>I'm a skilled Full-Stack  Developer with experience in Java , and expertise in frameworks such as React, Node.js. I'm a quick learner who can easily collaborate with clients and push myself to fulfill required expectation.</p>
                    </div>
                    <div className="balls-container" >
                    {
                        technologies.map((data, index)=>{
                            return (
                                <>
                                <div className="ball">
                                    <BallCanvas icon={data.icon} ></BallCanvas>
                                </div>
                                </>
                            )
                        })
                    }
                    </div>
        </div>
    </section>
  )
}
