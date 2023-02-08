import React from "react"

export const SalesCharts = () => {
    return (
        <section>
            <React.Fragment>
            <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Total Sales</h4>
                                <div id="campaign-v2" className="mt-2" style={{ height: "283px", width: "100%;" }}></div>
                                <ul className="list-style-none mb-0">
                                    <li>
                                        <i className="fas fa-circle text-primary font-10 mr-2"></i>
                                        <span className="text-muted">Direct Sales</span>
                                        <span className="text-dark float-right font-weight-medium">$2346</span>
                                    </li>
                                    <li className="mt-3">
                                        <i className="fas fa-circle text-danger font-10 mr-2"></i>
                                        <span className="text-muted">Referral Sales</span>
                                        <span className="text-dark float-right font-weight-medium">$2108</span>
                                    </li>
                                    <li className="mt-3">
                                        <i className="fas fa-circle text-cyan font-10 mr-2"></i>
                                        <span className="text-muted">Affiliate Sales</span>
                                        <span className="text-dark float-right font-weight-medium">$1204</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Net Income</h4>
                                <div className="net-income mt-4 position-relative" style={{ height:"294px" }}></div>
                                <ul className="list-inline text-center mt-5 mb-2">
                                    <li className="list-inline-item text-muted font-italic">Sales for this month</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title mb-4">Earning by Location</h4>
                                <div className="" style={{ height: "180px" }}>
                                    <div id="visitbylocate" style={{ height: "100%" }}></div>
                                </div>
                                <div className="row mb-3 align-items-center mt-1 mt-5">
                                    <div className="col-4 text-right">
                                        <span className="text-muted font-14">India</span>
                                    </div>
                                    <div className="col-5">
                                        <div className="progress" style={{ height: "5px"}}>
                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: "100%" }}
                                                 aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 text-right">
                                        <span className="mb-0 font-14 text-dark font-weight-medium">28%</span>
                                    </div>
                                </div>
                                <div className="row mb-3 align-items-center">
                                    <div className="col-4 text-right">
                                        <span className="text-muted font-14">UK</span>
                                    </div>
                                    <div className="col-5">
                                        <div className="progress" style={{ height: "5px" }}>
                                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "74%" }}
                                                aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 text-right">
                                        <span className="mb-0 font-14 text-dark font-weight-medium">21%</span>
                                    </div>
                                </div>
                                <div className="row mb-3 align-items-center">
                                    <div className="col-4 text-right">
                                        <span className="text-muted font-14">USA</span>
                                    </div>
                                    <div className="col-5">
                                        <div className="progress" style={{ height: "5px" }}>
                                            <div className="progress-bar bg-cyan" role="progressbar" style={{ width: "60%" }}
                                                aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 text-right">
                                        <span className="mb-0 font-14 text-dark font-weight-medium">18%</span>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4 text-right">
                                        <span className="text-muted font-14">China</span>
                                    </div>
                                    <div className="col-5">
                                        <div className="progress" style={{ height: "5px" }}>
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "50%" }}
                                                aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 text-right">
                                        <span className="mb-0 font-14 text-dark font-weight-medium">12%</span>
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