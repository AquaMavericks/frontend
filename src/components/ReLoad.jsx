import React from "react";
import {useRecoilState} from 'recoil';
import {
    nameState,
    portState,
    robotState,
} from '../Recoil';

function ReLoad() {
  const [admin_name,setAdmin_name] = useRecoilState(nameState);
  const [admin_port,setAdmin_port] = useRecoilState(portState);
  const [robotinfo,setRobotinfo] = useRecoilState(robotState);

  const handleReload = () => {
    window.location.reload();
    
  };

  const goStart = () => {
    window.location.href = "/start";
  };

  return (
    <div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3580/3580294.png"
        width="25"
        height="25"
        alt="Home logo"
        onClick={handleReload} 
        style={{ cursor: "pointer" }} 
      />
    </div>
  );
}

export default ReLoad;
