import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import '../css/Start.css';
import { useRecoilState } from 'recoil';
import {
  nameState,
  portState,
  robotState,
} from '../Recoil';


function OnOff(props) {
  const [emeraldRingVisible, setEmeraldRingVisible] = useState(false);
  const [redRingVisible, setRedRingVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // 마우스 호버 상태 관리

  const [admin_name,setAdmin_name] = useRecoilState(nameState);
  const [admin_port,setAdmin_port] = useRecoilState(portState);
  const [robotinfo,setRobotinfo] = useRecoilState(robotState);



  const { robot } = props;

  robot.status = robot.robots_status === 0 ? "대기 중" : "구조 중";
  const inputRobotinfo = {
    id: robot.id,
    status: robot.status,
  }
  
  const handleImageClick = (color) => {
    axios.get('http://52.3.202.193:8000/v1/robot/view/detail/'+robot.id)
      .then((response) => {
        console.log(response);
        setRobotinfo(inputRobotinfo);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <button
      className={`max-w-xs rounded-full flex items-center text-sm focus:outline-none relative ${
        isHovered ? 'hovered' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleImageClick('emerald')}>
      <Link to="/rescue">
        <img
          className='h-40 w-40 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110'
          src='https://static.vecteezy.com/system/resources/previews/014/488/616/original/emergency-siren-icon-hazard-warning-light-ambulance-route-alarm-png.png'
          alt='avatar'
        />
      </Link>
      <div>
        <h1 className="test-black font-bold">
          {robot.id}번 로봇
        </h1>

        <h1 className={`text-black font-bold ${
        isHovered ? 'hover:text-red-500' : 'text-emerald-500' // 대기중일 때 텍스트 색상을 에메랄드로 변경
      }`}>
        {robot.status}
      </h1>
      </div>
      
      
      

    </button>
  );
}

export default OnOff;
