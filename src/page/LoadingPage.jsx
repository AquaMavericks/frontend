import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import "../css/Loading.css";

function Loading() {
    const navigate = useNavigate();

    const [animationVisible, setAnimationVisible] = useState(false);
    const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const handleAnimationEnd = () => {
        setAnimationCompleted(true);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationVisible(true);
            navigate("/start");
        }, 1100); // 1.1초 후에 다음 페이지로 넘어가도록 설정

        return () => clearTimeout(timer);
    }, [navigate]);
    const imgClassName = animationVisible ? "LoadingImg animate" : "LoadingImg";

    return (
        <div className="LoadingBackground">
            <Link to="/main">
                <img
                    className={imgClassName}
                    src="https://cdn-icons-png.flaticon.com/512/3348/3348432.png"
                    alt="Aqua Maverick Logo"
                    onAnimationEnd={handleAnimationEnd}
                />
            </Link>
        </div>
    );
}

export default Loading;
