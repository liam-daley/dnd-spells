import logo from './logo.svg';
import Spells from './features/spells/Spells';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>5th Edition - Spells</h1>
      </header><Spells />
    </div>
  );
}

export default App;
