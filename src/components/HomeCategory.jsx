import { Link } from 'react-router-dom';
import { useState } from 'react'; 
import axios from 'axios'; 
import OnOff from './OnOff';
import "../css/Start.css";
import { useRecoilState } from 'recoil';
import {
    nameState,
    portState,
} from '../Recoil';

function HomeCategory(props) {
    
    const [emeraldRingVisible, setEmeraldRingVisible] = useState(false);
    const [redRingVisible, setRedRingVisible] = useState(false);
    
    const [admin_name,setAdmin_name] = useRecoilState(nameState);
    const [admin_port,setAdmin_port] = useRecoilState(portState);

    const {robots} = props;


    return (
        // <div>
        //     <div className='TopBar'>
        //     </div>
        //         <div className='flex items-center justify-center max-h-screen bg-white'>
        //             <div className='flex flex-col space-y-10'>
        //             <div className="transition-transform duration-300 ease-in-out transform hover:scale-105
        //                             rounded-md shadow-md hover:shadow-1xl
        //                             p-6 border border-white">                    
        //             <OnOff/>
        //             <OnOff/>
        //             <OnOff/>
        //             <OnOff/>
        //         </div>
        //     </div>
        // </div>
        // </div>

        <div>
            <div className='TopBar'/>
            <div className='flex items-center justify-center max-h-screen bg-white'>
                <div className='flex flex-col space-y-10'>
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-105
                                    rounded-md shadow-md hover:shadow-1xl
                                    p-6 border border-white">
                        <div className="drag">
                            {robots.map((robot) => (
                            <div key={robot.id} className="transition-transform duration-300 ease-in-out transform hover:scale-105
                                rounded-md shadow-md hover:shadow-1xl
                                p-6 border border-white">
                                <OnOff robot={robot} />
                            </div>
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeCategory;
