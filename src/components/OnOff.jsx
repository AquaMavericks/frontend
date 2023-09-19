import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import '../css/Start.css';

function OnOff() {
  const [emeraldRingVisible, setEmeraldRingVisible] = useState(false);
  const [redRingVisible, setRedRingVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // 마우스 호버 상태 관리

  const handleImageClick = (color) => {
    axios.get('API_ENDPOINT')
      .then((response) => {
        if (color === 'emerald') {
          setEmeraldRingVisible(!emeraldRingVisible);
        } else if (color === 'red') {
          setRedRingVisible(!redRingVisible);
        }
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
      <h1 className={`text-black font-bold ${
        isHovered ? 'hover:text-red-500' : 'text-emerald-500' // 대기중일 때 텍스트 색상을 에메랄드로 변경
      }`}>
        {isHovered ? '구조중' : '대기중'}
      </h1>
      {emeraldRingVisible && (
        <span className='absolute bottom-0 right-0 h-6 w-6 rounded-full bg-emerald-500 ring ring-white'></span>
      )}
      {redRingVisible && (
        <span className='absolute bottom-0 right-0 h-6 w-6 rounded-full bg-red-500 ring ring-white'></span>
      )}
    </button>
  );
}

export default OnOff;
