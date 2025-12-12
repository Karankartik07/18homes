import Footer from "./COMMON/Footer";
import Navbar from "./COMMON/Navbar";
import HomeBlogs from "./components/Blogs";
import ContactSection from "./components/ContactSection";
import HeroSlider from "./components/HeroSection";
import HomeAbout from "./components/HomeAbout";
import HomeServices from "./components/HomeService";
import InstrumentsSection from "./components/InstrumentsSection";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <main>
      <div>
      <Navbar/>
      <HeroSlider/>
      <HomeAbout/>
       <HomeServices/> 
      <HomeBlogs/>
      <InstrumentsSection/>
      <Testimonials/>
      <ContactSection/>
      <Footer/>
      
      </div>
    </main>
  );
}
