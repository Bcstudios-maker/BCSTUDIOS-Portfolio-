import NavBar from './Components/NavBar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';

function App() {
  return (
      <div className="App">
        <NavBar />
        <div className="content">
          <Home />
        </div>
      </div>
  );
}

export default App;
