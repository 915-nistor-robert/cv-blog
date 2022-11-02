import './Portfolio.css'
import {laptop_img, noa_laptop, phantom_laptop} from "../../assets";
import {projectsDescription} from "../Utils/GeneralUtils";


export default function Portfolio(){
    return <>

        <div id={'portfolio'} className={'portfolio-main-container'}>
            <h1 className={'portfolio-title'}>&lt;Portfolio/&gt;</h1>
            <hr/>
            <div className={'project-container'}>
                <img alt={''} src={laptop_img} className={'laptop'}/>
                {projectsDescription.noa}
            </div>
            <hr/>
            <div className={'project-container'}>
                <img alt={''} src={noa_laptop} className={'laptop'}/>
                {projectsDescription.phantom}
            </div>
            <hr/>
            <div className={'project-container'}>
                <img alt={''} src={phantom_laptop} className={'laptop'}/>
                {projectsDescription.racing}
            </div>
            <hr/>
        </div>
    </>
}