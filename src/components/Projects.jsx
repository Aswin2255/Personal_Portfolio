import Cards from "./Cards";

function Projects() {
  const projects = [
    {
      name: "Social media application",
      desc: "social media application build using Mongodb,express,react.js",
      src: "./social.png",
      livelink: "https://connectiflix.site/",
      sourcecode: "https://github.com/Aswin2255/Mernstack-Socialmedia.git",
    },
    {
      name: "E-commerse application",
      desc: "E-commerse application build using Node.js,mongodb,hbs",
      src: "./shopmart.png",
      livelink: "https://shopmart-ecomerse-app.onrender.com/",
      sourcecode: "https://github.com/Aswin2255/shopmart.git",
    },
    {
      name: "Shoping cart",
      desc: "Shoping cart frontend build using react+vite,redux",
      src: "./cart.png",
      livelink: "https://eloquent-starship-2d8fdb.netlify.app/",
      sourcecode: "https://github.com/Aswin2255/Shopping_Cart.git",
    },
  ];
  return (
    <div className="dark:text-white">
      <div className="flex justify-center text-2xl font-mono font-bold underline align-middle m-10">
        <h1>Projects</h1>
      </div>
      <div className="flex justify-between">
        <div className="lg:grid  grid-cols-3 gap-4">
          {projects.map((e) => {
            return <Cards projects={e} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
