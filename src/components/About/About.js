
import './About.css'
import {aboutText} from "../Utils/GeneralUtils";
import {about_photo1, about_photo2, about_photo3, about_photo4, about_photo5} from "../../assets";

export default function About(){
    return <>
        <div id={"about"} className={'about-main-container'}>
            <h1 className={'about-title'}>&lt;About/&gt;</h1>
            {aboutText.paragraph1}
            <div className={'about-photos-container'}>
                <img alt={""} src={about_photo1} className={'about-photo'}/>
                <img alt={""} src={about_photo2} className={'about-photo'}/>
                <img alt={""} src={about_photo3} className={'about-photo'}/>
                <img alt={""} src={about_photo4} className={'about-photo'}/>
                <img alt={""} src={about_photo5} className={'about-photo'}/>

            </div>
        </div>
    </>
}