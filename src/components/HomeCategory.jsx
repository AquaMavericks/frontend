import { Link } from 'react-router-dom';
import { useState } from 'react'; 
import axios from 'axios'; 
import OnOff from './OnOff';
import "../css/Start.css";

function HomeCategory() {
    
    const [emeraldRingVisible, setEmeraldRingVisible] = useState(false);
    const [redRingVisible, setRedRingVisible] = useState(false);

    const handleImageClick = (color) => {
        axios.get('API_EndPoint') 
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
