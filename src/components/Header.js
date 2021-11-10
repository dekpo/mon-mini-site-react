import logo from '../assets/logo.svg';

const Header = () => {
    return(
        <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/"> <img src={logo} className="App-logo" alt="logo" width="50" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
               
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                <a className="nav-link" href="/gallery">Gallery</a>
                <a className="nav-link" href="/contact">Contact</a>
            
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
}
export default Header