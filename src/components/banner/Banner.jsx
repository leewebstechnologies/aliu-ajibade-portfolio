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
                    I attended Zion African Church Primary school Alagbaa,
                    Iyana-Ipaja, Agege from 1991 to 1996 and State high school
                    Oyewole, Agege from 1996 to 2002 for my primary and
                    secondary education respectively. I graduated in Accounting
                    from the university of Lagos in 2014. I attend Annahdah
                    institute of Arabic and Islamic studies from 2007 till date.
                    I attended Zad Academy, Makkah, Kingdom of Saudi Arabia
                    where I bagged a diploma in Islamic Law (with a distinction)
                    from 2020 to 2022. I worked as a software developer and
                    graphic designer intern in Techend Incubation Limited,
                    Oshodi, Lagos from 2018 to 2020. I now work as a freelancer
                    - Graphic designer and web developer.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let's connect <ArrowRightCircle size={25} />
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
