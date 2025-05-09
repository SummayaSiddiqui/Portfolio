import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
      <Router>
          <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
  );
}

export default App;
