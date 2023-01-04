import React from "react"

export const Footer = () => {
    return(
        <div>
            <React.Fragment>
                <div className="main-footer-area">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-footer-widget mb-70">
                                    <a href="#" className="footer-logo"><img src="img/core-img/logo2.png" alt="" /></a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-footer-widget mb-70">
                                    <h5 className="widget-title">Quick Link</h5>
                                    <nav className="footer-menu">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Home</a></li>
                                            <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Event</a></li>
                                            <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> About Us</a></li>
                                            <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Gallery</a></li>
                                            <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Sermons</a></li>
                                            <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Contact</a></li>
                                            <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Blogs</a></li>
                                            <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Donate</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-footer-widget mb-70">
                                    <h5 className="widget-title">News Latest</h5>

                                    <div className="single-latest-news">
                                        <a href="#">Polish schools in UK warned</a>
                                        <p><i className="fa fa-calendar" aria-hidden="true"></i> November 11, 2017</p>
                                    </div>

                                    <div className="single-latest-news">
                                        <a href="#">University league tables 2018</a>
                                        <p><i className="fa fa-calendar" aria-hidden="true"></i> November 11, 2017</p>
                                    </div>

                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-footer-widget mb-70">
                                    <h5 className="widget-title">Contact Us</h5>

                                    <div className="contact-information">
                                        <p><i className="fa fa-map-marker" aria-hidden="true"></i> 40 Baria Sreet, NewYork City, US</p>
                                        <a href="callto:001-1234-88888"><i className="fa fa-phone" aria-hidden="true"></i> 001-1234-88888</a>
                                        <a href="mailto:info.deercreative@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i> info.deercreative@gmail.com</a>
                                        <p><i className="fa fa-clock-o" aria-hidden="true"></i> Mon - Fri: 08.00am - 18.00pm</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="copywrite-area">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center flex-wrap">
                            <div className="col-12 col-md-6">
                                <div className="copywrite-text">
                                    <p>
                                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib --- Downloaded from <a href="https://themeslab.org/" target="_blank">Themeslab</a></a>
                                    </p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="footer-social-icon">
                                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </div>
    )
}