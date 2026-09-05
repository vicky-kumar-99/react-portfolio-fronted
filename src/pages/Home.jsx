
import { useState , useEffect} from "react";
import { Link} from "react-router-dom";
export default function Home() {

  // Qualification Data
  const qualifications = [
    {
      title: "10th Bihar Board (2021)",
      college: "Uttkramit Madhyamik School, Rohtas, bihar",
      marks: "83%"
    },
    {
      title: "12th Bihar Bord (2023)",
      college: "S.B College, Ara",
      marks: "80% (PCM)"
    },
    {
      title: "BE in Computer science of engineering (2023-2027)",
      college: "Sengunthar Engineering College, Tamilnadu",
      marks: "8.1 CGPA (Currently pursing 3rd year)"
    },
    {
      title: "MERN Stack",
      college: "Self Learning",
      marks: "React, Node, Express, MongoDB"
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
  const timer = setInterval(() => {
    setIndex((prevIndex) =>
      prevIndex === qualifications.length - 1 ? 0 : prevIndex + 1
    );
  }, 3000); // 3 second me slide change

  return () => clearInterval(timer);
}, []);


  const prev = () => {
    setIndex(index === 0 ? qualifications.length - 1 : index - 1);
  };

  const next = () => {
    setIndex(index === qualifications.length - 1 ? 0 : index + 1);
  };

  return (
    <main>
      
      <section className="home-section">
        <div className="home-main-container">
          <div className="home-main-details">
            <h3>Hi, I'm <i id="name">Vicky Kumar</i></h3>
            <br />
            <h2>MERN Stack Developer</h2>
            <br /><br />
            <h4>
              <i>
                I build responsive, scalable and user-friendly Web Applications
                using React, Node.js, Express and MongoDB.
              </i>
            </h4>
            <br /><br /><br />

            <div className="button-container">
              <div>
                <Link to="/projects">
                  <button id="view-button">View Projects</button>
                </Link>
              </div>
              <div>
                <Link to="/contact">
                  <button id="view-button1">Contact</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="picture-main"></div>
        </div>
      </section>

    
      <section className="qualification-section">
        <h2 className="qualification-title">My Qualifications</h2>

        <div className="qualification-container">
          <button className="arrow left" onClick={prev}>❮</button>

          <div className="card">
            <h3>{qualifications[index].title}</h3>
            <p>{qualifications[index].college}</p>
            <span>{qualifications[index].marks}</span>
          </div>

          <button className="arrow right" onClick={next}>❯</button>
        </div>
      </section>
    
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           
            <section className="home-section">
                <div class="main-page-project"><h1><b><i>-: PROJECTS :-</i></b></h1></div>

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
                             <button class="pro-link-class">Visit Portfolio</button>
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
                               <Link to="https://transcript-fronted.vercel.app/m">
                               <button class="pro-link-class">Visit Portfolio</button>
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
                               <button class="pro-link-class">Visit Portfolio</button>
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
                                <h3>Project Link:</h3>
                                <Link to="https://home-booking-platform-o0wi.onrender.com">
                                <button class="pro-link-class">Visit Portfolio</button>
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
                         
                        <br></br>
                      </div> 
                  
                    
                </div>
           </section>
           <br></br>
           <br></br>
           <section>
               <div className="intership-picture">

                    </div>
           </section>
       </main>
    )
}