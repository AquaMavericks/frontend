import React from "react";
import TopBar from "../components/TopBar";
import Map1 from "../css/Map1.css";

function Rescue (){

  

    return(
        <div>
            <TopBar/>
            <h1 className="Map1Name">울산항</h1>
            <img className = 'Map1' src='https://github.com/SV-Summer-BootCamp-Team-F/.github/assets/113844225/8eb5a4bb-a652-49de-bf50-0f1a86c5ed36' alt="map1" />
            <h3 className="Map1info">Admin: 강민철</h3>
            <h3 className="Map1info">1번 로봇</h3>
            <h3 className="Map1info">현재상태: 대기중</h3>
        </div>
    );
}

export default Rescue;
