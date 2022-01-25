import logo from './logo.svg';
import './App.css';
import { Header } from './components';
import { Slider } from './components';
import { GameCard } from './components';
import { gameList } from './data.js';


function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <GameCard games = { gameList }/>
     
     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
