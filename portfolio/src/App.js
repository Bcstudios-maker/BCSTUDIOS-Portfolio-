import NavBar from './Components/NavBar.js';
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
