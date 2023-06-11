import laura from "../assets/laura smith.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
  return (
    <div className="info">
      <img src={laura} alt="Laura Smith" className="profile-img" />
      <h2>Laura Smith</h2>
      <h3>Frontend Developer</h3>
      <p>laurasmith.website</p>

      <div className="contact-btn">
        <button className="btn email-btn">
          <FontAwesomeIcon className="email-icon icon" icon={faEnvelope} />
          Email
        </button>
        <button className="btn linkedin-btn">
          <FontAwesomeIcon className="linkedin-icon icon" icon={faLinkedin} />
          LinkedIn
        </button>
      </div>
    </div>
  );
}
