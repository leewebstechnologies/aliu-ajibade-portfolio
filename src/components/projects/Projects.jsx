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
import projImg13 from "../../assets/img/project-img13.jpg";
import projImg14 from "../../assets/img/project-img14.jpg";
import projImg15 from "../../assets/img/project-img15.jpg";
import TrackVisibility from "react-on-screen";
import "animate.css";

const Projects = () => {
  const projects = [
    {
      title: "SmartBuy Advert Banner",
      description: "Graphic Design",
      imgUrl: projImg1,
    },

    {
      title: "Gorgonia Advert Banner",
      description: "Graphic Design",
      imgUrl: projImg10,
    },
    {
      title: "Origami Story Book",
      description: "Graphic Design",
      imgUrl: projImg3,
    },
    {
      title: "FoodMania",
      description: "UI/UX Design",
      imgUrl: projImg2,
    },
    {
      title: "Kademofs Limited Banner",
      description: "Graphic Design",
      imgUrl: projImg5,
    },
    {
      title: "STK POS Banner",
      description: "Graphic Design",
      imgUrl: projImg13,
    },
  ];

  const projects_two = [
    {
      title: "Manbaul Ilm School Banner",
      description: "Graphic Design",
      imgUrl: projImg4,
    },
    {
      title: "Leewebs Advert Banner",
      description: "Graphic Design",
      imgUrl: projImg7,
    },
    {
      title: "Kademofs Limited Banner",
      description: "Graphic Design",
      imgUrl: projImg5,
    },
    {
      title: "Manbaul Ilm Job Advert Banner",
      description: "Graphic Design",
      imgUrl: projImg6,
    },
    {
      title: "SmartBuy Business Card",
      description: "Graphic Design",
      imgUrl: projImg11,
    },
  ];

  const projects_three = [
    {
      title: "Leewebs Banner",
      description: "Graphic Design",
      imgUrl: projImg14,
    },
    {
      title: "SmartBuy ID Card",
      description: "Graphic Design",
      imgUrl: projImg8,
    },
    {
      title: "SmartBuy Letterhead Paper",
      description: "Graphic Design",
      imgUrl: projImg9,
    },
    {
      title: "SmartBuy Business Card",
      description: "Graphic Design",
      imgUrl: projImg15,
    },
    {
      title: "CubeVest App",
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
                  <h2>Software Development Projects</h2>
                  <p>
                    Proven experience building successful products for clients
                    across the globe.
                  </p>
                  <div className="proj">
                    <a href="https://ajalatravels.netlify.app">
                      <h3 className="web">Ajala Travels</h3>
                    </a>
                    <a href="https://maybee-stores.netlify.app">
                      <h3 className="web">MayBee Stores</h3>
                    </a>
                    <a href="https://aliajiabde.netlify.app">
                      <h3 className="web">Ali Ajibade Blog</h3>
                    </a>
                    <a href="https://tesla-clone-leewebs.netlify.app">
                      <h3 className="web">Tesla Clone</h3>
                    </a>
                  </div>
                  <div className="proj">
                    <a href="https://leewebs.netlify.app">
                      <h3 className="web">Leewebs</h3>
                    </a>
                    <a href="https://facebook-clone-ui.netlify.app">
                      <h3 className="web">Facebook Clone</h3>
                    </a>
                    <a href="https://lukend.netlify.app">
                      <h3 className="web">Lukend</h3>
                    </a>
                  </div>

                  <h2 style={{ marginTop: "2rem" }}>Graphic Design Projects</h2>
                  <p>
                    Proven experience making eye-catchy designs for clients
                    across the globe
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
