import movie from "./movie.png";
import music from "./music.png";






function Project(){
    return(
        <div className="project" >

            
            <div className="pros">
                <div>
                    <p className="title" > 1. MOVIEBUZZ</p>

                    <p className="desc"> Here you can search any movie  by using their name and some details about that movie and you can watch that movie trailer </p>
                </div>
                <div><img src={movie} className="site" alt="web image"></img></div>
                <div className="site-link">
                    <p >click here to explore my website</p>
                    <a className="site-a" href="http://moviebuzz-one.vercel.app" target="_blank" rel='noopener noreferrer'>web-link</a>
                </div>

            
                
            </div>
            <div className="pros">
                <div>
                    <p className="title" >2. MUSICBUZZ</p>
                    <p className="desc">Here you can search songs and listen to that songs </p>
                </div>
                <div><img src={music} className="site" alt="web image"></img></div>
                <div className="site-link">
                    <p >click here to explore my website</p>
                    <a className="site-a" href="http://musicbuzz.vercel.app" target="_blank" rel='noopener noreferrer'>web-link</a>
                </div>

            </div>
            {/* <div className="pros">
            
                <div>
                    <p className="title" >MUSICBUZZ</p>
                </div>
                <div><img src={movie} className="site" alt="web image"></img></div>
                <div className="site-link">
                    <p>click here to explore my website</p>
                    <a className="site-a" href="musicbuzz-vercel.app" target="_blank" rel='noopener noreferrer'>website-link</a>
                </div>

            


            </div> */}
        </div>
    )

}



export default Project;