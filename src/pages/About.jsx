import { Link} from "react-router-dom";
export default function About() {
    return (
       <main>
           <section className="home-section">
                <div className="home-container">
                    <div className="home-details">
                         <h1><b><i>ABOUT</i></b></h1>
                         <br></br>
                         <br></br>
                        <h3>Hello! I am a MERN Stack Web Developer with a strong interest 
                            in building clean, responsive, and user-friendly web applications.
                             I work with technologies like MongoDB, Express.js, React, and
                              Node.js to make full-stack projects that are fast, secure, and 
                              scalable.</h3>
                            <br></br>

                        <h3> I also have good knowledge of Data Structures and Algorithms (DSA),
                              which helps me write efficient and optimized code. I enjoy solving
                               logical problems and improving application performance.</h3>
                               <br></br>
                        <h3>
                            I love learning new technologies, experimenting with modern UI/UX
                             designs, and turning ideas into real products. My goal is to 
                             become a skilled full-stack developer who can contribute to
                              real-world impactful projects.

                        </h3>
                        <br></br>
                             
                        <h3>
                           I also have practical knowledge of productivity tools like Microsoft Excel, 
                           Microsoft Word and Microsoft PowerPoint. I use these tools for data management, 
                           document formatting and creating professional presentations.
                        </h3>
                        <br></br>

                        <h3>
                           Along with development, I also have skills in content writing. 
                           I can write simple and informative articles, blog posts and 
                           technical documentation for websites.
                        </h3>

                    
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
                    <div className="picture-about">

                    </div>
                </div>
           </section>
       </main>
    )
}