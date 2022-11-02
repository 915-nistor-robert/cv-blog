import './Resume.css'
import {cvDescpiption} from "../Utils/GeneralUtils";
import {profile_picture} from "../../assets";

export default function Resume(){
    return<>
        <div className={'resume-main-container'}>
            <div className={'cv-container'}>
                <div className={'cv-header'}>
                    <div className={'cv-description'}>
                        {cvDescpiption.paragraph1}
                    </div>
                    <div className={'cv-photo-container'}>
                        <img alt={''} src={profile_picture} className={'cv-photo'}/>
                    </div>
                </div>
            </div>
        </div>
    </>
}