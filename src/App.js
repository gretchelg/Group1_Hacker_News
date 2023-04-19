import './App.css';
import { useState, useEffect } from 'react';
import Hnapi from './components/Hnapi';

function App() {
  return (
    <div className="App">
      <h1>Hacker News Website</h1>
      <Hnapi />
    </div>
  );
}

export default App;
