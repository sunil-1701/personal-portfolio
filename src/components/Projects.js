import { Col, Container, Row, Tab, Nav} from "react-bootstrap";
import { ProjectCards } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import portfoliopage from "../assets/img/portfolio-page.png";
import projImg1 from "../assets/img/project-img1.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Design & Development",
      imgUrl: portfoliopage,
    },
    {
      title: "Credit Card Fraud",
      description: "Anomaly Detection, Machine Learning",
      imgUrl: projImg1,
    },
    ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCards
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}  alt=""/>
    </section>
  );
};
