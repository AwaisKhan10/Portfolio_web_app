import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/spatay.png";
import projImg2 from "../assets/img/mrbook.png";
import projImg3 from "../assets/img/softgalaxy.png";
import projImg4 from "../assets/img/horecaffe.png";
import projImg5 from "../assets/img/hirecardive.png";
import projImg6 from "../assets/img/rains.png";
import App1 from "../assets/img/lamma.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "https://spatay.com/",
      description: "Travel and Tourism Website",
      imgUrl: projImg1,
    },
    {
      title: "https://mrbookpeshawar.com",
      description: "Online Books Libiray",
      imgUrl: projImg2,
    },
    {
      title: "https://softgalaxies.com/",

      description: "Software comapny services Website",
      imgUrl: projImg3,
    },
    {
      title: "https://www.horecaffe.com/",

      description: "Furniture Website",
      imgUrl: projImg4,
    },
    {
      title: "https://hirecardrive.com/",

      description: "Rent a Car Website",
      imgUrl: projImg5,
    },
    {
      title: "https://rains.com/",

      description: "Ecommerce website",
      imgUrl: projImg6,
    },
    {
      title: "https://apps.apple.com/pk/app/lamma-app/id1605119039",
      description:
        "Lamma mobile application is all about planning your event whether it is a Birthday party, wedding, Family Gathering, or even a business gathering at your workplace",
      imgUrl: App1,
    },
  ];
  const Approjects = [
    {
      title: "https://apps.apple.com/pk/app/lamma-app/id1605119039",
      description:
        "Lamma mobile application is all about planning your event whether it is a Birthday party, wedding, Family Gathering, or even a business gathering at your workplace",
      imgUrl: App1,
    },
  ];
  const Webprojects = [
    {
      title: "https://spatay.com/",
      description: "Travel and Tourism Website",
      imgUrl: projImg1,
    },
    {
      title: "https://mrbookpeshawar.com",
      description: "Online Books Libiray",
      imgUrl: projImg2,
    },
    {
      title: "https://softgalaxies.com/",

      description: "Software comapny services Website",
      imgUrl: projImg3,
    },
    {
      title: "https://www.horecaffe.com/",

      description: "Furniture Website",
      imgUrl: projImg4,
    },
    {
      title: "https://hirecardrive.com/",

      description: "Rent a Car Website",
      imgUrl: projImg5,
    },
    {
      title: "https://rains.com/",

      description: "Ecommerce website",
      imgUrl: projImg6,
    },
    
  ];

  return (
    <section className="project" id="project">
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">All</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Mobile Applications</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Websites</Nav.Link>
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
                          {Approjects.map((Approject, index) => {
                            return <ProjectCard key={index} {...Approject} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {Webprojects.map((Webproject, index) => {
                            return <ProjectCard key={index} {...Webproject} />;
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
