import React from "react"

export const ContactArea = () => {
    return (
        <section>
            <React.Fragment>
                <section className="contact-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="contact-content-area">
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <div className="contact-content contact-information">
                                                <h4>Contact</h4>
                                                <p>info.deercreative@gmail.com</p>
                                                <p>(+12) 345 - 678 - 1000</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <div className="contact-content contact-information">
                                                <h4>Address</h4>
                                                <p>112/28 Baria, 5543 Aliquet St</p>
                                                <p>NewYork City, US</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <div className="contact-content contact-information">
                                                <h4>Opening Hours</h4>
                                                <p>Mon-Sat: 10 Am to 6 Pm</p>
                                                <p>Sunday: Close</p>
                                            </div>
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