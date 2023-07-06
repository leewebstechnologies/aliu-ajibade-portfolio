import { useState, useEffect } from "react";
import "./banner.css";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
// import { isVisible } from "@testing-library/user-event/dist/utils/misc/isVisible";

const Banner = () => {
  const [loopNumber, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Front-End Developer", "Graphic Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNumber % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNumber(loopNumber + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hello, I'm Ali. I'm a`}
                    <span className="wrap"> {text}</span>
                  </h1>
                  <p>
                    I am an experienced software developer who is very
                    proficient at building scalable, fast performing
                    applications and software using React Js and its ecosystem.
                    I have thrived in the web development space for more than 3+
                    years now and have amassed the prerequisite expertise needed
                    to bring your Web Product to life. What gives me an edge is
                    the fact that I also know how to make eye-catching graphic
                    design.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    <a
                      className="connect"
                      href="../assets/aliuOlalekanAjibade.pdf"
                      download
                    >
                      Download CV <ArrowRightCircle size={25} />
                    </a>
                    {/* <a
                    className="connect"
                    href="https://wa.me/+2348084838268"
                    target="_link"
                    rel="no referrer"
                    >
                      Let's connect <ArrowRightCircle size={25} />
                      <br /> <br />
                    </a> */}
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
