import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RedirectPage from './components/RedirectPage';
import StatsPage from './components/StatsPage';
import './App.css'; // ✅ Don’t forget this

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:shortcode" element={<RedirectPage />} />
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;