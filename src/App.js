import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Sidebar } from "./components/SideBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import ClientReviews, { Reviews } from "./components/Reviews";
// import { FaWhatsapp } from "react-icons/fa";

function App() {
  function openWhatsApp() {
    window.open("https://wa.me/+92 303 9639571", "_blank");
  }

  return (
    <div className="App">
      <button className="whatsapp-button" onClick={openWhatsApp}>
        {/* <FaWhatsapp  /> */}
        <i className="bi bi-whatsapp" style={{ fontSize: "30px" }}></i>
      </button>
      <Sidebar />
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <ClientReviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
