import React from "react";
import TopBarRed from "../components/TopBarRed";
import TopBar from "../components/TopBar";
import Map1 from "../css/Map1.css";
import {useRecoilState} from 'recoil';
import {
    nameState,
    portState,
    robotState,
} from '../Recoil';
function Rescue (){

    const [admin_name,setAdmin_name] = useRecoilState(nameState);
    const [admin_port,setAdmin_port] = useRecoilState(portState);
    const [robotinfo,setRobotinfo] = useRecoilState(robotState);

    const hash_port = admin_port === 0 ? "부산" : "울산";
    const robot_status = robotinfo.status === 0 ? "대기 중" : "구조 중";


    return(
        <div>
            {robotinfo.status === "대기 중" ? <TopBar/> : <TopBarRed/>}
            <h1 className="Map1Name">{hash_port}항</h1>
            <img className = 'Map1' src='https://github.com/SV-Summer-BootCamp-Team-F/.github/assets/113844225/8eb5a4bb-a652-49de-bf50-0f1a86c5ed36' alt="map1" />
            <h3 className="Map1info">Admin: {admin_name}</h3>
            <h3 className="Map1info">{robotinfo.id}번 로봇</h3>
            {
                robotinfo.status === "대기 중" ? 
                    <h3 className="Map1info">
                        현재상태: 
                        <span className="Map1info1">
                            {robotinfo.status}
                        </span>
                    </h3>
                    :
                    <h3 className="Map1info">
                        현재상태: 
                        <span className="Map1info2">
                            {robotinfo.status}
                        </span>
                    </h3>
            }
            <h3 className="Map1info">현재 로봇과의 거리: 25M</h3>
        </div>
    );
}

export default Rescue;
