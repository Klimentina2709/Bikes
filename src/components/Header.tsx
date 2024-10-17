import "../css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <nav className="container navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        <a className="navbarLogo" href="#">
          <img
            src="/assets/img/logo.png"
            alt="Brand"
            className="img-responsive logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div
          className="collapse navbar-collapse justify-content-center fw-bold"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 fs-6">
            <li className="nav-item">
              <a className="bg nav-link text-uppercase" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="bg nav-link text-uppercase" href="#">
                Bikes
              </a>
            </li>
            <li className="nav-item">
              <a className="bg nav-link text-uppercase" href="#">
                Gear
              </a>
            </li>
            <li className="nav-item">
              <a className="bg nav-link text-uppercase" href="#">
                Parts
              </a>
            </li>
            <li className="nav-item">
              <a className="bg nav-link text-uppercase" href="#">
                Tires
              </a>
            </li>
            <li className="nav-item">
              <a className="bg nav-link text-uppercase" href="#">
                Service-Info
              </a>
            </li>
            <li className="nav-item">
              <a className="bg nav-link text-uppercase" href="#">
                Catalogues
              </a>
            </li>
            <li className="nav-item">
              <a className="bg nav-link text-uppercase" href="#">
                Contact
              </a>
            </li>
          </ul>
          <ul className="d-flex d-lg-none navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <FontAwesomeIcon icon={faShoppingBag} />
              </a>
            </li>
          </ul>
        </div>
        <div className="d-none d-lg-flex align-items-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <FontAwesomeIcon icon={faShoppingBag} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
