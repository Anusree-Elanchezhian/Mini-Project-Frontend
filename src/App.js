import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import LoginForm from './components/login/LoginForm';
import SignUp from './components/signup/SignUp';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import Courses from './components/courses/Courses';
import Assessment from './components/assessment/Assessment';
import DashBoard from './components/dashboard/DashBoard';
import Certification from './components/certificate/Certification';
import Profile from './components/profile/Profile';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginForm/>} />
        <Route path='/components/signup/SignUp' element={<SignUp/>} />
        <Route path='/components/home/Home' element={<Home/>}/>
        <Route path='/components/navbar/NavBar' element={<NavBar/>}/>
        <Route path='/components/courses/Courses' element={<Courses/>}/>
        <Route path='/components/dashboard/DashBoard' element={<DashBoard/>}/>
        <Route path='/components/assessment/Assessment' element={<Assessment/>}/>
        <Route path='/components/certificate/Certification' element={<Certification/>}/>
        <Route path='/components/profile/Profile' element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
