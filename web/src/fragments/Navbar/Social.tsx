
import React from "react"

export const Social = () => {
    return (
        <div className="top-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="top-header-content d-flex flex-wrap align-items-center justify-content-between">
                            <div className="top-header-meta d-flex flex-wrap">
                                <a href="#" className="open" data-toggle="tooltip" data-placement="bottom" title="10 Am to 6 PM"><i className="fa fa-clock-o" aria-hidden="true"></i> <span>Opening Hours - 10 Am to 6 PM</span></a>
                                <div className="top-social-info">
                                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div className="top-header-meta">
                                <a href="mailto:info.deercreative@gmail.com" className="email-address"><i className="fa fa-envelope" aria-hidden="true"></i> <span>info.deercreative@gmail.com</span></a>
                                <a href="#" className="phone"><i className="fa fa-phone" aria-hidden="true"></i> <span>+12 345 678 910</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}