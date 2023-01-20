import "./projects.css";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import ProjectCard from "../projectcard/ProjectCard";
import colorSharp2 from "../../assets/img/color-sharp.png";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.jpg";
import projImg3 from "../../assets/img/project-img3.jpg";
import projImg4 from "../../assets/img/project-img4.jpg";
import projImg5 from "../../assets/img/project-img5.jpg";
import projImg6 from "../../assets/img/project-img6.jpg";
import projImg7 from "../../assets/img/project-img7.jpg";
import projImg8 from "../../assets/img/project-img8.png";
import projImg9 from "../../assets/img/project-img9.png";
import projImg10 from "../../assets/img/project-img10.jpg";
import projImg11 from "../../assets/img/project-img11.png";
import projImg12 from "../../assets/img/project-img12.png";
// import projImg13 from "../../assets/img/project-img13.jpg";
import TrackVisibility from "react-on-screen";
import "animate.css";

const Projects = () => {
  const projects = [
   
    {
      title: "FoodMania",
      description: "UI/UX Design",
      imgUrl: projImg2,
    },
   
    {
      title: "STK",
      description: "Graphic Design",
      imgUrl: projImg3,
    },
    {
      title: "SmartBuy",
      description: "Graphic Design",
      imgUrl: projImg1,
    },
  ];

  const projects_two = [
    {
      title: "Manbaul ilm",
      description: "Graphic Design",
      imgUrl: projImg4,
    },
    {
      title: "Kademofs",
      description: "Graphic Design",
      imgUrl: projImg5,
    },
    {
      title: "Manbaul ilm",
      description: "Graphic Design",
      imgUrl: projImg6,
    },
    {
      title: "Leewebs",
      description: "Graphic Design",
      imgUrl: projImg7,
    },
  ];

  const projects_three = [
    {
      title: "SmartBuy",
      description: "Graphic Design",
      imgUrl: projImg8,
    },
    {
      title: "SmartBuy",
      description: "Graphic Design",
      imgUrl: projImg9,
    },
    {
      title: "Gorgonia",
      description: "Graphic Design",
      imgUrl: projImg10,
    },
    {
      title: "CubeVest",
      description: "UI/UX Design",
      imgUrl: projImg11,
    },
    {
      title: "CubeVest",
      description: "UI/UX Design",
      imgUrl: projImg12,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I render services for customers of all sizes, specialising
                    in creating stylish, modern websites and graphic designs.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects_two.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects_three.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                    <h4>
                      <a
                        className="web"
                        href="https://tesla-clone-leewebs.netlify.app"
                      >
                        Tesla UI
                      </a>
                      <a className="web" href="https://lukend.netlify.app">
                        Lukend
                      </a>
                      <a
                        className="web"
                        href="https://facebook-clone-ui.netlify.app"
                      >
                        FaceBook UI
                      </a>
                      <a
                        className="web"
                        href="https://leewebs.netlify.app"
                      >
                        Leewebs
                      </a>
                    </h4>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};

export default Projects;
