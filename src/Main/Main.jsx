import About from "../Components/About";
import Banner from "../Components/Banner";
import BannerNew from "../Components/BannerNew";
import Contact from "../Components/Contact";
import Education from "../Components/Education";
import Experience from "../Components/Experience";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";


const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <Banner></Banner> */}
      <BannerNew></BannerNew>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Main;