import React from "react"

export const Guests = () => {
    return (
        <div>
            <React.Fragment>
                <section className="call-to-action-area section-padding-100 bg-img bg-overlay" style={{ backgroundImage: 'url(src/images/rio_de_janeiro.jpg)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="call-to-action-content text-center">
                                    <h6>A Place For You</h6>
                                    <h2>Find a place to connect and grow through a small group, class, or regular gathering.</h2>
                                    <a href="#" className="btn crose-btn btn-2">Become A Member</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        </div>
    )
}