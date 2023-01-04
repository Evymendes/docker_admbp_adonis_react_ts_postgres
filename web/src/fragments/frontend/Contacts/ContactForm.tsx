import React from "react"

export const ContactForm = () => {
    return (
        <section>
            <React.Fragment>
                <div className="contact-form section-padding-0-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading">
                                    <h2>Leave A Message</h2>
                                    <p>Your email address will not be published. Required fields are marked.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="contact-form-area">
                                    <form action="#" method="post">
                                        <div className="row">
                                            <div className="col-12 col-lg-4">
                                                <div className="form-group">
                                                    <label htmlFor="contact-name">Full Name*:</label>
                                                    <input type="text" className="form-control" id="contact-name" placeholder="Full Name" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4">
                                                <div className="form-group">
                                                    <label htmlFor="contact-email">Email*:</label>
                                                    <input type="email" className="form-control" id="contact-email" placeholder="info.deercreative@gmail.com" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4">
                                                <div className="form-group">
                                                    <label htmlFor="contact-number">Phone*:</label>
                                                    <input type="text" className="form-control" id="contact-number" placeholder="(+12) 123 456 7910" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label htmlFor="message">Message*:</label>
                                                    <textarea className="form-control" name="message" id="message" cols={30} rows={10} placeholder="Message"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12 text-center">
                                                <button type="submit" className="btn crose-btn mt-15">Submit Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </section>
    )
}