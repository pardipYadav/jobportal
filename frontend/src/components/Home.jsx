import CategoryCarousel from "./CategoryCarousel";
import HeroSection from "./HeroSection";
import Navbar from "./shared/Navbar";
import LatestJobs from "./LatestJobs";
import Footer from "./shared/Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const Home = () => {
  useGetAllJobs();
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
    </div>
  );
};
export default Home;
