import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Navbar = () => {

    const {dark, changeTheme} = useContext(ThemeContext);

    return (    
            <nav className={dark ? "navbar bg-secondary shadow p-3" : "navbar bg-danger shadow p-3"}>
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-light fs-2">Khata Book</span>
                    <button className="btn btn-dark rounded-0 p-2 fs-4" onClick={changeTheme}>Change Theme</button>
                </div>
            </nav>
    )
}

export default Navbar
