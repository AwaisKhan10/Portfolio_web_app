import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/spatay.png";
import projImg2 from "../assets/img/mrbook.png";
import projImg3 from "../assets/img/softgalaxy.png";
import projImg4 from "../assets/img/horecaffe.png";
import projImg5 from "../assets/img/hirecardive.png";
import projImg6 from "../assets/img/rains.png";
import projImg7 from "../assets/img/JeepSafari.png";
import projImg8 from "../assets/img/PolorPro.png";
import projImg9 from "../assets/img/Traval.png";
import projImg10 from "../assets/img/FreedamElite.png";
import app1 from "../assets/img/App1.png";
import app2 from "../assets/img/App2.png";
import app3 from "../assets/img/App3.png";
import app4 from "../assets/img/App4.png";
import app5 from "../assets/img/App5.png";
import app6 from "../assets/img/App6.png";
import app7 from "../assets/img/App7.png";
import app8 from "../assets/img/App8.png";
import app9 from "../assets/img/App9.webp";
import app10 from "../assets/img/App10.webp";
import projImg11 from "../assets/img/codendcoffee.png";
import projImg12 from "../assets/img/Honestmed.png";
import projImg13 from "../assets/img/tushifa.png";
import projImg14 from "../assets/img/scarletconstruction.png";
import projImg15 from "../assets/img/sastaticket.png";
import projImg16 from "../assets/img/Otawix.png";
import projImg17 from "../assets/img/dvcsales.png";
// import app11 from "../assets/img/App11.webp";
// import App1 from "../assets/img/lamma.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
// import app4 from "../assets/img/App4.png";
// import { App } from "react-bootstrap-icons";

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [showApps, setShowApps] = useState(false);
  const [showWebsites, setShowWebsites] = useState(false);

  const projects = [
    {
      title: "Costa Coffee",
      description:
        "The Costa Coffee app makes enjoying your favorite coffee easier and more rewarding. Collect Costa Club beans, order drinks for pickup, find nearby stores, and redeem beans for free treats",
      imgUrl: app1,
      link: "https://play.google.com/store/apps/details?id=uk.co.club.costa.costa&pcampaignid=web_share",
      techStack: [
        { name: "Java", url: "https://docs.oracle.com/javase/8/docs/" },
        { name: "Android SDK", url: "https://developer.android.com/sdk" },
      ],
    },
    {
      title: "Ikanisa",
      description:
        "IKANISA empowers African communities by digitizing financial contributions, group savings, and social activities. It enhances engagement and streamlines payments for churches, events, and more.",
      imgUrl: app2,
      link: "https://play.google.com/store/apps/details?id=com.ikanisa.flutter&pcampaignid=web_share",
      techStack: [
        { name: "Flutter", url: "https://flutter.dev/docs" },
        { name: "Dart", url: "https://dart.dev/guides" },
      ],
    },
    {
      title: "RideZo",
      description:
        "RideZo is a ride-hailing app connecting drivers and users with real-time tracking, secure payments, and smooth booking. Experience safe, efficient, and reliable transportation anywhere.",
      imgUrl: app3,
      link: "https://play.google.com/store/apps/details?id=com.kwikride24x7.techrty&pcampaignid=web_share",
      techStack: [
        { name: "Java", url: "https://docs.oracle.com/javase/8/docs/" },
        { name: "Android SDK", url: "https://developer.android.com/sdk" },
      ],
    },
    {
      title: "Spatay",
      description: "Travel and Tourism Website",
      imgUrl: projImg1,
      link: "https://spatay.com/",
      techStack: [
        { name: "React", url: "https://reactjs.org/docs/getting-started.html" },
        { name: "Node.js", url: "https://nodejs.org/en/docs/" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com/docs" },
      ],
    },
    {
      title: "Mr. Book",
      description: "Online Books Library for Peshawar",
      imgUrl: projImg2,
      link: "https://mrbookpeshawar.com",
      techStack: [
        { name: "Vue.js", url: "https://vuejs.org/v2/guide/" },
        { name: "Firebase", url: "https://firebase.google.com/docs" },
        {
          name: "Bootstrap",
          url: "https://getbootstrap.com/docs/4.0/getting-started/introduction/",
        },
      ],
    },
    {
      title: "Soft Galaxies",
      description: "Software company services Website",
      imgUrl: projImg3,
      link: "https://softgalaxies.com/",
      techStack: [
        { name: "Vue.js", url: "https://vuejs.org/v2/guide/" },
        { name: "Firebase", url: "https://firebase.google.com/docs" },
        {
          name: "Bootstrap",
          url: "https://getbootstrap.com/docs/4.0/getting-started/introduction/",
        },
      ],
    },
    {
      title: "Horecaffe",
      description: "Furniture Website",
      imgUrl: projImg4,
      link: "https://www.horecaffe.com/",
      techStack: [
        { name: "React", url: "https://reactjs.org/docs/getting-started.html" },
        { name: "Node.js", url: "https://nodejs.org/en/docs/" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com/docs" },
      ],
    },
    {
      title: "Hire Car Drive",
      description: "Rent a Car Website",
      imgUrl: projImg5,
      link: "https://hirecardrive.com/",
      techStack: [
        { name: "Vue.js", url: "https://vuejs.org/v2/guide/" },
        { name: "Firebase", url: "https://firebase.google.com/docs" },
        {
          name: "Bootstrap",
          url: "https://getbootstrap.com/docs/4.0/getting-started/introduction/",
        },
      ],
    },
    {
      title: "Rains",
      description: "Ecommerce website",
      imgUrl: projImg6,
      link: "https://rains.com/",
      techStack: [
        { name: "React", url: "https://reactjs.org/docs/getting-started.html" },
        { name: "Node.js", url: "https://nodejs.org/en/docs/" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com/docs" },
      ],
    },
    {
      title: "Jeep Safari",
      description: "Travel and Tourism Website",
      imgUrl: projImg7,
      link: "https://corbettvalley.com/",
      techStack: [
        { name: "React", url: "https://reactjs.org/docs/getting-started.html" },
        { name: "Node.js", url: "https://nodejs.org/en/docs/" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com/docs" },
      ],
    },
    {
      title: "Traval norie",
      description: "Travel and Tourism Website",
      imgUrl: projImg8,
      link: "https://travelnoire.com/",
      techStack: [
        { name: "Vue.js", url: "https://vuejs.org/v2/guide/" },
        { name: "Firebase", url: "https://firebase.google.com/docs" },
        {
          name: "Bootstrap",
          url: "https://getbootstrap.com/docs/4.0/getting-started/introduction/",
        },
      ],
    },
    {
      title: "Polor Pro",
      description: "Selling marketing products",
      imgUrl: projImg9,
      link: "https://www.polarpro.com/",
      techStack: [
        { name: "React", url: "https://reactjs.org/docs/getting-started.html" },
        { name: "Node.js", url: "https://nodejs.org/en/docs/" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com/docs" },
      ],
    },
    {
      title: "Freedome Elite Funding",
      description: "Funding Website Trading and Investment",
      imgUrl: projImg10,
      link: "https://freedomelitefunding.com/",
      techStack: [
        { name: "Vue.js", url: "https://vuejs.org/v2/guide/" },
        { name: "Firebase", url: "https://firebase.google.com/docs" },
        {
          name: "Bootstrap",
          url: "https://getbootstrap.com/docs/4.0/getting-started/introduction/",
        },
      ],
    },
    {
      title: "codendcoffee",
      description: "Funding Website Trading and Investment",
      imgUrl: projImg11,
      link: "https://www.codendcoffee.com/",
      techStack: [
        { name: "php", url: "https://www.php.net/docs.php" },
        {
          name: "Bootstrap",
          url: "https://getbootstrap.com/docs/4.0/getting-started/introduction/",
        },
      ],
    },
    {
      title: "Honestmed",
      description: "Funding Website Trading and Investment",
      imgUrl: projImg12,
      link: "https://honestmed.com/",
      techStack: [
        {
          name: "react js",
          url: "https://reactjs.org/docs/getting-started.html",
        },
        { name: "php", url: "https://www.php.net/docs.php" },
        {
          name: "Bootstrap",
          url: "https://getbootstrap.com/docs/4.0/getting-started/introduction/",
        },
      ],
    },
    {
      title: "Tushifa",
      description: "Funding Website Trading and Investment",
      imgUrl: projImg13,
      link: "https://tushifa.org/",
      techStack: [
        {
          name: "react js",
          url: "https://reactjs.org/docs/getting-started.html",
        },
        { name: "php", url: "https://www.php.net/docs.php" },
        {
          name: "Bootstrap",
          url: "https://getbootstrap.com/docs/4.0/getting-started/introduction/",
        },
      ],
    },
    {
      title: "Scarlet Construction",
      description: "Funding Website Trading and Investment",
      imgUrl: projImg14,
      link: "https://scarletconstruction.ca/",
      techStack: [
        {
          name: "react js",
          url: "https://reactjs.org/docs/getting-started.html",
        },
        { name: "php", url: "https://www.php.net/docs.php" },
        {
          name: "Bootstrap",
          url: "https://getbootstrap.com/docs/4.0/getting-started/introduction/",
        },
      ],
    },
    {
      title: "sastaticket",
      description: "Funding Website Trading and Investment",
      imgUrl: projImg15,
      link: "https://www.sastaticket.pk/",
      techStack: [
        {
          name: "react js",
          url: "https://reactjs.org/docs/getting-started.html",
        },
        { name: "php", url: "https://www.php.net/docs.php" },
        {
          name: "Bootstrap",
          url: "https://getbootstrap.com/docs/4.0/getting-started/introduction/",
        },
      ],
    },
    {
      title: "Otawix",
      description: "Funding Website Trading and Investment",
      imgUrl: projImg16,
      link: "https://b2c.otawix.com/",
      techStack: [
        {
          name: "react js",
          url: "https://reactjs.org/docs/getting-started.html",
        },
        { name: "php", url: "https://www.php.net/docs.php" },
        {
          name: "Bootstrap",
          url: "https://getbootstrap.com/docs/4.0/getting-started/introduction/",
        },
      ],
    },
    {
      title: "dvcsales",
      description: "Funding Website Trading and Investment",
      imgUrl: projImg17,
      link: "https://dvcsales.com/",
      techStack: [
        {
          name: "react js",
          url: "https://reactjs.org/docs/getting-started.html",
        },
        { name: "php", url: "https://www.php.net/docs.php" },
        {
          name: "Bootstrap",
          url: "https://getbootstrap.com/docs/4.0/getting-started/introduction/",
        },
      ],
    },
    {
      title: "Costa Coffee",
      description:
        "The Costa Coffee app makes enjoying your favorite coffee easier and more rewarding. Collect Costa Club beans, order drinks for pickup, find nearby stores, and redeem beans for free treats",
      imgUrl: app1,
      link: "https://play.google.com/store/apps/details?id=uk.co.club.costa.costa&pcampaignid=web_share",
      techStack: [
        { name: "Java", url: "https://docs.oracle.com/javase/8/docs/" },
        { name: "Android SDK", url: "https://developer.android.com/sdk" },
      ],
    },
    {
      title: "Ikanisa",
      description:
        "IKANISA empowers African communities by digitizing financial contributions, group savings, and social activities. It enhances engagement and streamlines payments for churches, events, and more.",
      imgUrl: app2,
      link: "https://play.google.com/store/apps/details?id=com.ikanisa.flutter&pcampaignid=web_share",
      techStack: [
        { name: "Flutter", url: "https://flutter.dev/docs" },
        { name: "Dart", url: "https://dart.dev/guides" },
      ],
    },
    {
      title: "RideZo",
      description:
        "RideZo is a ride-hailing app connecting drivers and users with real-time tracking, secure payments, and smooth booking. Experience safe, efficient, and reliable transportation anywhere.",
      imgUrl: app3,
      link: "https://play.google.com/store/apps/details?id=com.kwikride24x7.techrty&pcampaignid=web_share",
      techStack: [
        { name: "Java", url: "https://docs.oracle.com/javase/8/docs/" },
        { name: "Android SDK", url: "https://developer.android.com/sdk" },
      ],
    },
    {
      title: "Locyal",
      description:
        "Locyal is a digital loyalty platform connecting stores and shoppers. It offers seamless rewards, helping businesses build lasting customer relationships while enhancing the shopping experience.",
      imgUrl: app4,
      link: "https://play.google.com/store/apps/details?id=pk.tritech.locyal&pcampaignid=web_share",
      techStack: [
        { name: "Java", url: "https://docs.oracle.com/javase/8/docs/" },
        { name: "Android SDK", url: "https://developer.android.com/sdk" },
      ],
    },
    {
      title: "Twala Meals",
      description:
        "Twala Meals delivers nutritious, affordable meals to busy individuals and families. Choose from diverse dietary options and enjoy hassle-free meal plans tailored to your lifestyle.",
      imgUrl: app5,
      link: "https://play.google.com/store/apps/details?id=com.twalameals.customerapp&pcampaignid=web_share",
      techStack: [
        { name: "Flutter", url: "https://flutter.dev/docs" },
        { name: "Dart", url: "https://dart.dev/guides" },
      ],
    },
    {
      title: "Twala Meals Manager",
      description:
        "Twala Meals Manager helps restaurant owners streamline orders, track deliveries, and manage customer interactions efficiently. It ensures a smooth and reliable meal service experience.",
      imgUrl: app6,
      link: "https://play.google.com/store/apps/details?id=com.twalameals.manager&pcampaignid=web_share",
      techStack: [
        { name: "Flutter", url: "https://flutter.dev/docs" },
        { name: "Dart", url: "https://dart.dev/guides" },
      ],
    },
    {
      title: "Twala Meals Driver",
      description:
        "The Twala Meals Driver app helps delivery drivers manage tasks, track orders, and provide timely service. It enhances efficiency and ensures smooth food delivery operations.",
      imgUrl: app7,
      link: "https://play.google.com/store/apps/details?id=com.twalameals.driver&pcampaignid=web_share",
      techStack: [
        { name: "Flutter", url: "https://flutter.dev/docs" },
        { name: "Dart", url: "https://dart.dev/guides" },
      ],
    },
    {
      title: "Steps Expert",
      description:
        "Steps Expert tracks daily steps and provides personalized nutrition advice. Stay active, monitor progress, and achieve your fitness goals with this ultimate health companion.",
      imgUrl: app8,
      link: "https://play.google.com/store/apps/details?id=com.stepsexpert.fluxtonx&pcampaignid=web_share",
      techStack: [
        { name: "Java", url: "https://docs.oracle.com/javase/8/docs/" },
        { name: "Android SDK", url: "https://developer.android.com/sdk" },
      ],
    },
    {
      title: "Dentus",
      description:
        "Dentus helps health clinicians manage schedules, track appointments, and store patient records securely. It simplifies clinic operations and improves patient care efficiency.",
      imgUrl: app9,
      link: "https://play.google.com/store/apps/details?id=pk.tritech.dentus&pcampaignid=web_share",
      techStack: [
        { name: "Java", url: "https://docs.oracle.com/javase/8/docs/" },
        { name: "Android SDK", url: "https://developer.android.com/sdk" },
      ],
    },
    {
      title: "Resilience",
      description:
        "Resilience Strength is a fitness app offering customized workout plans for athletes. Trainers help you build strength, improve mobility, and boost endurance throughout the season.",
      imgUrl: app10,
      link: "https://play.google.com/store/apps/details?id=ca.resiliencestrength.app&pcampaignid=web_share",
      techStack: [
        { name: "Java", url: "https://docs.oracle.com/javase/8/docs/" },
        { name: "Android SDK", url: "https://developer.android.com/sdk" },
      ],
    },
  ];

  const Approjects = [
    {
      title: "Costa Coffee",
      description:
        "The Costa Coffee app makes enjoying your favorite coffee easier and more rewarding. Collect Costa Club beans, order drinks for pickup, find nearby stores, and redeem beans for free treats",
      imgUrl: app1,
      link: "https://play.google.com/store/apps/details?id=uk.co.club.costa.costa&pcampaignid=web_share",
      techStack: ["Java", "Android SDK"],
    },
    {
      title: "Ikanisa",
      description:
        "IKANISA empowers African communities by digitizing financial contributions, group savings, and social activities. It enhances engagement and streamlines payments for churches, events, and more.",
      imgUrl: app2,
      link: "https://play.google.com/store/apps/details?id=com.ikanisa.flutter&pcampaignid=web_share",
      techStack: ["Flutter", "Dart"],
    },
    {
      title: "RideZo",
      description:
        "RideZo is a ride-hailing app connecting drivers and users with real-time tracking, secure payments, and smooth booking. Experience safe, efficient, and reliable transportation anywhere.",
      imgUrl: app3,
      link: "https://play.google.com/store/apps/details?id=com.kwikride24x7.techrty&pcampaignid=web_share",
      techStack: ["Java", "Android SDK"],
    },
    {
      title: "Locyal",
      description:
        "Locyal is a digital loyalty platform connecting stores and shoppers. It offers seamless rewards, helping businesses build lasting customer relationships while enhancing the shopping experience.",
      imgUrl: app4,
      link: "https://play.google.com/store/apps/details?id=pk.tritech.locyal&pcampaignid=web_share",
      techStack: ["Java", "Android SDK"],
    },
    {
      title: "Twala Meals",
      description:
        "Twala Meals delivers nutritious, affordable meals to busy individuals and families. Choose from diverse dietary options and enjoy hassle-free meal plans tailored to your lifestyle.",
      imgUrl: app5,
      link: "https://play.google.com/store/apps/details?id=com.twalameals.customerapp&pcampaignid=web_share",
      techStack: ["Flutter", "Dart"],
    },
    {
      title: "Twala Meals Manager",
      description:
        "Twala Meals Manager helps restaurant owners streamline orders, track deliveries, and manage customer interactions efficiently. It ensures a smooth and reliable meal service experience.",
      imgUrl: app6,
      link: "https://play.google.com/store/apps/details?id=com.twalameals.manager&pcampaignid=web_share",
      techStack: ["Flutter", "Dart"],
    },
    {
      title: "Twala Meals Driver",
      description:
        "The Twala Meals Driver app helps delivery drivers manage tasks, track orders, and provide timely service. It enhances efficiency and ensures smooth food delivery operations.",
      imgUrl: app7,
      link: "https://play.google.com/store/apps/details?id=com.twalameals.driver&pcampaignid=web_share",
      techStack: ["Flutter", "Dart"],
    },
    {
      title: "Steps Expert",
      description:
        "Steps Expert tracks daily steps and provides personalized nutrition advice. Stay active, monitor progress, and achieve your fitness goals with this ultimate health companion.",
      imgUrl: app8,
      link: "https://play.google.com/store/apps/details?id=com.stepsexpert.fluxtonx&pcampaignid=web_share",
      techStack: ["Java", "Android SDK"],
    },
    {
      title: "Dentus",
      description:
        "Dentus helps health clinicians manage schedules, track appointments, and store patient records securely. It simplifies clinic operations and improves patient care efficiency.",
      imgUrl: app9,
      link: "https://play.google.com/store/apps/details?id=pk.tritech.dentus&pcampaignid=web_share",
      techStack: ["Java", "Android SDK"],
    },
    {
      title: "Resilience",
      description:
        "Resilience Strength is a fitness app offering customized workout plans for athletes. Trainers help you build strength, improve mobility, and boost endurance throughout the season.",
      imgUrl: app10,
      link: "https://play.google.com/store/apps/details?id=ca.resiliencestrength.app&pcampaignid=web_share",
      techStack: ["Java", "Android SDK"],
    },
  ];

  const Webprojects = [
    {
      title: "Spatay",
      description: "Travel and Tourism Website",
      imgUrl: projImg1,
      link: "https://spatay.com/",
      techStack: ["React", "Node.js", "Tailwind CSS"],
    },
    {
      title: "Mr. Book",
      description: "Online Books Library for Peshawar",
      imgUrl: projImg2,
      link: "https://mrbookpeshawar.com",
      techStack: ["Vue.js", "Firebase", "Bootstrap"],
    },
    {
      title: "Soft Galaxies",
      description: "Software comapny services Website",
      imgUrl: projImg3,
      link: "https://softgalaxies.com/",
      techStack: ["Vue.js", "Firebase", "Bootstrap"],
    },
    {
      title: "Horecaffe",
      description: "Furniture Website",
      imgUrl: projImg4,
      link: "https://www.horecaffe.com/",
      techStack: ["React", "Node.js", "Tailwind CSS"],
    },
    {
      title: "Hire Car Drive",
      description: "Rent a Car Website",
      imgUrl: projImg5,
      link: "https://hirecardrive.com/",
      techStack: ["Vue.js", "Firebase", "Bootstrap"],
    },
    {
      title: "Rains",
      description: "Ecommerce website",
      imgUrl: projImg6,
      link: "https://rains.com/",
      techStack: ["React", "Node.js", "Tailwind CSS"],
    },
    {
      title: "Jeep Safari",
      description: "Travel and Tourism Website",
      imgUrl: projImg7,
      link: "https://corbettvalley.com/",
      techStack: ["React", "Node.js", "Tailwind CSS"],
    },
    {
      title: "Traval norie",
      description: "Travel and Tourism Website",
      imgUrl: projImg8,
      link: "https://travelnoire.com/",
      techStack: ["Vue.js", "Firebase", "Bootstrap"],
    },
    {
      title: "Polor Pro",
      description: "Selling marketing products",
      imgUrl: projImg9,
      link: "https://www.polarpro.com/",
      techStack: ["React", "Node.js", "Tailwind CSS"],
    },
    {
      title: "Freedome Elite Funding",
      description: "Funding Website Trading and Investment",
      imgUrl: projImg10,
      link: "https://freedomelitefunding.com/",
      techStack: ["Vue.js", "Firebase", "Bootstrap"],
    },
    {
      title: "codendcoffee",
      description: "Funding Website Trading and Investment",
      imgUrl: projImg11,
      link: "https://www.codendcoffee.com/",
      techStack: ["php", "Bootstrap"],
    },
    {
      title: "Honestmed",
      description: "Funding Website Trading and Investment",
      imgUrl: projImg12,
      link: "https://honestmed.com/",
      techStack: ["react js", "php", "Bootstrap"],
    },
    {
      title: "Tushifa",
      description: "Funding Website Trading and Investment",
      imgUrl: projImg13,
      link: "https://tushifa.org/",
      techStack: ["react js", "php", "Bootstrap"],
    },
    {
      title: "Scarlet Construction",
      description: "Funding Website Trading and Investment",
      imgUrl: projImg14,
      link: "https://scarletconstruction.ca/",
      techStack: ["react js", "php", "Bootstrap"],
    },
    {
      title: "sastaticket",
      description: "Funding Website Trading and Investment",
      imgUrl: projImg15,
      link: "https://www.sastaticket.pk/",
      techStack: ["react js", "php", "Bootstrap"],
    },
    {
      title: "Otawix",
      description: "Funding Website Trading and Investment",
      imgUrl: projImg16,
      link: "https://b2c.otawix.com/",
      techStack: ["react js", "php", "Bootstrap"],
    },
    {
      title: "dvcsales",
      description: "Funding Website Trading and Investment",
      imgUrl: projImg17,
      link: "https://dvcsales.com/",
      techStack: ["react js", "php", "Bootstrap"],
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 6);
  const visibleApps = showApps ? Approjects : Approjects.slice(0, 6);
  const visibleWebsites = showWebsites ? Webprojects : Webprojects.slice(0, 6);

  const toggleShowAll = () => setShowAll(!showAll);
  const toggleShowApps = () => setShowApps(!showApps);
  const toggleShowWebsites = () => setShowWebsites(!showWebsites);
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
                    standard dummy text ever since the 1500s.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">All</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Apps</Nav.Link>
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
                          {visibleProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                        {showAll && (
                          <div className="text-center mt-3">
                            <button
                              className="ShowLess"
                              onClick={() => setShowAll(false)}
                            >
                              Show Less
                            </button>
                          </div>
                        )}
                        {!showAll && (
                          <div className="text-center mt-3">
                            <button
                              className="ViewMore"
                              onClick={() => setShowAll(true)}
                            >
                              View More
                            </button>
                          </div>
                        )}
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {visibleApps.map((Approject, index) => (
                            <ProjectCard key={index} {...Approject} />
                          ))}
                        </Row>
                        {showApps && (
                          <div className="text-center mt-3">
                            <button
                              className="ShowLess"
                              onClick={() => setShowApps(false)}
                            >
                              Show Less
                            </button>
                          </div>
                        )}
                        {!showApps && (
                          <div className="text-center mt-3">
                            <button
                              className="ViewMore"
                              onClick={() => setShowApps(true)}
                            >
                              View More
                            </button>
                          </div>
                        )}
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          {visibleWebsites.map((Webproject, index) => (
                            <ProjectCard key={index} {...Webproject} />
                          ))}
                        </Row>
                        {showWebsites && (
                          <div className="text-center mt-3">
                            <button
                              className="ShowLess"
                              onClick={() => setShowWebsites(false)}
                            >
                              Show Less
                            </button>
                          </div>
                        )}
                        {!showWebsites && (
                          <div className="text-center mt-3">
                            <button
                              className="ViewMore"
                              onClick={() => setShowWebsites(true)}
                            >
                              View More
                            </button>
                          </div>
                        )}
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
