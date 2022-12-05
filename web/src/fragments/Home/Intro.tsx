
import React from "react"

export const Intro = () => {
    return (
        <section className="about-area section-padding-100-0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading">
                            <h2>Welcome To Church</h2>
                            <p>A church isn't a building—it's the people. We meet in locations around the United States and globally at Life.Church Online. No matter where you join us.</p>
                        </div>
                    </div>
                </div>

                <div className="row about-content justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about-us-content mb-100">
                            <img src="img/bg-img/3.jpg" alt="" />
                            <div className="about-text">
                                <h4>Our Church</h4>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                <a href="#">Read More <i className="fa fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about-us-content mb-100">
                            <img src="img/bg-img/4.jpg" alt="" />
                            <div className="about-text">
                                <h4>Our History</h4>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                <a href="#">Read More <i className="fa fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about-us-content mb-100">
                            <img src="img/bg-img/5.jpg" alt="" />
                            <div className="about-text">
                                <h4>Our Sermons</h4>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                <a href="#">Read More <i className="fa fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}