import logo from '../assets/logo.svg';

const Header = () => {
    return(
        <header className="App-header">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="/mon-mini-site-react/"> <img src={logo} className="App-logo" alt="logo" width="50" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="/mon-mini-site-react/">Home</a>
                <a class="nav-link" href="/mon-mini-site-react/gallery">Gallery</a>
                <a class="nav-link" href="/mon-mini-site-react/contact">Contact</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
}
export default Header