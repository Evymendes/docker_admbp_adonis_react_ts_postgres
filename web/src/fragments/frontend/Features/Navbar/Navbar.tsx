import React from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div>
            <React.Fragment>
                <section className="crose-main-menu">
                    <div className="classy-nav-container breakpoint-off">
                        <div className="container">
                            <nav className="classy-navbar justify-content-between" id="croseNav">

                                <div className="col-3">
                                    <Link to="/" className="nav-brand">
                                        <img className="col-3" src="src/images/logo/logo_admbp_blue_red.png" alt=""/>
                                        <h6>ADMBP</h6>
                                    </Link>
                                </div>
                                <div className="classy-navbar-toggler">
                                    <span className="navbarToggler"><span></span><span></span><span></span></span>
                                </div>

                                <div className="classy-menu">

                                    <div className="classycloseIcon">
                                        <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                                    </div>

                                    <div className="classynav">
                                        <ul>
                                            <li><Link to="/">Home</Link></li>      
                                            <li><Link to="/about">A Igreja</Link></li>                              
                                            <li><Link to="/sermons">Cultos</Link></li>
                                            <li><Link to="/events">Eventos</Link></li>
                                            <li><Link to="/news">Notícias</Link></li>
                                            <li><Link to="/live">Ao Vivo</Link></li>
                                            <li><Link to="/contact">Contatos</Link></li>
                                        </ul>

                                        <div id="header-search"><i className="fa fa-search" aria-hidden="true"></i></div>
                                        <Link to="#" className="btn crose-btn header-btn">Login</Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        </div>
    )
}