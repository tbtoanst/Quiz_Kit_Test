import './App.css';
import { Navbar, Dashboard } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
