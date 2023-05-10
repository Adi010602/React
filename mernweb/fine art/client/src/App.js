
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/home';
import Dashboard from './components/dashboard';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/Footer';
import { Route, Routes} from 'react-router-dom';
import { Login } from './components/Login';
import Register from './components/register';


function App() {
  return (
    <>
    <NavBar/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    
    <Footer/>
    </>
  );
}

export default App;
