
import React from 'react';
import '../widgets/header.css'
import {Link} from 'react-router-dom';
import foxbel from '../widgets/foxbel.png'

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg">
            <div className="container-fluid">
                        
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav flex-column">
                        <li className="nav-item">
                            <Link to={`/`}><a className="navbar-brand" href=""><img className="logo" src={foxbel}/></a></Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active text-dark fw-bold fs-5" aria-current="page" href="#">Mi libreria</a>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link active text-danger" aria-current="page" href="#">Recientes</a>
                        </li>
                        <li className="nav-item">
                                <Link to={`/`}><a className="nav-link text-dark" aria-current="page" href="">Artistas</a></Link>
                        </li>
                        <li className="nav-item">
                                <Link to={`/Favoritos`}><a className="nav-link  text-dark" aria-current="page" href="">Albums Favoritos</a></Link>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link  text-dark" aria-current="page" href="#">Canciones</a>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link  text-dark" aria-current="page" href="#">Estaciones</a>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link active text-dark fw-bold fs-5" aria-current="page" href="#">Playlist</a>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link  text-dark" aria-current="page" href="#">Metal</a>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link  text-dark" aria-current="page" href="#">Para bailar</a>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link  text-dark" aria-current="page" href="#">Rock 90s</a>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link  text-dark" aria-current="page" href="#">Baladas</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>  
    )
}
export default Header;