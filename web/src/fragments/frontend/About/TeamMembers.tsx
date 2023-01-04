import React from "react"

export const TeamMembers = () => {
    return (
        <section>
            <React.Fragment>
                <div className="team-members-area section-padding-100-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading">
                                    <h2>Staff members</h2>
                                    <p>A brief overview of what you can expect at our worship experiences.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-team-members text-center mb-100">
                                    <div className="team-thumb" style={{ backgroundImage: "url(src/images/bg-img/33.jpg)" }}>
                                        <div className="team-social-info">
                                            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                    <h6>Jackson Nash</h6>
                                    <span>Pastor</span>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-team-members text-center mb-100">
                                    <div className="team-thumb" style={{ backgroundImage: "url(src/images/bg-img/34.jpg)" }}>
                                        <div className="team-social-info">
                                            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                    <h6>Rucsandra Moisa</h6>
                                    <span>Bishop</span>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-team-members text-center mb-100">
                                    <div className="team-thumb" style={{ backgroundImage: "url(src/images/bg-img/35.jpg)" }}>
                                        <div className="team-social-info">
                                            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                    <h6>Ollie Schneider</h6>
                                    <span>Archbishop</span>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-team-members text-center mb-100">
                                    <div className="team-thumb" style={{ backgroundImage: "url(src/images/bg-img/36.jpg)" }}>
                                        <div className="team-social-info">
                                            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                    <h6>Alex Manning</h6>
                                    <span>Pope</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </section>
    )
}