import About from "../Components/About";
import Banner from "../Components/Banner";
import BannerNew from "../Components/BannerNew";
import Navbar from "../Components/Navbar";


const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <Banner></Banner> */}
      <BannerNew></BannerNew>
      <About></About>
    </div>
  );
};

export default Main;