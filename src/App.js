import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Footer from './components/Footer.js';
import Header from './components/Header';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />

      <Home />
      <Gallery />
      <Contact />

      <Footer />
    </div>
  );
}
export default App;
