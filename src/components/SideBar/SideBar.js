import React from "react";
import {profile_picture} from "../../assets";
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faLinkedin, faGithub,faInstagram} from "@fortawesome/free-brands-svg-icons"
import Profile from "../Profile/Profile";
import Menu from "../Menu/Menu";

export default function SideBar() {
    return (<>
    <div className={'side-bar-container'}>
        <Profile/>
        <Menu/>
    </div>
    </>)
}

