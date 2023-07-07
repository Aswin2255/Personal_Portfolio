import { useDispatch, useSelector } from "react-redux";
import { Themeaction } from "../../redux/Themeslice";

function Navbar() {
  const dispatch = useDispatch()
  const dark = useSelector((state) => state.mode.darkmode);
  const changetheme = ()=>{
         dispatch(Themeaction.Setmode(!dark))
  }
  return (
    <div className="top-0 sticky">
      <nav className="bg-white dark:border-slate-800 dark:bg-gray-900  border-b ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <span className="self-center text-2xl font-mono font-bold whitespace-nowrap dark:text-white">
              AswinKumar
            </span>
          </a>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default ">
          
          </div>
          <div onClick={changetheme} className="dark:text-white cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
