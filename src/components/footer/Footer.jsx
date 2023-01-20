import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/img/leewebs.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/github_white.png";
import navIcon4 from "../../assets/img/nav-icon4.png";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img className="logo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="a">
            <div className="social-icon">
            <a href="https://github.com/leewebstechnologies">
                <img src={navIcon3} alt="github" />
              </a>
              <a
                href="https://wa.me/+2348084838268"
                target="_link"
                rel="no referrer"
              >
                <img src={navIcon4} alt="whatsapp icon" />
              </a>
              <a href="https://www.linkedin.com/in/aliu-ajibade-a43210139">
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a href="https://web.facebook.com/ali.ajibade.946">
                <img src={navIcon2} alt="facebook" />
              </a>
            </div>
            <p>Copyright © 2023 - Leewebs</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
