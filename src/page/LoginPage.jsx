import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import "../css/Login.css";
import axios from 'axios';
import { useRecoilState } from "recoil";
import { nameState, portState } from "../Recoil";
function Login() {
    const navigate = useNavigate();
    const [token, setToken] = useState("");
    
    const [admin_name,setAdmin_name] = useRecoilState(nameState);
    const [admin_port,setAdmin_port] = useRecoilState(portState);

    const handleUsernameChange = (e) => {
        setToken(e.target.value);
    };
    
    const postlogin = () => {
        axios.post('http://52.3.202.193:8000/v1/admin/login?admin_token=' + token)
        .then((response) => {
            console.log(response);
            if(response.data.startsWith("로그인 성공")) {
                
                // 로그인 성공. 환영합니다. 1 -> 1
                const admin_port_id = response.data.split(" ")[3];
                setAdmin_port(admin_port_id)

                // 지역_이름_token -> 이름
                const input_admin_name = token.split("_")[1];
                setAdmin_name(input_admin_name);
                
                
                navigate(`/start/${admin_port_id}`);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return(
        <div>
            <div className="Login">
                <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/93089183/277179027-4bae23f5-ba71-432b-84e2-55f70cb61b94.png" alt="Aqua Maverick Logo" />
            </div>
            <div className="LoginInputFrame">
                <input
                    className="LoginInput"
                    type="text"
                    placeholder="Enter your token"
                    value={token}
                    onChange={handleUsernameChange}
                />
                <button 
                    className="LoginButton"
                    onClick={postlogin}
                    >Submit</button>
            </div>
            
        </div>
        
        
        
    )
}

export default Login;