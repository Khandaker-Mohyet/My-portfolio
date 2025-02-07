import { Outlet } from "react-router-dom";
import About from "../Components/About";
import BannerNew from "../Components/BannerNew";
import Contact from "../Components/Contact";
import Education from "../Components/Education";
import Experience from "../Components/Experience";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";


const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <BannerNew></BannerNew>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;