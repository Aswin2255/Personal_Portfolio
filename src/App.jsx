
import { useEffect } from 'react';
import './App.css'

import Home from './pages/Home'
import {useSelector} from 'react-redux'

function App() {
  const darkmode = useSelector((state) => state.mode.darkmode);
 

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);
 

  return (
    
     <Home/>
    
      
  )
}

export default App
