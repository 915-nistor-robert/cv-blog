import React from "react";
import "./Home.css"
import {home_background} from "../../assets";

export default function Home() {
    return (
        <>
            <div id={'home'} className={'home-container'}>
                <div className={"home-content"}>
                    <h1 className={"name"}>Nistor Robert</h1>
                    <h1 className={"typewriter"}><h1>&lt;Full-Stack Developer/&gt;</h1></h1>
                </div>
            </div>
        </>
    )
}