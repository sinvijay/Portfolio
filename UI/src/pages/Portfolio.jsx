import './Portfolio.css'
import { Link } from 'react-router-dom'

export default function Portfolio() {
    return (
        <div>
            <div className='profile-container'>
                <h4>Hi, I am</h4>
                <h2>Vijay Vikram Singh</h2><br /><br />
                <h1>Software Developer . Web Developer</h1>
                <br />
                {/* Fixed path: changed from ../public/linkedin.svg to /linkedin.svg */}
                <a className= "Links1" href="http://www.linkedin.com/in/sinvijay"><img src="/linkedin.svg" alt="icon" height={'30'}/></a>
                <a className= "Links2" href="https://github.com/sinvijay"><img src="/github.svg" alt="icon" height={'40'}/></a>
                <br />
                <br />
                <div className='hire-btn'>
                <Link to="/contact">Hire Me</Link>
                <Link to={"https://drive.google.com/file/d/18rlS06CyEwGMsQhRdxQx7DpcengewBfn/view?usp=sharing"}>Download My CV</Link>
                </div>
            </div>
            <br />
            {/* Fixed path here as well */}
            <div className='photo-box'><img src="/github.svg" alt="" /></div>
            <div className="achievement">
                <p>5+<br />
                Experience</p>
                <h3>|</h3>
                <p>20+<br />
                Projects</p>
                <h3>|</h3>
                <p>30+<br />
                Happy Clients</p>
            </div>
        </div>
    )
}