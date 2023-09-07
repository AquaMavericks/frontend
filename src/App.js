import { Routes, Route } from 'react-router-dom';
import LoadingPage from './page/LoadingPage';
import StartPage from './page/StartPage';
import MainPage from './page/MainPage';
import "../src/index.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
