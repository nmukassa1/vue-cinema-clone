import {useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Pages/Home'
import Cinema from './Pages/Cinema.jsx';
 
function App() {

  
 
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/cinema/:location/film/:title/:id' element={<Cinema />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
