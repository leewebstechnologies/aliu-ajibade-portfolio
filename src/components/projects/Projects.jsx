import "./projects.css";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import ProjectCard from "../projectcard/ProjectCard";
import colorSharp2 from "../../assets/img/color-sharp.png";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/lukend.jpg";
import projImg3 from "../../assets/img/tesla.jpg";
import projImg4 from "../../assets/img/project-img4.jpg";
import projImg5 from "../../assets/img/project-img5.jpg";
import projImg6 from "../../assets/img/facebook.jpg";
import projImg7 from "../../assets/img/project-img7.jpg";
import projImg8 from "../../assets/img/leewebs.jpg";
import projImg9 from "../../assets/img/project-img9.png";
import projImg10 from "../../assets/img/project-img10.jpg";
import projImg11 from "../../assets/img/project-img11.png";
import projImg12 from "../../assets/img/project-img12.png";
import projImg13 from "../../assets/img/project-img14.jpg";
import TrackVisibility from "react-on-screen";
import "animate.css";

const Projects = () => {
  const projects = [
    {
      title: "Lukend Digitals",
      description: "Website",
      imgUrl: projImg2,
    },

    // {
    //   title: "Tesla UI",
    //   description: "Web App",
    //   imgUrl: projImg3,
    // },
  ];

  const projects_two = [
    {
      title: "Facebook UI",
      description: "Website",
      imgUrl: projImg6,
    },
  ];

  const projects_three = [
    {
      title: "Leewebs",
      description: "Website",
      imgUrl: projImg8,
    },
  ];

  const projects_four = [
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
    {
      title: "Leewebs",
      description: "Graphic Design",
      imgUrl: projImg13,
    },
  ];

  const projects_five = [
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
    {
      title: "Leewebs",
      description: "Graphic Design",
      imgUrl: projImg13,
    },
  ];

  const projects_six = [
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
    {
      title: "Leewebs",
      description: "Graphic Design",
      imgUrl: projImg13,
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
                  <h2>Software Development Projects</h2>
                  <p>
                    Proven experience building successful products for clients
                    across for clients across the globe.
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
                        <a
                          style={{ color: "#fff" }}
                          href="https://lukend.netlify.app"
                        >
                          <Row>
                            {projects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                          </Row>
                        </a>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <a
                          style={{ color: "#fff" }}
                          href="https://facebook-clone-ui.netlify.app"
                        >
                          <Row>
                            {projects_two.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                          </Row>
                        </a>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <a
                          style={{ color: "#fff" }}
                          href="https://leewebs.netlify.app"
                        >
                          <Row>
                            {projects_three.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                          </Row>
                        </a>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

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
                  <h2 style={{ marginTop: "5rem" }}>Graphic Design Projects</h2>
                  <p>
                    Proven experience making eye-catchy designs for clients
                    across the globe.
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
                          {projects_four.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects_five.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects_six.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
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
