
import React from "react"

export const Subscribe = () => {
    return (
        <section className="subscribe-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6">
                        <div className="subscribe-text">
                            <h3>Subscribe To Our Newsletter</h3>
                            <h6>Subcribe Us And Tell Us About Your Story</h6>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="subscribe-form text-right">
                            <form action="#">
                                <input type="email" name="subscribe-email" id="subscribeEmail" placeholder="Your Email" />
                                <button type="submit" className="btn crose-btn">subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}