function Header() {
    return <>
        <header>
            <nav id="nav" class="container navbar navbar-dark navbar-expand-md">
                <div id="navbar" class="container-fluid" data-bs-theme="dark">
                    <img src="../logo_transparent.png" id="logo" alt="logo" width="150px" height="150px" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
                        <div id="navButtons" class="row">
                            <ul id="buttons" class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="index.html">Menu 1</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="index.html">Menu 2</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="index.html">Menu 3</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="index.html">Menu 4</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="index.html">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
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

function BlogCard(props) {
    const link = "post.html?id=" + props.blogId
    return <>
        <div class="col">
            <a href={link}>
                <div class="card" style={{width: 18 + 'rem'}}>
                    <img src="../logo.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.author}</p>
                        <p class="card-text">Publié le : {props.date}</p>
                    </div>
                </div>
            </a>
        </div>
    </>
}

const header = document.querySelector("#header")

const rootHeader = ReactDOM.createRoot(header)

rootHeader.render(<Header />)