import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <section className="crose-main-menu">
            <div className="classy-nav-container breakpoint-off">
                <div className="container">
                    <nav className="classy-navbar justify-content-between" id="croseNav">

                        <Link to="index.html" className="nav-brand"><img src="img/core-img/logo.png" alt=""/></Link>

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
                                    <li><Link to="#">Pages</Link>
                                        <ul className="dropdown">
                                            <li><Link to="index.html">Home</Link></li>
                                            <li><Link to="about.html">About</Link></li>
                                            <li><Link to="sermons.html">Sermons</Link></li>
                                            <li><Link to="sermons-details.html">Sermons Details</Link></li>
                                            <li><Link to="events.html">Events</Link></li>
                                            <li><Link to="blog.html">Blog</Link></li>
                                            <li><Link to="single-post.html">Blog Details</Link></li>
                                            <li><Link to="contact.html">Contact</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">Megamenu</Link>
                                        <div className="megamenu">
                                            <ul className="single-mega cn-col-4">
                                                <li><Link to="index.html">Home</Link></li>
                                                <li><Link to="about.html">About</Link></li>
                                                <li><Link to="sermons.html">Sermons</Link></li>
                                                <li><Link to="sermons-details.html">Sermons Details</Link></li>
                                                <li><Link to="events.html">Events</Link></li>
                                                <li><Link to="blog.html">Blog</Link></li>
                                                <li><Link to="single-post.html">Blog Details</Link></li>
                                                <li><Link to="contact.html">Contact</Link></li>
                                            </ul>
                                            <ul className="single-mega cn-col-4">
                                                <li><Link to="index.html">Home</Link></li>
                                                <li><Link to="about.html">About</Link></li>
                                                <li><Link to="sermons.html">Sermons</Link></li>
                                                <li><Link to="sermons-details.html">Sermons Details</Link></li>
                                                <li><Link to="events.html">Events</Link></li>
                                                <li><Link to="blog.html">Blog</Link></li>
                                                <li><Link to="single-post.html">Blog Details</Link></li>
                                                <li><Link to="contact.html">Contact</Link></li>
                                            </ul>
                                            <ul className="single-mega cn-col-4">
                                                <li><Link to="index.html">Home</Link></li>
                                                <li><Link to="about.html">About</Link></li>
                                                <li><Link to="sermons.html">Sermons</Link></li>
                                                <li><Link to="sermons-details.html">Sermons Details</Link></li>
                                                <li><Link to="events.html">Events</Link></li>
                                                <li><Link to="blog.html">Blog</Link></li>
                                                <li><Link to="single-post.html">Blog Details</Link></li>
                                                <li><Link to="contact.html">Contact</Link></li>
                                            </ul>
                                            <ul className="single-mega cn-col-4">
                                                <li><Link to="index.html">Home</Link></li>
                                                <li><Link to="about.html">About</Link></li>
                                                <li><Link to="sermons.html">Sermons</Link></li>
                                                <li><Link to="sermons-details.html">Sermons Details</Link></li>
                                                <li><Link to="events.html">Events</Link></li>
                                                <li><Link to="blog.html">Blog</Link></li>
                                                <li><Link to="single-post.html">Blog Details</Link></li>
                                                <li><Link to="contact.html">Contact</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><Link to="events.html">Events</Link></li>
                                    <li><Link to="sermons.html">Sermons</Link></li>
                                    <li><Link to="blog.html">Blog</Link></li>
                                    <li><Link to="contact.html">Contact</Link></li>
                                </ul>

                                <div id="header-search"><i className="fa fa-search" aria-hidden="true"></i></div>
                                <Link to="#" className="btn crose-btn header-btn">Donate Us</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
    )
}