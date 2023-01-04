import React from "react"

export const ChooseUs = () => {
    return (
        <section>
            <React.Fragment>
                <div className="why-choose-us bg-gray section-padding-100-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading">
                                    <h2>Why Choose Us</h2>
                                    <p>Loaded with fast-paced worship, activities, and video teachings to address real issues that students face each day</p>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="single-why-choose-us mb-100">
                                    <img src="src/images/core-img/why1.png" alt="" />
                                    <h4>Committed Cohorts</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="single-why-choose-us mb-100">
                                    <img src="src/images/core-img/why2.png" alt=""/>
                                    <h4>Trained Facilitators</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="single-why-choose-us mb-100">
                                    <img src="src/images/core-img/why3.png" alt=""/>
                                    <h4>Access to Leading Voices</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </section>
    )
}