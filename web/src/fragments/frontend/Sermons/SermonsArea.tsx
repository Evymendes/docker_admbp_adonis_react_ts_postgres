import React from "react"
import { Breadcrumb } from "../../../components/Breadcrumb"

export const SermonsArea = () => {
    return (
        <section>
            <React.Fragment>
                <Breadcrumb tobe="Home" togo="Sermons" />
                <div className="sermons-content-area section-padding-100-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="sermons-content-thumbnail">
                                    <img src="src/images/bg-img/31.jpg" alt=""/>
                                </div>
                                <div className="sermons-text text-center">
                                    <h2>Start a New Way of Living</h2>
                                    <div className="sermons-meta-data d-flex flex-wrap justify-content-center">
                                        <p><i className="fa fa-user" aria-hidden="true"></i> Sermon From: <span>Jorge Malone</span></p>
                                        <p><i className="fa fa-tag" aria-hidden="true"></i> Categories: <span>God, Pray</span></p>
                                        <p><i className="fa fa-clock-o" aria-hidden="true"></i> March 10 on <span>9:00 am - 11:00 am</span></p>
                                    </div>
                                    <div className="sermons-cata">
                                        <a href="#" data-toggle="tooltip" data-placement="top" title="Video"><i className="fa fa-video-camera" aria-hidden="true"></i></a>
                                        <a href="#" data-toggle="tooltip" data-placement="top" title="Audio"><i className="fa fa-headphones" aria-hidden="true"></i></a>
                                        <a href="#" data-toggle="tooltip" data-placement="top" title="Docs"><i className="fa fa-file" aria-hidden="true"></i></a>
                                        <a href="#" data-toggle="tooltip" data-placement="top" title="Download"><i className="fa fa-cloud-download" aria-hidden="true"></i></a>
                                    </div>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassin.</p>
                                    <div className="read-more-share d-flex flex-wrap justify-content-between">
                                        <div className="read-more-btn">
                                            <a href="#">Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
                                        </div>
                                        <div className="share">
                                            <span>Share:</span>
                                            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a>
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