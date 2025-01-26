import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import ExperienceSection from "../components/Experience";
import ConnectSection from "../components/Connect";

function Home() {
  return (
    <div className="min-h-screen  dark:bg-gray-900">
      <Navbar />
      <div className="max-w-6xl mx-auto px-0 sm:px-4 md:px-8">
      <About />
      <ExperienceSection/>
      <ConnectSection/>
     <Projects/>
      <Footer />
      </div>
     {
      /* 
     
      <Footer />
      */
     }
     
    </div>
  );
}

export default Home;
