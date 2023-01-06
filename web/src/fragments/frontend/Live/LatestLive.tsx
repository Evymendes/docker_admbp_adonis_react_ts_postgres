import React from "react"

export const LatestLive = () => {
    return (
        <section>
            <React.Fragment>
                <section className="latest-sermons-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading">
                                    <h2>Popular Live</h2>
                                    <p>Loaded with fast-paced worship, activities, and video teachings to address real issues that students face each day</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-12">
                                <div className="single-latest-sermons mb-100">
                                    <div className="sermons-thumbnail">
                                        <img src="src/images/bg-img/31.jpg" alt="" />
                                        <div className="sermons-date">
                                            <h6><span>Live</span>on</h6>
                                        </div>
                                    </div>
                                    <div className="sermons-content">
                                        <div className="sermons-cata">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Video"><i className="fa fa-video-camera" aria-hidden="true"></i></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Audio"><i className="fa fa-headphones" aria-hidden="true"></i></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Docs"><i className="fa fa-file" aria-hidden="true"></i></a>
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Download"><i className="fa fa-cloud-download" aria-hidden="true"></i></a>
                                        </div>
                                        <h4>Culto ao Vivo</h4>
                                        <div className="sermons-meta-data">
                                            <p><i className="fa fa-user" aria-hidden="true"></i> Sermon From: <span>Jorge Malone</span></p>
                                            <p><i className="fa fa-tag" aria-hidden="true"></i> Categories: <span>God, Pray</span></p>
                                            <p><i className="fa fa-clock-o" aria-hidden="true"></i> March 10 on <span>9:00 am - 11:00 am</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        </section>
    )
}