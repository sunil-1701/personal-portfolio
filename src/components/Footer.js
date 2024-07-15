import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark-white.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sunil-kushwaha-93350526b">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/sunil-1701">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/sunil_kushwaha_17">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
