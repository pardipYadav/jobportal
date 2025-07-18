import CategoryCarousel from "./CategoryCarousel";
import HeroSection from "./heroSection";
import Navbar from "./shared/Navbar";
import LatestJobs from "./LatestJobs"
import Footer from "./shared/Footer";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs/>
      <Footer/>
    </div>
  );
};
export default Home;
