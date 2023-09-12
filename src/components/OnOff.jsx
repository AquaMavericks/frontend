import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'; // 추가: 상태 관리를 위한 useState import
import axios from 'axios'; // 추가: Axios import
import "../css/Start.css";

function OnOff() {

    const [emeraldRingVisible, setEmeraldRingVisible] = useState(false);
    const [redRingVisible, setRedRingVisible] = useState(false);

   
    const handleImageClick = (color) => {
        axios.get('API_ENDPOINT') 
            .then((response) => {
                if (color === 'emerald') {
                    setEmeraldRingVisible(!emeraldRingVisible); // 애메랄드 원 
                } else if (color === 'red') {
                    setRedRingVisible(!redRingVisible); // 빨간 원 
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <button
            className='max-w-xs rounded-full flex items-center text-sm focus:outline-none relative'
            onClick={() => handleImageClick('emerald')}> 
                    <img
                        className='h-40 w-40 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110'
                        src='https://static.vecteezy.com/system/resources/previews/014/488/616/original/emergency-siren-icon-hazard-warning-light-ambulance-route-alarm-png.png'
                        alt='avatar'
                    />
                        <h1 className='text-black transform hover:scale-110 hover:text-red-500 font-bold'>대기중</h1>
                        <h1 className='text-black transform hover:scale-110 hover:text-green-500 font-bold'> 구조중</h1>
                        {emeraldRingVisible && (
                            <span className='absolute bottom-0 right-0 h-6 w-6 rounded-full bg-emerald-500 ring ring-white'></span>
                        )}
                         {redRingVisible && (
                            <span className='absolute bottom-0 right-0 h-6 w-6 rounded-full bg-red-500 ring ring-white'></span>
                        )}
        </button>
    )
}

export default OnOff;
