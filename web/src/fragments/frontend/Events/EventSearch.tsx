import React from "react"
import { Breadcrumb } from "../../../components/Breadcrumb"

export const EventSearch = () => {
    return (
        <section>
            <React.Fragment>
                <Breadcrumb tobe="Home" togo="Event"/>
                <div className="events-area section-padding-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="event-search-form mb-50">
                                    <form action="#" method="get">
                                        <div className="row align-items-end">
                                            <div className="col-12 col-md">
                                                <div className="form-group mb-0">
                                                    <label htmlFor="eventDate">Event In</label>
                                                    <input type="date" className="form-control" id="eventDate" placeholder="Event In" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md">
                                                <div className="form-group mb-0">
                                                    <label htmlFor="eventLocation">Near</label>
                                                    <input type="text" className="form-control" id="eventLocation" placeholder="Location" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md">
                                                <div className="form-group mb-0">
                                                    <label htmlFor="eventKeyword">Keyword</label>
                                                    <input type="text" className="form-control" id="eventKeyword" placeholder="Typing Keyword" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3 col-lg-2">
                                                <button type="submit" className="btn crose-btn">Find Events</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="events-title">
                                    <h2>Events In March 2018</h2>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="single-upcoming-events-area d-flex flex-wrap align-items-center">
                                    <div className="upcoming-events-thumbnail">
                                        <img src="src/images/bg-img/23.jpg" alt="" />
                                    </div>
                                    <div className="upcoming-events-content d-flex flex-wrap align-items-center">
                                        <div className="events-text">
                                            <h4>Seeing and Savoring Jesus Christ</h4>
                                            <div className="events-meta">
                                                <a href="#"><i className="fa fa-calendar" aria-hidden="true"></i> March 01, 2018</a>
                                                <a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i> 09:00 - 11:00</a>
                                                <a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i> 11 Rose St, Brooklyn, NY</a>
                                            </div>
                                            <p>Join us htmlFor an informational webinar about the U.S.-Japan COIL Initiative. Learn about the initiative and receive general guidance.</p>
                                            <a href="#">Read More <i className="fa fa-angle-double-right"></i></a>
                                        </div>
                                        <div className="find-out-more-btn">
                                            <a href="#" className="btn crose-btn btn-2">Find Out More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="single-upcoming-events-area d-flex flex-wrap align-items-center">
                                    <div className="upcoming-events-thumbnail">
                                        <img src="src/images/bg-img/24.jpg" alt="" />
                                    </div>
                                    <div className="upcoming-events-content d-flex flex-wrap align-items-center">
                                        <div className="events-text">
                                            <h4>A God-Entranced Vision of All Things</h4>
                                            <div className="events-meta">
                                                <a href="#"><i className="fa fa-calendar" aria-hidden="true"></i> March 01, 2018</a>
                                                <a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i> 09:00 - 11:00</a>
                                                <a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i> 11 Rose St, Brooklyn, NY</a>
                                            </div>
                                            <p>Join us htmlFor an informational webinar about the U.S.-Japan COIL Initiative. Learn about the initiative and receive general guidance.</p>
                                            <a href="#">Read More <i className="fa fa-angle-double-right"></i></a>
                                        </div>
                                        <div className="find-out-more-btn">
                                            <a href="#" className="btn crose-btn btn-2">Find Out More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="single-upcoming-events-area d-flex flex-wrap align-items-center">
                                    <div className="upcoming-events-thumbnail">
                                        <img src="src/images/bg-img/25.jpg" alt="" />
                                    </div>
                                    <div className="upcoming-events-content d-flex flex-wrap align-items-center">
                                        <div className="events-text">
                                            <h4>Speaker Interviews with J.Doe</h4>
                                            <div className="events-meta">
                                                <a href="#"><i className="fa fa-calendar" aria-hidden="true"></i> March 01, 2018</a>
                                                <a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i> 09:00 - 11:00</a>
                                                <a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i> 11 Rose St, Brooklyn, NY</a>
                                            </div>
                                            <p>Join us htmlFor an informational webinar about the U.S.-Japan COIL Initiative. Learn about the initiative and receive general guidance.</p>
                                            <a href="#">Read More <i className="fa fa-angle-double-right"></i></a>
                                        </div>
                                        <div className="find-out-more-btn">
                                            <a href="#" className="btn crose-btn btn-2">Find Out More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="single-upcoming-events-area d-flex flex-wrap align-items-center">
                                    <div className="upcoming-events-thumbnail">
                                        <img src="src/images/bg-img/23.jpg" alt=""/>
                                    </div>
                                    <div className="upcoming-events-content d-flex flex-wrap align-items-center">
                                        <div className="events-text">
                                            <h4>Mexican priest murdered in his church</h4>
                                            <div className="events-meta">
                                                <a href="#"><i className="fa fa-calendar" aria-hidden="true"></i> March 01, 2018</a>
                                                <a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i> 09:00 - 11:00</a>
                                                <a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i> 11 Rose St, Brooklyn, NY</a>
                                            </div>
                                            <p>Join us htmlFor an informational webinar about the U.S.-Japan COIL Initiative. Learn about the initiative and receive general guidance.</p>
                                            <a href="#">Read More <i className="fa fa-angle-double-right"></i></a>
                                        </div>
                                        <div className="find-out-more-btn">
                                            <a href="#" className="btn crose-btn btn-2">Find Out More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="single-upcoming-events-area d-flex flex-wrap align-items-center">
                                    <div className="upcoming-events-thumbnail">
                                        <img src="src/images/bg-img/24.jpg" alt="" />
                                    </div>
                                    <div className="upcoming-events-content d-flex flex-wrap align-items-center">
                                        <div className="events-text">
                                            <h4>A God-Entranced Vision of All Things</h4>
                                            <div className="events-meta">
                                                <a href="#"><i className="fa fa-calendar" aria-hidden="true"></i> March 01, 2018</a>
                                                <a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i> 09:00 - 11:00</a>
                                                <a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i> 11 Rose St, Brooklyn, NY</a>
                                            </div>
                                            <p>Join us htmlFor an informational webinar about the U.S.-Japan COIL Initiative. Learn about the initiative and receive general guidance.</p>
                                            <a href="#">Read More <i className="fa fa-angle-double-right"></i></a>
                                        </div>
                                        <div className="find-out-more-btn">
                                            <a href="#" className="btn crose-btn btn-2">Find Out More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="pagination-area mt-70">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-right"></i></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </section>
    )
}