import "../css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="container">
      <div className="row footer">
        <div className="col-sm-3">
          <h4 className="footer-section">Social share</h4>
          <ul className="nav social">
            <li role="presentation">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li role="presentation">
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li role="presentation">
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li role="presentation">
              <a href="#">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-3 footer-columns">
          <h4 className="footer-section">Event Info</h4>
          <div className="list-group">
            <a href="#" className="list-group-item">
              Enter Now
            </a>
            <a href="#" className="list-group-item">
              Event Info
            </a>
            <a href="#" className="list-group-item">
              Course Maps
            </a>
            <a href="#" className="list-group-item">
              Race Pack
            </a>
            <a href="#" className="list-group-item">
              Results
            </a>
            <a href="#" className="list-group-item">
              FAQs
            </a>
            <a href="#" className="list-group-item">
              Am I Registered?
            </a>
          </div>
        </div>
        <div className="col-sm-3 footer-columns">
          <h4 className="footer-section">Registration</h4>
          <div className="list-group">
            <a href="#" className="list-group-item">
              Volunteers
            </a>
            <a href="#" className="list-group-item">
              Gallery
            </a>
            <a href="#" className="list-group-item">
              Press
            </a>
            <a href="#" className="list-group-item">
              Results
            </a>
            <a href="#" className="list-group-item">
              Privacy Policy
            </a>
            <a href="#" className="list-group-item">
              Service Plus
            </a>
            <a href="#" className="list-group-item">
              Contacts
            </a>
          </div>
        </div>
        <div className="col-sm-3 footer-columns">
          <h4 className="footer-section">Schedule</h4>
          <div className="list-group">
            <a href="#" className="list-group-item">
              Gallery
            </a>
            <a href="#" className="list-group-item">
              About
            </a>
            <a href="#" className="list-group-item">
              Videos
            </a>
            <a href="#" className="list-group-item">
              Results
            </a>
            <a href="#" className="list-group-item">
              FAQs
            </a>
            <a href="#" className="list-group-item">
              Results
            </a>
            <a href="#" className="list-group-item">
              Volunteers
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
