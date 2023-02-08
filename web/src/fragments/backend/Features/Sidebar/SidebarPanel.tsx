import React from "react"

export const SidebarPanel = () => {
    return (
        <section>
            <React.Fragment>
                <aside className="left-sidebar" data-sidebarbg="skin6">
                    <div className="scroll-sidebar" data-sidebarbg="skin6">
                        <nav className="sidebar-nav">
                            <ul id="sidebarnav">
                                <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="index.html"
                                        aria-expanded="false"><i data-feather="home" className="feather-icon"></i><span
                                            className="hide-menu">Dashboard</span></a></li>
                                <li className="list-divider"></li>
                                <li className="nav-small-cap"><span className="hide-menu">Applications</span></li>

                                <li className="sidebar-item"> <a className="sidebar-link" href="ticket-list.html"
                                        aria-expanded="false"><i data-feather="tag" className="feather-icon"></i><span
                                            className="hide-menu">Ticket List
                                        </span></a>
                                </li>
                                <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="app-chat.html"
                                        aria-expanded="false"><i data-feather="message-square" className="feather-icon"></i><span
                                            className="hide-menu">Chat</span></a></li>
                                <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="app-calendar.html"
                                        aria-expanded="false"><i data-feather="calendar" className="feather-icon"></i><span
                                            className="hide-menu">Calendar</span></a></li>

                                <li className="list-divider"></li>
                                <li className="nav-small-cap"><span className="hide-menu">Components</span></li>
                                <li className="sidebar-item"> <a className="sidebar-link has-arrow" href="javascript:void(0)"
                                        aria-expanded="false"><i data-feather="file-text" className="feather-icon"></i><span
                                            className="hide-menu">Forms </span></a>
                                    <ul aria-expanded="false" className="collapse  first-level base-level-line">
                                        <li className="sidebar-item"><a href="form-inputs.html" className="sidebar-link"><span
                                                    className="hide-menu"> Form Inputs
                                                </span></a>
                                        </li>
                                        <li className="sidebar-item"><a href="form-input-grid.html" className="sidebar-link"><span
                                                    className="hide-menu"> Form Grids
                                                </span></a>
                                        </li>
                                        <li className="sidebar-item"><a href="form-checkbox-radio.html" className="sidebar-link"><span
                                                    className="hide-menu"> Checkboxes &
                                                    Radios
                                                </span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item"> <a className="sidebar-link has-arrow" href="javascript:void(0)"
                                        aria-expanded="false"><i data-feather="grid" className="feather-icon"></i><span
                                            className="hide-menu">Tables </span></a>
                                    <ul aria-expanded="false" className="collapse  first-level base-level-line">
                                        <li className="sidebar-item"><a href="table-basic.html" className="sidebar-link"><span
                                                    className="hide-menu"> Basic Table
                                                </span></a>
                                        </li>
                                        <li className="sidebar-item"><a href="table-dark-basic.html" className="sidebar-link"><span
                                                    className="hide-menu"> Dark Basic Table
                                                </span></a>
                                        </li>
                                        <li className="sidebar-item"><a href="table-sizing.html" className="sidebar-link"><span
                                                    className="hide-menu">
                                                    Sizing Table
                                                </span></a>
                                        </li>
                                        <li className="sidebar-item"><a href="table-layout-coloured.html" className="sidebar-link"><span
                                                    className="hide-menu">
                                                    Coloured
                                                    Table Layout
                                                </span></a>
                                        </li>
                                        <li className="sidebar-item"><a href="table-datatable-basic.html" className="sidebar-link"><span
                                                    className="hide-menu">
                                                    Basic
                                                    Datatables
                                                    Layout
                                                </span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item"> <a className="sidebar-link has-arrow" href="javascript:void(0)"
                                        aria-expanded="false"><i data-feather="bar-chart" className="feather-icon"></i><span
                                            className="hide-menu">Charts </span></a>
                                    <ul aria-expanded="false" className="collapse  first-level base-level-line">
                                        <li className="sidebar-item"><a href="chart-morris.html" className="sidebar-link"><span
                                                    className="hide-menu"> Morris Chart
                                                </span></a>
                                        </li>
                                        <li className="sidebar-item"><a href="chart-chart-js.html" className="sidebar-link"><span
                                                    className="hide-menu"> ChartJs
                                                </span></a>
                                        </li>
                                        <li className="sidebar-item"><a href="chart-knob.html" className="sidebar-link"><span
                                                    className="hide-menu">
                                                    Knob Chart
                                                </span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item"> <a className="sidebar-link has-arrow" href="javascript:void(0)"
                                        aria-expanded="false"><i data-feather="box" className="feather-icon"></i><span
                                            className="hide-menu">UI Elements </span></a>
                                    <ul aria-expanded="false" className="collapse  first-level base-level-line">
                                        <li className="sidebar-item"><a href="ui-buttons.html" className="sidebar-link"><span
                                                    className="hide-menu"> Buttons
                                                </span></a>
                                        </li>
                                        <li className="sidebar-item"><a href="ui-modals.html" className="sidebar-link"><span
                                                    className="hide-menu"> Modals </span></a>
                                        </li>
                                        <li className="sidebar-item"><a href="ui-tab.html" className="sidebar-link"><span
                                                    className="hide-menu"> Tabs </span></a></li>
                                        <li className="sidebar-item"><a href="ui-tooltip-popover.html" className="sidebar-link"><span
                                                    className="hide-menu"> Tooltip &
                                                    Popover</span></a></li>
                                        <li className="sidebar-item"><a href="ui-notification.html" className="sidebar-link"><span
                                                    className="hide-menu">Notification</span></a></li>
                                        <li className="sidebar-item"><a href="ui-progressbar.html" className="sidebar-link"><span
                                                    className="hide-menu">Progressbar</span></a></li>
                                        <li className="sidebar-item"><a href="ui-typography.html" className="sidebar-link"><span
                                                    className="hide-menu">Typography</span></a></li>
                                        <li className="sidebar-item"><a href="ui-bootstrap.html" className="sidebar-link"><span
                                                    className="hide-menu">Bootstrap
                                                    UI</span></a></li>
                                        <li className="sidebar-item"><a href="ui-breadcrumb.html" className="sidebar-link"><span
                                                    className="hide-menu">Breadcrumb</span></a></li>
                                        <li className="sidebar-item"><a href="ui-list-media.html" className="sidebar-link"><span
                                                    className="hide-menu">List
                                                    Media</span></a></li>
                                        <li className="sidebar-item"><a href="ui-grid.html" className="sidebar-link"><span
                                                    className="hide-menu"> Grid </span></a></li>
                                        <li className="sidebar-item"><a href="ui-carousel.html" className="sidebar-link"><span
                                                    className="hide-menu">
                                                    Carousel</span></a></li>
                                        <li className="sidebar-item"><a href="ui-scrollspy.html" className="sidebar-link"><span
                                                    className="hide-menu">
                                                    Scrollspy</span></a></li>
                                        <li className="sidebar-item"><a href="ui-toasts.html" className="sidebar-link"><span
                                                    className="hide-menu"> Toasts</span></a>
                                        </li>
                                        <li className="sidebar-item"><a href="ui-spinner.html" className="sidebar-link"><span
                                                    className="hide-menu"> Spinner </span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="ui-cards.html"
                                        aria-expanded="false"><i data-feather="sidebar" className="feather-icon"></i><span
                                            className="hide-menu">Cards
                                        </span></a>
                                </li>
                                <li className="list-divider"></li>
                                <li className="nav-small-cap"><span className="hide-menu">Authentication</span></li>

                                <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="authentication-login1.html"
                                        aria-expanded="false"><i data-feather="lock" className="feather-icon"></i><span
                                            className="hide-menu">Login
                                        </span></a>
                                </li>
                                <li className="sidebar-item"> <a className="sidebar-link sidebar-link"
                                        href="authentication-register1.html" aria-expanded="false"><i data-feather="lock"
                                            className="feather-icon"></i><span className="hide-menu">Register
                                        </span></a>
                                </li>

                                <li className="sidebar-item"> <a className="sidebar-link has-arrow" href="javascript:void(0)"
                                        aria-expanded="false"><i data-feather="feather" className="feather-icon"></i><span
                                            className="hide-menu">Icons
                                        </span></a>
                                    <ul aria-expanded="false" className="collapse first-level base-level-line">
                                        <li className="sidebar-item"><a href="icon-fontawesome.html" className="sidebar-link"><span
                                                    className="hide-menu"> Fontawesome Icons </span></a></li>

                                        <li className="sidebar-item"><a href="icon-simple-lineicon.html" className="sidebar-link"><span
                                                    className="hide-menu"> Simple Line Icons </span></a></li>
                                    </ul>
                                </li>

                                <li className="sidebar-item"> <a className="sidebar-link has-arrow" href="javascript:void(0)"
                                        aria-expanded="false"><i data-feather="crosshair" className="feather-icon"></i><span
                                            className="hide-menu">Multi
                                            level
                                            dd</span></a>
                                    <ul aria-expanded="false" className="collapse first-level base-level-line">
                                        <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link"><span
                                                    className="hide-menu"> item 1.1</span></a>
                                        </li>
                                        <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link"><span
                                                    className="hide-menu"> item 1.2</span></a>
                                        </li>
                                        <li className="sidebar-item"> <a className="has-arrow sidebar-link" href="javascript:void(0)"
                                                aria-expanded="false"><span className="hide-menu">Menu 1.3</span></a>
                                            <ul aria-expanded="false" className="collapse second-level base-level-line">
                                                <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link"><span
                                                            className="hide-menu"> item
                                                            1.3.1</span></a></li>
                                                <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link"><span
                                                            className="hide-menu"> item
                                                            1.3.2</span></a></li>
                                                <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link"><span
                                                            className="hide-menu"> item
                                                            1.3.3</span></a></li>
                                                <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link"><span
                                                            className="hide-menu"> item
                                                            1.3.4</span></a></li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link"><span
                                                    className="hide-menu"> item
                                                    1.4</span></a></li>
                                    </ul>
                                </li>
                                <li className="list-divider"></li>
                                <li className="nav-small-cap"><span className="hide-menu">Extra</span></li>
                                <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="docs/docs.html"
                                        aria-expanded="false"><i data-feather="edit-3" className="feather-icon"></i><span
                                            className="hide-menu">Documentation</span></a></li>
                                <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="authentication-login1.html"
                                        aria-expanded="false"><i data-feather="log-out" className="feather-icon"></i><span
                                            className="hide-menu">Logout</span></a></li>
                            </ul>
                        </nav>
                    </div>
                </aside>
            </React.Fragment>
        </section>
    )
}