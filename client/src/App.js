import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignInButton from './components/SingInButton';

function App() {
  return (
    <div className="App">
      <h1>{process.env.REACT_API_URL}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SignInButton />
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
