import logo from './logo.svg';
import './App.css';
import react from 'react';
import MyTabs from './components/MyTabs';
import MyMap from './components/MyMap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          <MyTabs />
        </p>
        
      </header>
    </div>
  );
}

export default App;
