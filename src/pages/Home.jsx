import Navbar from "../components/Navbar";
import About from "../components/About";

function Home() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Navbar />
      <About />
    </div>
  );
}

export default Home;
