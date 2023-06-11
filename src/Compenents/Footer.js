import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faSquareFacebook,
  faSquareGithub,
  faSquareInstagram,
  faSquareTwitter,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faSquare,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <FontAwesomeIcon className="footer-icon" icon={faSquareTwitter} />
      <FontAwesomeIcon className="footer-icon" icon={faSquareFacebook} />
      <FontAwesomeIcon className="footer-icon" icon={faSquareInstagram} />
      <FontAwesomeIcon className="footer-icon" icon={faSquareGithub} />
    </div>
  );
}
