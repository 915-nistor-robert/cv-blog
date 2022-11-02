import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faUser, faFile, faBriefcase, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import "./Menu.css"
import {Link} from 'react-scroll'

export default function Menu() {
    return (
        <>
            <div className={"menu-container"}>
                {/*<a href={""} className={"menu-entry"}><FontAwesomeIcon icon={faHome} className={"menu-icon"}/> <p>Home</p></a>*/}
                {/*<a href={""} className={"menu-entry"}><FontAwesomeIcon icon={faUser} className={"menu-icon"}/> <p>About</p></a>*/}
                {/*<a href={""} className={"menu-entry"}><FontAwesomeIcon icon={faFile} className={"menu-icon"}/> <p>Portfolio</p></a>*/}
                {/*<a href={""} className={"menu-entry"}><FontAwesomeIcon icon={faBriefcase} className={"menu-icon"}/> <p>Portfolio</p></a>*/}
                {/*<a href={""} className={"menu-entry"}><FontAwesomeIcon icon={faEnvelope} className={"menu-icon"}/> <p>Contact</p></a>*/}
                <Link className={"menu-entry"} activeClass={"active"} to={"home"} spy={true} smooth={true}><FontAwesomeIcon icon={faHome} className={"menu-icon"}/> <p>Home</p></Link>
                <Link className={"menu-entry"}  to={"about"} spy={true} smooth={true}><FontAwesomeIcon icon={faUser} className={"menu-icon"}/> <p>About</p></Link>
                <Link className={"menu-entry"}  to={"portfolio"} spy={true} smooth={true}><FontAwesomeIcon icon={faBriefcase} className={"menu-icon"}/> <p>Portfolio</p></Link>
                <Link className={"menu-entry"}  to={"resume"} spy={true} smooth={true}><FontAwesomeIcon icon={faFile} className={"menu-icon"}/> <p>Resume</p></Link>
                <Link className={"menu-entry"}  to={"contact"} spy={true} smooth={true}><FontAwesomeIcon icon={faEnvelope} className={"menu-icon"}/> <p>Contact</p></Link>

            </div>
        </>
    )
}