import Navbar from './components/Navbar';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import './sass/dist/styles.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
