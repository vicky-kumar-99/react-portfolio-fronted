import { Link } from "react-router-dom"
export default function About() {
    return (
       <main>
           <section className="home-section">
                <div class="main-page-project">-: PROJECTS :-</div>

                 {/* main class */}

                <div className="home-main1-container"> 
                    
                    {/* <div className="picture-main1">

                    </div> */}
                  
                    <div id="portfolio" className="project-parts">
                         
                         <br></br>
                         <h2 style={{textAlign:'center'}}><u>Portfolio Website</u></h2>
                          <br></br>
                         <h3>Description :- </h3>
                         <br></br>
                        <h3>This is my personal portfolio website where I 
                        showcase my skills, projects, and background. 
                        The UI is clean and fully responsive, designed 
                        to provide a smooth browsing experience.</h3>
                        <br></br>
                        <h3>Features:- </h3>
                         <br></br>
                        <ul>
                            <li> Modern and responsive UI </li>
                             
                            <li> Smooth navigation </li>

                            <li> About, Skills, Projects, and Contact sections</li>
                        </ul>
                        <br></br>
                        <h3>Tech Stack:- </h3>
                         <br></br>
                        <h3>Html, css, javascript, React.js, Node.js, Express.js, MongoDB</h3>
                        <br></br>
                        <div class="project-links">
                          <div>
                             <Link to="https://react-portfolio-fronted.vercel.app/">
                             <button class="pro-link-class">Visit Project</button>
                             </Link>
                          </div>
                          
                          <div>
                                  <Link to="https://github.com/vicky-kumar-99/react-portfolio-fronted.git">
                                  <button class="pro-link-class">Github Fronted Link</button>
                                  </Link>
                          </div>
                          <div>
                                  <Link to="https://github.com/vicky-kumar-99/react-portfolio.git">
                                  <button class="pro-link-class">Github Backend Link</button>
                                  </Link>
                          </div>
                           
                        </div>
                        <br></br>
                      
                      </div>
                      
                      <div id="audio" className="project-parts">
                        <br></br>
                        <h2 style={{textAlign:'center'}}><u>Audio Transcript Website</u></h2>
                         <br></br>
                        <h3>Description:- </h3>
                        <br></br>
                        <h3>
                            This website converts audio files into accurate text
                            transcripts using speech recognition technology,
                            helping users easily extract and understand spoken content.
                        </h3>
                        <br></br>
                        <h3>Features:-</h3>
                        <br></br>
                        <ul>
                            <li>Convert audio to text</li>

                            <li>Display transcript on screen</li>

                            <li>Easy to use interface</li>

                            <li>Fast and accurate output</li>
                        </ul>
                        <br></br>
                        <h3>Tech Stack:-</h3>
                        <br></br>
                        <h3> HTML, CSS, JavaScript, react, Node.js, Express.js, MongoDB</h3>
                        <br></br>

                        <div class="project-links">
                           <div>
                               <Link to="https://transcript-fronted.vercel.app/">
                               <button class="pro-link-class">Visit Project</button>
                               </Link>
                           </div>
                           
                            <div>
                                  <Link to="https://github.com/vicky-kumar-99/transcript-fronted.git">
                                  <button class="pro-link-class">Github Fronted Link</button>
                                  </Link>
                            </div>
                            <div>
                                  <Link to="https://github.com/vicky-kumar-99/transcript-backend.git">
                                  <button class="pro-link-class">Github Backend Link</button>
                                  </Link>
                            </div>
                          
                        </div>
                        
                        <br></br>
                        
                      </div>

                      <div id="weather" className="project-parts">
                        <br></br>
                        <h2 style={{textAlign:'center'}}><u>Weather App</u></h2>
                        <br></br>
                        <h3>Description:- </h3>
                        <br></br>
                        <h3>A simple weather application that shows real-time 
                        weather information of any city using open weather API.</h3>
                        <br></br>
                        <h3>Features:-</h3>
                        <br></br>
                        <ul>
                             <li> Search weather by city name</li>

                             <li> Temperature, humidity, and condition display</li>

                             <li> Clean and minimal UI</li>
                        </ul>
                        <br></br>
                        <h3>Tech Stack:- </h3>
                        <br></br>
                        <h3> HTML, CSS, JavaScript</h3>

                        <br></br>

                        <div class="project-links">
                           <div>
                               <Link to="#">
                               <button class="pro-link-class">Visit Project</button>
                               </Link>
                           </div>
                           
                          <div>
                                  <Link to="#">
                                  <button class="pro-link-class">Github Fronted Link</button>
                                  </Link>
                          </div>
                          <div>
                                  <Link to="#">
                                  <button class="pro-link-class">Github Backend Link</button>
                                  </Link>
                          </div>
                           
                        </div>

                      </div>
                      
                      <div id="homebooking" className="project-parts">
                        <br></br>
                        <h2 style={{textAlign:'center'}}><u>Home Booking Platform</u></h2>
                        <br></br>
                        <h3>Description:- </h3>
                        <br></br>
                        <h3>A web-based platform that allows users to browse 
                        available rooms and make bookings. Admin can add 
                        and manage listings and bookings. Built with a 
                        server-side backend and MongoDB for persistent storage.</h3>
                        <br></br>
                        <h3>Features:-</h3>
                        <br></br>
                        <ul>
                            <li> User signup/login and authentication</li>

                            <li> Browse room listings with details and images</li>

                            <li> Booking flow with date selection and confirmation</li>

                            <li> Basic input validation and error handling</li>
                        </ul>
                        <br></br>
                        <h3>Tech Stack:-</h3>
                        <br></br>
                        <h3> HTML, CSS, JavaScript, Node.js, Express.js, MongoDB</h3>
                        <br></br>

                        <div class="project-links">
                            <div>
                                
                                <Link to="https://home-booking-platform-o0wi.onrender.com">
                                <button class="pro-link-class">Visit Project</button>
                                </Link>
                            </div>
                            <div>
                               <div>
                                  <Link to="https://github.com/vicky-kumar-99/home-booking-platform.git">
                                  <button class="pro-link-class">Github Link</button>
                                  </Link>
                               </div>
                               
                           </div>
                        </div>
                    <div className="picture-project">

                    </div>
                    </div>
                </div>
           </section>
       </main>
    )
}