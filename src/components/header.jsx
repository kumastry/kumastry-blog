import * as React from "react";
import { Link } from "gatsby";

const Header = () => {
    return(
    <header className="hero is-info has-text-centered">
        
        <div className="hero-body">
            <Link to = '/'>
                <h1 className = "title" style={{color : "white"}} >
                    KUMASTRY BLOG
                </h1>
            </Link>
        </div>

        <nav className="navbar"  role = "navigation" aria-label = "main navigation">
            <div className="navbar-brand" >
                <div className="navbar-start"  style={{display:'flex', flexWrap: 'nowrap', justifyContent: 'center', margin: 'auto'}}>

                    <Link to = "/" className= "navbar-item" >
                        Home
                    </Link>

                    <Link to = "/about" className= "navbar-item" >
                        About
                    </Link>

                    <Link to = "/work" className = "navbar-item" >
                        Work
                    </Link>

                </div>
            </div>
        </nav>
    </header>
    );
}

export default Header;