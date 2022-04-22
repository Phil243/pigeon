import logo from './logo.svg';
import './App.css';
import react from 'react';
import MyTabs from './components/MyTabs';
import MyMap from './components/MyMap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <MyMap />Edit <code>src/App.js</code> and save to reload.<MyTabs />
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
