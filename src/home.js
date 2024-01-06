import avatar from "./photo.png";
import {FaInstagram} from "react-icons/fa6";
import {FaGithub} from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa6";
import { Link } from "react-router-dom";







function Home(){
    return(
    
        <div className='home' >
            
            
            
            <div>
                <img className="avatar" src={avatar} alt="photo"/>
            </div>
            <div className="avatar-det">
                <div className="det-1">
                    <h2>Hi, I'm Prakashraj N</h2>
                    
                    <h3>Front-end React Developer</h3>

                    <p className="description">I'm Prakashraj N. A Front-end React Developer from TamilNadu </p>
                </div>
                <div className="logo">
                
                    <a className="logo-link" href="https://www.instagram.com/prakashraj_18" target="_blank" rel='noopener noreferrer'><FaInstagram /></a>
                
                    <a className="logo-link" href="https://github.com/Prakashraj-N" target="_blank" rel='noopener noreferrer'><FaGithub /></a>
               
                    <a className="logo-link" href="https://www.linkedin.com/in/prakashraj-n-3532b02a0" target="_blank" rel='noopener noreferrer'><FaLinkedin /></a>
                

                </div>
            </div>
            
            

        </div>
    )

}





export default  Home;