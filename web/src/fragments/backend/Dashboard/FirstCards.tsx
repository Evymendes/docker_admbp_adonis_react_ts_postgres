import React from "react"

export const FirstCards = () => {
    return (
        <section>
            <React.Fragment>
                <div className="card-group">
                    <div className="card border-right">
                        <div className="card-body">
                            <div className="d-flex d-lg-flex d-md-block align-items-center">
                                <div>
                                    <div className="d-inline-flex align-items-center">
                                        <h2 className="text-dark mb-1 font-weight-medium">236</h2>
                                        <span
                                            className="badge bg-primary font-12 text-white font-weight-medium badge-pill ml-2 d-lg-block d-md-none">+18.33%</span>
                                    </div>
                                    <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">New Clients</h6>
                                </div>
                                <div className="ml-auto mt-md-3 mt-lg-0">
                                    <span className="opacity-7 text-muted"><i data-feather="user-plus"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card border-right">
                        <div className="card-body">
                            <div className="d-flex d-lg-flex d-md-block align-items-center">
                                <div>
                                    <h2 className="text-dark mb-1 w-100 text-truncate font-weight-medium"><sup
                                            className="set-doller">$</sup>18,306</h2>
                                    <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">Earnings of Month
                                    </h6>
                                </div>
                                <div className="ml-auto mt-md-3 mt-lg-0">
                                    <span className="opacity-7 text-muted"><i data-feather="dollar-sign"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card border-right">
                        <div className="card-body">
                            <div className="d-flex d-lg-flex d-md-block align-items-center">
                                <div>
                                    <div className="d-inline-flex align-items-center">
                                        <h2 className="text-dark mb-1 font-weight-medium">1538</h2>
                                        <span
                                            className="badge bg-danger font-12 text-white font-weight-medium badge-pill ml-2 d-md-none d-lg-block">-18.33%</span>
                                    </div>
                                    <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">New Projects</h6>
                                </div>
                                <div className="ml-auto mt-md-3 mt-lg-0">
                                    <span className="opacity-7 text-muted"><i data-feather="file-plus"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex d-lg-flex d-md-block align-items-center">
                                <div>
                                    <h2 className="text-dark mb-1 font-weight-medium">864</h2>
                                    <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">Projects</h6>
                                </div>
                                <div className="ml-auto mt-md-3 mt-lg-0">
                                    <span className="opacity-7 text-muted"><i data-feather="globe"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </section>
    )
}