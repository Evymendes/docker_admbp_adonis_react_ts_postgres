import React from "react"

export const AboutUs = () => {
    return (
        <section>
            <React.Fragment>
                <div className="about-us-area about-page section-padding-100">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-12 col-lg-5">
                                <div className="about-content">
                                    <h2>Welcome To Crose</h2>
                                    <p>It’s very important to believe that you’re the one. We aim to take a different approach in reaching out and helping people along the journey. We stress cultural relevancy and utilize all medias and means to communicate the church message. It’s very important to believe that you’re the one.</p>
                                    <div className="opening-hours-location mt-30 d-flex align-items-center">
                                        <div className="opening-hours">
                                            <h6><i className="fa fa-clock-o"></i> Opening Hours</h6>
                                            <p>Mon - Fri at 08:00 - 21:00 <br/>Sunday at 09:00 - 18:00</p>
                                        </div>
                                        <div className="location">
                                            <h6><i className="fa fa-map-marker"></i> Location</h6>
                                            <p>No 40 Baria Sreet 133/2 NewYork City, NY, United States</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="about-thumbnail">
                                    <img src="src/images/bg-img/26.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </section>
    )
}