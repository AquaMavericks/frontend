import { Link } from 'react-router-dom';
import { useState } from 'react'; // 추가: 상태 관리를 위한 useState import
import axios from 'axios'; // 추가: Axios import
import OnOff from './OnOff';
import "../css/Start.css";

function HomeCategory() {
    // 상태 변수를 사용하여 애메랄드 원과 빨간 원 상태를 관리합니다.
    const [emeraldRingVisible, setEmeraldRingVisible] = useState(false);
    const [redRingVisible, setRedRingVisible] = useState(false);

    // Axios를 사용하여 이미지 클릭 이벤트 핸들러를 정의합니다.
    const handleImageClick = (color) => {
        axios.get('API_EndPoint') 
            .then((response) => {
                if (color === 'emerald') {
                    setEmeraldRingVisible(!emeraldRingVisible); // 애메랄드 원  토글
                } else if (color === 'red') {
                    setRedRingVisible(!redRingVisible); // 빨간 원 토글
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <div>
            <div className='TopBar'>
            </div>
            <div className='flex items-center justify-center max-h-screen bg-white'>
                <div className='flex flex-col space-y-10'>
                <div className="transition-transform duration-300 ease-in-out transform hover:scale-105
                                rounded-md shadow-md hover:shadow-1xl
                                p-6 border border-white">
                    <OnOff/>
                    <OnOff/>
                    <OnOff/>
                    <OnOff/>
                </div>
            </div>
        </div>
        </div>
    );
}

export default HomeCategory;
