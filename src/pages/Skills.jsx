import { Link} from "react-router-dom";
export default function Skills() {
    return (
       <main>
           <section className="home-section">
                <div className="home-container">
                    <div className="home-details">
                         <h1><b><i>SKILLS</i></b></h1>
                         <br></br>
                         <br></br>
                       <h3>
                        Hello! I am a MERN Stack Web Developer
                         who builds responsive and user-friendly web applications.
                          I also have a strong understanding of Data Structures and
                           Algorithms which helps me write optimized code.</h3> 
                        <br></br>
                        <h2>Skills & Tools I Work With</h2> 
                        <br></br>
                        <h3>Technologies and tools I use to build web applications.</h3>
                        <h3>- Frontend: HTML, CSS, JavaScript, React.js</h3>
                        <h3>- Backend: Node.js, Express.js</h3>
                        <h3>- Database: MongoDB, SQL</h3>
                        <h3>- Other: Git, GitHub, Postman, VS Code</h3>
                        <h3>- Core: Data Structures and Algorithms (DSA) with java, Problem Solving</h3>
                        <h3>- UI/UX: Clean and user-centered design approach</h3> 

                        <br></br>
                        <br></br>
                        <br></br>
                        <div>
                            <div>
                                <Link to="/projects">
                                    <button id="view-button">View Projects</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="picture-skill">

                    </div>
                </div>
           </section>
       </main>
    )
}