import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import User from "./User";
import About from "./About";
import Contact from "./Contact";
import Page404 from "./Page404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/user" element={<User/>}></Route>
       <Route path="/about" element={<About/>}></Route>
       <Route path="/contact" element={<Contact/>}></Route>
       <Route path="/*" element={<Page404/>}></Route>
  

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
