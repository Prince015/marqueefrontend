import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Notfound from './components/Notfound';
import { useStateValue } from './state/StateProvider';



function App() {

  const [state, dispatch] = useStateValue()
  console.log(state)

  const user = state.token
  return (
    <Router>
      <Routes>
        {user ? <>
          <Route path="/" element={<Dashboard />} />
          </>
          : <Route path="/" element={<Login />} />
        }
        <Route path='*' element={<Notfound/>} />
      </Routes>
    </Router>
  );
}

export default App;
