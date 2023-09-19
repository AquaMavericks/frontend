
import React from "react";
import TopBarRed from "../components/TopBarRed";
import Map1 from "../css/Map1.css";

function Rescue (){

  

    return(
        <div>
            <TopBarRed/>
            <h1 className="Map1Name">울산항</h1>
            <img className = 'Map1' src='https://github.com/SV-Summer-BootCamp-Team-F/.github/assets/113844225/482936ca-b47f-4458-98b5-44d9212000f8' alt="map1" />
            <h3 className="Map1info">Admin: 강민철</h3>
            <h3 className="Map1info">1번 로봇</h3>
            <h3 className="Map1info">현재상태: <span className="Map1info2">구조중</span> - 복귀</h3>
            <h3 className="Map1info">현재 로봇과의 거리: 5M</h3>
        </div>
    );
}

export default Rescue;
