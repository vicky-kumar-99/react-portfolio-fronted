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
                        <br></br>
                        <ul className="features">
                            <li> Frontend: HTML, CSS, JavaScript, React.js</li>
                            <li> Backend: Node.js, Express.js</li>
                            <li> Database: MongoDB, SQL</li>
                            <li> Other: Git, GitHub, Postman, VS Code</li>
                            <li> Core: Data Structures and Algorithms (DSA) with java, Problem Solving</li>
                            <li> UI/UX: Clean and user-centered design approach</li>
                        </ul> 
                        <br></br>

                        <h3>Also I Know</h3>
                        <br></br>
                        <ul className="features">
                            <li>Microsoft Excel</li>
                            <li>Microsoft Word</li>
                            <li>Microsoft PowerPoint</li>
                            <li>Content Writing</li>
                        </ul>

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