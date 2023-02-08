import React from "react"

export const EarningsCharts = () => {
    return (
        <section>
            <React.Fragment>
                <div className="row">
                    <div className="col-md-6 col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-start">
                                    <h4 className="card-title mb-0">Earning Statistics</h4>
                                    <div className="ml-auto">
                                        <div className="dropdown sub-dropdown">
                                            <button className="btn btn-link text-muted dropdown-toggle" type="button"
                                                id="dd1" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                                <i data-feather="more-vertical"></i>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dd1">
                                                <a className="dropdown-item" href="#">Insert</a>
                                                <a className="dropdown-item" href="#">Update</a>
                                                <a className="dropdown-item" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-4 mb-5">
                                    <div className="stats ct-charts position-relative" style={{ height: "315px" }}></div>
                                </div>
                                <ul className="list-inline text-center mt-4 mb-0">
                                    <li className="list-inline-item text-muted font-italic">Earnings for this month</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Recent Activity</h4>
                                <div className="mt-4 activity">
                                    <div className="d-flex align-items-start border-left-line pb-3">
                                        <div>
                                            <a href="javascript:void(0)" className="btn btn-info btn-circle mb-2 btn-item">
                                                <i data-feather="shopping-cart"></i>
                                            </a>
                                        </div>
                                        <div className="ml-3 mt-2">
                                            <h5 className="text-dark font-weight-medium mb-2">New Product Sold!</h5>
                                            <p className="font-14 mb-2 text-muted">John Musa just purchased <br/> Cannon 5M
                                                Camera.
                                            </p>
                                            <span className="font-weight-light font-14 text-muted">10 Minutes Ago</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start border-left-line pb-3">
                                        <div>
                                            <a href="javascript:void(0)"
                                                className="btn btn-danger btn-circle mb-2 btn-item">
                                                <i data-feather="message-square"></i>
                                            </a>
                                        </div>
                                        <div className="ml-3 mt-2">
                                            <h5 className="text-dark font-weight-medium mb-2">New Support Ticket</h5>
                                            <p className="font-14 mb-2 text-muted">Richardson just create support <br/>
                                                ticket</p>
                                            <span className="font-weight-light font-14 text-muted">25 Minutes Ago</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start border-left-line">
                                        <div>
                                            <a href="javascript:void(0)" className="btn btn-cyan btn-circle mb-2 btn-item">
                                                <i data-feather="bell"></i>
                                            </a>
                                        </div>
                                        <div className="ml-3 mt-2">
                                            <h5 className="text-dark font-weight-medium mb-2">Notification Pending Order!
                                            </h5>
                                            <p className="font-14 mb-2 text-muted">One Pending order from Ryne <br/> Doe</p>
                                            <span className="font-weight-light font-14 mb-1 d-block text-muted">2 Hours
                                                Ago</span>
                                            <a href="javascript:void(0)" className="font-14 border-bottom pb-1 border-info">Load More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </section>
    )
}