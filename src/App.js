import {Routes, Route} from 'react-router-dom';  
import Header from './pages/header/Header';
import Login from './pages/auth/Login/Login';
import Signup from './pages/auth/Signup/Signup';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
