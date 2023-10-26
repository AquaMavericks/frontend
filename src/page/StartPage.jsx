import React, { useEffect } from "react";
import TopBar from "../components/TopBar"
import HomeCategory from "../components/HomeCategory"
import "../css/Start.css";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useState } from "react";
function Start() {

    const {admin_port_id} = useParams();
    const [robots,setRobots] = useState([]);
    
    useEffect(() => {
        axios.get('http://52.3.202.193:8000/v1/robot/view/list/' + admin_port_id)
        .then((response) => {
            console.log(response);
            setRobots(response.data.robots);
        })
        .catch((error) => {
            console.log(error);
        });
    },[admin_port_id]);
    return (
        
        <div className="HomeCategory">
            <TopBar/>
            <h1 className="StartTitle">현재 동작중인 로봇 </h1>
            <p>Admin Port ID : {admin_port_id}</p>
            <HomeCategory robots={robots}/>
        </div>
        
    );
}

export default Start;
