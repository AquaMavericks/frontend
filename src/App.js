import { Routes, Route } from 'react-router-dom';
import LoadingPage from './page/LoadingPage';
import StartPage from './page/StartPage';
import MainPage from './page/MainPage';
import RescuePage from './page/RescuePage';
import RescuePage2 from './page/RescuePage2';
import ReadyPage from './page/ReadyPage';
import "../src/index.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/rescue" element={<RescuePage />} />
        <Route path="/rescue2" element={<RescuePage2 />} />
        <Route path="/ready" element={<ReadyPage />} />
      </Routes>
    </div>
  );
}

export default App;
