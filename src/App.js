
import './App.css';
import avatar from "./photo.png";

import Home from "./home.js";
import Project from "./project.js";
import About from "./about.js"


import {Routes,Route,Link} from "react-router-dom";


function App() {
  return (

    




    
    <div className="app">
     
      
      <div className='navbar'>
          <div className='nav-left'>
            <img className='pic' src={avatar}></img>
            <h1 className='pic-name'>Prakashraj N</h1>
          </div>
          
          <ul className='links'>
            <Link to="/" className='link'>home</Link> 
            <Link to="/project" className='link'  >project</Link>
            <Link to="/about" className='link'>about</Link>
          </ul>
      </div>
      <div className='container'>
        
        <Routes>
          
            <Route exact path="/" element={<Home/> } > </Route>
            <Route path="/project" element={<Project/>} >  </Route>
            <Route path="/about" element={<About/>} >  </Route>
          
        </Routes>
        
      </div>



      
    </div>
    
  );
}

export default App;
