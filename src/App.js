
import './App.css';
import Form from './components/Form';
import Home from './components/Home';
import Contact from './components/Contact';
import { Link, Route, Routes } from "react-router-dom";
function App() {
  return (

    <>
    <div className="App">
    <nav   style={{
          backgroundColor: "black",
          color: "white",
          height: "6vh",
          alignItems: "center",
          display: "flex",
          justifyContent: "space-around",
        }} ><Link to='/' >Home</Link>
    <Link to='/Form' >Register</Link>
    <Link to='/Contact' >Contacts</Link>
    </nav>

    </div>

<Routes>
<Route path="/" element={<Home />} />
<Route path="/Form" element={<Form />} />
<Route path="/Contact" element={<Contact/>} />
</Routes>
</>
  );
}

export default App;
