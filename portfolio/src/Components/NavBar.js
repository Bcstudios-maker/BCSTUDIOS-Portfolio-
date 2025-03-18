import '../Styles/NavBar.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <h1>BCSTUDIOS</h1>
            <div className="nav-holder">
                <nav>
                    <button>Projects</button>
                    <button>Resume</button>
                    <button>Blog</button>
                </nav>
            </div>
            
        </div>
    );
}

export default NavBar