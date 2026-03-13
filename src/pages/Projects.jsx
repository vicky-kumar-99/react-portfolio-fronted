import { Link } from "react-router-dom"
export default function About() {
    return (
       <main>
           <section className="home-section">
                <div className="home-container">
                    <div className="home-details">
                         <h1><b><i>PROJECTS</i></b></h1>
                         <br></br>
                         <br></br>
                         <h2><u>Portfolio Website</u></h2>
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
                         <ul className="features">
                            <li> Modern and responsive UI </li>

                             <li> Smooth navigation </li>

                             <li> About, Skills, Projects, and Contact sections</li>
                         </ul>
                        
                        <br></br>
                        <h3>Tech Stack:- </h3>
                         <br></br>
                        <h3>HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB</h3>
                        <br></br>
                        <h3>Project-Link:- <Link to="https://react-portfolio-fronted.vercel.app/">portfolio.com</Link></h3>
                        <br></br>

                        <h2><u>Audio Transcript Website</u></h2>
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
                        <ul className="features">
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
                        <h3>Project-Link:- <Link to="https://transcript-fronted.vercel.app/m">transcript.com</Link></h3>
                        <br></br>

                        <h2><u>Weather App</u></h2>
                        <br></br>
                        <h3>Description:- </h3>
                        <br></br>
                        <h3>A simple weather application that shows real-time 
                        weather information of any city using open weather API.</h3>
                        <br></br>
                        <h3>Features:-</h3>
                        <br></br>
                        <ul className="features">
                            <li> Search weather by city name</li>

                            <li> Temperature, humidity, and condition display</li>

                            <li> Clean and minimal UI</li>
                        </ul>
                        <br></br>
                        <h3>Tech Stack:- </h3>
                        <br></br>
                        <h3> HTML, CSS, JavaScript</h3>

                        <br></br>

                        <h2><u>Home Booking Platform</u></h2>
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
                        <ul className="features">
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
                        <h3>Project-Link:- <Link to="https://home-booking-platform-o0wi.onrender.com">home-booking-platform.com</Link></h3>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                    </div>
                    <div className="picture-project">

                    </div>
                </div>
           </section>
       </main>
    )
}