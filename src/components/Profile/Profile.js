import {profile_picture} from "../../assets";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "./Profile.css"


export default function Profile() {
    return (<>
        <div className={"profile-container"}>
            <div className={"profile"}>
                <img src={profile_picture} alt={"profile"} className={"profile-picture"}/>
                <h1 className={"name"}>Nistor Robert</h1>
            </div>
            <div className={"social-buttons"}>
                <a href={"https://www.facebook.com/nistor.robert.58"} className={"social-icon"}
                   target={"_blank"}><FontAwesomeIcon icon={faFacebook}/></a>
                <a href={"https://www.linkedin.com/in/nistor-robert-cristian-310850164/"} className={"social-icon"}
                   target={"_blank"}><FontAwesomeIcon icon={faLinkedin}/></a>
                <a href={"https://github.com/915-nistor-robert"} className={"social-icon"}
                   target={"_blank"}><FontAwesomeIcon icon={faGithub}/></a>
                <a href={"https://www.instagram.com/nistorcristian15/"} className={"social-icon"}
                   target={"_blank"}><FontAwesomeIcon icon={faInstagram}/></a>
            </div>
        </div>
    </>)
}