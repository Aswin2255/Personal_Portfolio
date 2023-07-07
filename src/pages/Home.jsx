import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";

function Home() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Navbar />
      <About />
      <Projects/>
    </div>
  );
}

export default Home;
