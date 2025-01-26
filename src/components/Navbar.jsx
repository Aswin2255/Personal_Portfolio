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
           {
                dark ? "Light" : "Dark"
           }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
