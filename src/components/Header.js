import logo from '../assets/logo.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/"> <img src={logo} className="App-logo" alt="logo" width="50" /></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
               
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
            
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
}
export default Header