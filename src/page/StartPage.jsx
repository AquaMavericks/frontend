import React from "react";
import { Link } from 'react-router-dom';
import TopBar from "../components/TopBar"
import HomeCategory from "../components/HomeCategory"
import ReLoad from "../components/ReLoad"
import "../css/Start.css";

function Start() {
    return (
        
        <div className="HomeCategory">
            <TopBar/>
            <h1 className="StartTitle">현재 동작중인 로봇 </h1>
            
            <HomeCategory/>
        </div>
        
    );
}

export default Start;
