import avatar from "./photo.png";
import {FaInstagram} from "react-icons/fa6";
import {FaGithub} from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa6";

import {BiLogoGmail} from "react-icons/bi";
import {IoIosContact} from "react-icons/io";



function About(){
    return(
        <div className="about" >
            <div >
                <img className="about-img" src={avatar} alt="photo"></img>
            </div>
            <div className="about-det">
                <p className="lines">__________________________________</p>
                <p > <span className="logo-li"><BiLogoGmail /></span>    prakashrajn2003@gmail.com</p>
                <p className="lines">__________________________________</p>
                <p ><span className="logo-li"><IoIosContact /></span>    8754653414</p>
                <p className="lines">__________________________________</p>

                <div className="logo">
                    <a className="logo-link" href="https://www.instagram.com/prakashraj_18" target="_blank" rel='noopener noreferrer'><FaInstagram /></a>
                
                    <a className="logo-link" href="https://github.com/Prakashraj-N" target="_blank" rel='noopener noreferrer'><FaGithub /></a>
           
                    <a className="logo-link" href="https://www.linkedin.com/in/prakashraj-n-3532b02a0" target="_blank" rel='noopener noreferrer'><FaLinkedin /></a>
                </div>
            </div>
        </div>
    )

}



export default About;