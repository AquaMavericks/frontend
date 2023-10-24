import React from "react";
import TopBarRed from "../components/TopBarRed";
import TopBar from "../components/TopBar";
import Map1 from "../css/Map1.css";
import {useRecoilState} from 'recoil';
import { useParams } from "react-router-dom";
import {
    nameState,
    portState,
    robotState,
} from '../Recoil';
import axios from 'axios';
import { useEffect } from "react";

function Rescue (props){

    const {admin_name,robot_id} = useParams();

    const [admin_port,setAdmin_port] = useRecoilState(portState);
    const [robotinfo,setRobotinfo] = useRecoilState(robotState);
    
    const refresh = () =>{
        axios.get('http://52.3.202.193:8000/v1/robot/view/detail/'+robot_id)
        .then(response => {
            console.log(response);
            let inputRobotinfo = {
                id: robot_id,
                status: 
                    response.data.robots_status === 0 ? "대기 중" :
                    response.data.robots_status === 1 ? "구조 중 - 해상 낙하 사고 발생" :
                    response.data.robots_status === 2 ? "구조 중 - 피재자 거리 파악" :
                    response.data.robots_status === 3 ? "구조 중 - 최단 거리 이동" :
                    response.data.robots_status === 4 ? "구조 중 - 튜브 전달" :
                    response.data.robots_status === 5 ? "구조 중 - 피재자 구조" :
                    "구조 중 - 구조 완료" 
            };
            setRobotinfo(inputRobotinfo);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    useEffect(()=>{
        refresh()
    },[robot_id])
    return(
        <div>
            {robotinfo.status === "대기 중" |  robotinfo.status === "복귀 중" ? <TopBar/> : <TopBarRed/>}
            <h1 className="Map1Name">
            {
                admin_port === 0 ? "부산" : "울산"
            }
            항</h1>
            <img className = 'Map1' src='https://github.com/SV-Summer-BootCamp-Team-F/.github/assets/113844225/8eb5a4bb-a652-49de-bf50-0f1a86c5ed36' alt="map1" />
            <h3 className="Map1info">Admin: {admin_name}</h3>
            <h3 className="Map1info">{robot_id}번 로봇</h3>
            {
                robotinfo.status === "대기 중" | robotinfo.status === "복귀 중"? 
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
                        <h3>현재 로봇과의 거리: 25M</h3>
                    </h3>
                    
            }
        </div>
    );
}

export default Rescue;
