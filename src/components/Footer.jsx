import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="link">
          <a href="https://www.linkedin.com/in/vicky-kumar-4430b8287"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>

        <div className="link">
          <a href="https://www.instagram.com/vicky_k99056?igsh=b3h5eHc3Y3l1YWk1"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>

        <div className="link">
          <a href="https://www.facebook.com/share/16YwPSUzE7/"><FontAwesomeIcon icon={faFacebook} /></a>
        </div>
      </div>
    </footer>
  );
}
