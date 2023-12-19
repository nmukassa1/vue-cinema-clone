import './App.css';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Pages/Home'
import Cinema from './Pages/Cinema.jsx';
 
function App() {
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
