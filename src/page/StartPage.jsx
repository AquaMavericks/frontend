import React from "react";
import { Link } from 'react-router-dom';
import TopBar from "../components/TopBar"
import HomeCategory from "../components/HomeCategory"
import "../css/Start.css";

function Start() {
    return (
        
        <div className="HomeCategory">
            <TopBar/>
            <HomeCategory/>
        </div>
        
    );
}

export default Start;
