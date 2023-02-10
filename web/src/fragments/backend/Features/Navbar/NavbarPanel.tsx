import React from "react"

export const NavbarPanel = () => {
    return (
        <section>
            <React.Fragment>
                <nav className="navbar top-navbar navbar-expand-md">
                    <div className="navbar-header" data-logobg="skin6">
                        <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)">
                            <i className="ti-menu ti-close"></i>
                        </a>
                        <div className="navbar-brand">
                            <a href="index.html">
                                <b className="logo-icon">
                                    <img src="/src/images/logo/logo_admbp_blue_red.svg" alt="homepage" className="dark-logo col-3" />
                                    <img src="/src/images/logo/logo_admbp_black.svg" alt="homepage" className="light-logo col-3" />
                                </b>
                                <span className="logo-text">
                                    <img src="/src/content/backend/assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                                    <img src="/src/content/backend/assets/images/logo-light-text.png" className="light-logo" alt="homepage" />
                                </span>
                            </a>
                        </div>                    
                        <a className="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)"
                            data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i
                                className="ti-more"></i></a>
                    </div>
                    <div className="navbar-collapse collapse" id="navbarSupportedContent">                   
                        <ul className="navbar-nav float-left mr-auto ml-3 pl-1">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle pl-md-3 position-relative" href="javascript:void(0)"
                                    id="bell" role="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <span><i data-feather="bell" className="svg-icon"></i></span>
                                    <span className="badge badge-primary notify-no rounded-circle">5</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-left mailbox animated bounceInDown">
                                    <ul className="list-style-none">
                                        <li>
                                            <div className="message-center notifications position-relative">
                                                <a href="javascript:void(0)"
                                                    className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                    <div className="btn btn-danger rounded-circle btn-circle"><i
                                                            data-feather="airplay" className="text-white"></i></div>
                                                    <div className="w-75 d-inline-block v-middle pl-2">
                                                        <h6 className="message-title mb-0 mt-1">Luanch Admin</h6>
                                                        <span className="font-12 text-nowrap d-block text-muted">Just see
                                                            the my new
                                                            admin!</span>
                                                        <span className="font-12 text-nowrap d-block text-muted">9:30 AM</span>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)"
                                                    className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                    <span className="btn btn-success text-white rounded-circle btn-circle"><i
                                                            data-feather="calendar" className="text-white"></i></span>
                                                    <div className="w-75 d-inline-block v-middle pl-2">
                                                        <h6 className="message-title mb-0 mt-1">Event today</h6>
                                                        <span
                                                            className="font-12 text-nowrap d-block text-muted text-truncate">Just
                                                            a reminder that you have event</span>
                                                        <span className="font-12 text-nowrap d-block text-muted">9:10 AM</span>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)"
                                                    className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                    <span className="btn btn-info rounded-circle btn-circle"><i
                                                            data-feather="settings" className="text-white"></i></span>
                                                    <div className="w-75 d-inline-block v-middle pl-2">
                                                        <h6 className="message-title mb-0 mt-1">Settings</h6>
                                                        <span
                                                            className="font-12 text-nowrap d-block text-muted text-truncate">You
                                                            can customize this template
                                                            as you want</span>
                                                        <span className="font-12 text-nowrap d-block text-muted">9:08 AM</span>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)"
                                                    className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                    <span className="btn btn-primary rounded-circle btn-circle"><i
                                                            data-feather="box" className="text-white"></i></span>
                                                    <div className="w-75 d-inline-block v-middle pl-2">
                                                        <h6 className="message-title mb-0 mt-1">Pavan kumar</h6> <span
                                                            className="font-12 text-nowrap d-block text-muted">Just
                                                            see the my admin!</span>
                                                        <span className="font-12 text-nowrap d-block text-muted">9:02 AM</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="nav-link pt-3 text-center text-dark" href="javascript:void(0);">
                                                <strong>Check all notifications</strong>
                                                <i className="fa fa-angle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>                        
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i data-feather="settings" className="svg-icon"></i>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item d-none d-md-block">
                                <a className="nav-link" href="javascript:void(0)">
                                    <div className="customize-input">
                                        <select
                                            className="custom-select form-control bg-white custom-radius custom-shadow border-0">
                                            <option selected>EN</option>
                                            <option value="1">AB</option>
                                            <option value="2">AK</option>
                                            <option value="3">BE</option>
                                        </select>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    
                        <ul className="navbar-nav float-right">                       
                            <li className="nav-item d-none d-md-block">
                                <a className="nav-link" href="javascript:void(0)">
                                    <form>
                                        <div className="customize-input">
                                            <input className="form-control custom-shadow custom-radius border-0 bg-white"
                                                type="search" placeholder="Search" aria-label="Search" />
                                            <i className="form-control-icon" data-feather="search"></i>
                                        </div>
                                    </form>
                                </a>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <img src="/src/content/backend/assets/images/users/profile-pic.jpg" alt="user" className="rounded-circle"
                                        width="40" />
                                    <span className="ml-2 d-none d-lg-inline-block"><span>Hello,</span> <span
                                            className="text-dark">Jason Doe</span> <i data-feather="chevron-down"
                                            className="svg-icon"></i></span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                                    <a className="dropdown-item" href="javascript:void(0)"><i data-feather="user"
                                            className="svg-icon mr-2 ml-1"></i>
                                        My Profile</a>
                                    <a className="dropdown-item" href="javascript:void(0)"><i data-feather="credit-card"
                                            className="svg-icon mr-2 ml-1"></i>
                                        My Balance</a>
                                    <a className="dropdown-item" href="javascript:void(0)"><i data-feather="mail"
                                            className="svg-icon mr-2 ml-1"></i>
                                        Inbox</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="javascript:void(0)"><i data-feather="settings"
                                            className="svg-icon mr-2 ml-1"></i>
                                        Account Setting</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="javascript:void(0)"><i data-feather="power"
                                            className="svg-icon mr-2 ml-1"></i>
                                        Logout</a>
                                    <div className="dropdown-divider"></div>
                                    <div className="pl-4 p-3"><a href="javascript:void(0)" className="btn btn-sm btn-info">View
                                            Profile</a></div>
                                </div>
                            </li>                      
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        </section>
    )
}