import { useState } from "react";

export default function Contact() {

  const defaultContactFormData = {
    name: "",
    email: "",
    number: "",
    message: ""
  };

  const [contact, setContact] = useState(defaultContactFormData);
  const [errors, setErrors] = useState({});

  function inputhandling(event) {
    let fieldName = event.target.name;
    let valueName = event.target.value;

    setContact((currValue) => ({
      ...currValue,
      [fieldName]: valueName,
    }));
  }

  //  Validation function
  const validateForm = () => {
    let newErrors = {};

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Mobile number validation (India)
    if (!/^[6-9]\d{9}$/.test(contact.number)) {
      newErrors.number = "Please enter a valid 10-digit mobile number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submithandling = async (event) => {
    event.preventDefault();

    // Agar invalid hai to submit hi nahi hoga
    if (!validateForm()) return;

    try {
      const response = await fetch(
        "https://react-portfolio-oicx.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        }
      );

      if (response.ok) {
        setContact(defaultContactFormData);
        setErrors({});
        alert("Message sent successfully ✅");
      }
    } catch (error) {
      console.log("contact", error);
    }
  };

  return (
    <main>
      <section>
        <div className="home-container">
          <div className="home-details">

            <form onSubmit={submithandling}>

              <label htmlFor="username">
                <h2><i><b>Name</b></i></h2>
              </label>
              <input
                value={contact.name}
                id="username"
                onChange={inputhandling}
                name="name"
                required
              />

              <br /><br />

              <label htmlFor="email">
                <h2><i><b>Email Address</b></i></h2>
              </label>
              <input
                value={contact.email}
                id="email"
                onChange={inputhandling}
                name="email"
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}

              <br /><br />


              <label htmlFor="number">
                <h2><i><b>Mobile Number</b></i></h2>
              </label>
              <input
                value={contact.number}
                id="number"
                onChange={inputhandling}
                name="number"
                required
              />
              {errors.number && <p className="error">{errors.number}</p>}

              <br /><br />

              <label htmlFor="message">
                <h2><i><b>Message</b></i></h2>
              </label>
              <textarea
                value={contact.message}
                id="message"
                onChange={inputhandling}
                name="message"
                required
              />

              <br /><br />

              <button type="submit" className="submit-butt">
                Submit
              </button>

            </form>
          </div>

          <div>
            <div className="contant-picture"></div>

            <br /><br /><br />

            <div className="contant-me">
              <h4><b><i>Whatsapp-Number:- 9905649234</i></b></h4>
              <br />
              <h4><b><i>Email-Id:- vickyk5244@gmail.com</i></b></h4>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
