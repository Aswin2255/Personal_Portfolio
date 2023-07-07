function Cards({ projects }) {
  return (
    <div className="p-10">
      <div className="max-w-sm rounded overflow-hidden shadow-lg font-mono dark:text-white border dark:border-slate-800">
        <img className="w-full" src={projects.src} alt="Mountain"></img>
        <div className="px-6 py-4 ">
          <div className="font-bold text-xl mb-2">{projects?.name}</div>
          <p className="dark:text-white text-base">{projects?.desc}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button
            onClick={(e) => window.open(projects?.livelink)}
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Live Demo
          </button>
          <button
            onClick={(e) => window.open(projects?.sourcecode)}
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Source code
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
