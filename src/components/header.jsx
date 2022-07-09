import * as React from "react";

const Header = () => {
    return(
    <header className="hero is-primary">
        <div className="hero-body">
            <p className = "title">
            title
            </p>
            <p className ="subtitle">
            Primary subtitle
            </p>
        </div>

        <nav className="navbar"  role = "navigation" aria-label = "main navigation">
            <div className="navbar-brand">
                <a className="navbar-item">
                    Home
                </a>
            </div>
        </nav>
    </header>
    );
}

export default Header;