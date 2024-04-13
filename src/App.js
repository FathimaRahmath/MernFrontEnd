
import {  Routes, Route } from 'react-router-dom';
import EmpDashboard from './components/EmpDashboard';
import EmpForm from './components/EmpForm';

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<EmpDashboard/>} />
        <Route path="/form" element={<EmpForm />} />
        <Route path={'/login'} element={<Login />}></Route>
        <Route path={'/sign'} element={<Signup />}></Route>
      </Routes>
      </div>
    
  );
}

export default App;
