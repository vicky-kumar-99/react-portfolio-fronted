
import { useState , useEffect} from "react";

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
                <div class="main-page-project"><h1><b><i>PROJECTS :-</i></b></h1></div>
                <div className="home-main1-container">
                    
                    <div className="picture-main1">

                    </div>
                    <br></br>
                    <div className="home-main1-details">
                         
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
                        <h3>- Modern and responsive UI </h3>

                        <h3>- Smooth navigation </h3>

                        <h3>- About, Skills, Projects, and Contact sections</h3>
                        <br></br>
                        <h3>Tech Stack:- </h3>
                         <br></br>
                        <h3>React.js, Node.js, Express.js, MongoDB</h3>
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
                        <h3>- Search weather by city name</h3>

                        <h3>- Temperature, humidity, and condition display</h3>

                        <h3>- Clean and minimal UI</h3>

                        <h3>Tech Stack:- </h3>
                        <h3> HTML, CSS, JavaScript</h3>

                        <br></br>

                        <h2><u>Home Booking Platform</u></h2>

                        <h3>Description:- </h3>
                        <br></br>
                        <h3>A web-based platform that allows users to browse 
                        available rooms and make bookings. Admin can add 
                        and manage listings and bookings. Built with a 
                        server-side backend and MongoDB for persistent storage.</h3>
                        <br></br>
                        <h3>Features:-</h3>
                        <br></br>
                        <h3>- User signup/login and authentication</h3>

                        <h3>- Browse room listings with details and images</h3>

                        <h3>- Booking flow with date selection and confirmation</h3>

                        <h3>- Basic input validation and error handling</h3>
                        <br></br>
                        <h3>Tech Stack:-</h3>
                        <br></br>
                        <h3> HTML, CSS, JavaScript, Node.js, Express.js, MongoDB</h3>
                        <br></br>
                        
                    </div>
                    
                </div>
           </section>
       </main>
    )
}