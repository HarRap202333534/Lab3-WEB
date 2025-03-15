function Header() {
    return <>
        <header>
            <nav id="nav" className="container navbar navbar-dark navbar-expand-md">
                <div id="navbar" className="container-fluid" data-bs-theme="dark">
                    <img src="../logo_transparent.png" id="logo" alt="logo" width="150px" height="150px" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
                        <div id="navButtons" className="row">
                            <ul id="buttons" className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">Menu 1</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">Menu 2</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">Menu 3</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">Menu 4</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </>
}