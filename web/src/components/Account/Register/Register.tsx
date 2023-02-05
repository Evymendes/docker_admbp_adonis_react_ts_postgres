import React from "react"
import { Link } from "react-router-dom"
import "./register.css"

export const Register = () => {
    return (
        <section>
            <React.Fragment>
                <div className="main-wrapper">
                    <div className="auth-wrapper d-flex no-block justify-content-center align-items-center position-relative"
                        style={{ background: "url(/src/content/backend/assets/images/big/auth-bg.jpg) no-repeat center center" }}>
                        <div className="auth-box row text-center">
                            <div className="col-lg-7 col-md-5 modal-bg-img" style={{backgroundImage: "url(/src/content/backend/assets/images/big/3.jpg)"}}>
                            </div>
                            <div className="col-lg-5 col-md-7 bg-white shadow rounded">
                                <div className="p-4 rounded-pill">
                                    <div className="text-center text-danger">
                                        <img className="col-3" src="/src/images/logo/logo_admbp_blue_red.svg" alt="wrapkit" />
                                    </div>
                                    <h2 className="mt-3 text-center">Sign Up for Free</h2>
                                    <form className="mt-4">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="your name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input className="form-control" type="email" placeholder="email address" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input className="form-control" type="password" placeholder="password" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 text-center">
                                                <button type="submit" className="btn btn-block btn-dark">Sign Up</button>
                                            </div>
                                            <div className="col-lg-12 text-center mt-5">
                                                Already have an account? <Link to={"/login"} className="text-danger">Sign In</Link>
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