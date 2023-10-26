import { Routes, Route } from 'react-router-dom';
import LoadingPage from './page/LoadingPage';
import StartPage from './page/StartPage';
import MainPage from './page/MainPage';
import RescuePage from './page/RescuePage';
import LoginPage from './page/LoginPage';
import "../src/index.css";
import {RecoilRoot} from "recoil";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/start/:admin_port_id" element={<StartPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/rescue/:admin_name/:robot_id" element={<RescuePage />} />
        </Routes>
      </RecoilRoot>
    </div>
  );
}

export default App;
