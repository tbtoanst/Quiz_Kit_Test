import './App.css';
import { Navbar, Dashboard, Login, Quiz, Ranking } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/ranking" element={<Ranking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
