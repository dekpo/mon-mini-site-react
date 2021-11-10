import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Footer from './components/Footer.js';
import Header from './components/Header';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={ <Gallery />} />
          <Route path="/contact" element={ <Contact />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}
export default App;
