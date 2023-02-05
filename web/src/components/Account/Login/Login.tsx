import React from "react"
import { Link } from "react-router-dom"
import "./login.css"

export const Login = () => {
    return (
        <section>
            <React.Fragment>
                <div className="main-wrapper">
                    <div className="auth-wrapper d-flex no-block justify-content-center align-items-center position-relative"
                        style={{ background: "url(/src/content/backend/assets/images/big/auth-bg.jpg) no-repeat center center"}}>
                        <div className="auth-box row">
                            <div className="col-lg-7 col-md-5 modal-bg-img" style={{ backgroundImage: "url(/src/content/backend/assets/images/big/3.jpg)"}}>
                            </div>
                            <div className="col-lg-5 col-md-7 bg-white shadow rounded">
                                <div className="p-3 rounded-pill">
                                    <div className="text-center">
                                        <img className="col-3" src="/src/images/logo/logo_admbp_blue_red.svg" alt="wrapkit" />
                                    </div>
                                    <h2 className="mt-3 text-center">Sign In</h2>
                                    <p className="text-center">Enter your email address and password to access admin panel.</p>
                                    <form className="mt-4">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label className="text-dark" htmlFor="uname">Username</label>
                                                    <input className="form-control" id="uname" type="text"
                                                        placeholder="enter your username" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label className="text-dark" htmlFor="pwd">Password</label>
                                                    <input className="form-control" id="pwd" type="password"
                                                        placeholder="enter your password" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 text-center">
                                                <button type="submit" className="btn btn-block btn-dark">Sign In</button>
                                            </div>
                                            <div className="col-lg-12 text-center mt-5">
                                                Don't have an account? <Link to={"/register"} className="text-danger">Sign Up</Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            <script src="/src/contests/backend/assets/libs/jquery/dist/jquery.min.js "></script>
            <script src="/src/contests/backend/assets/libs/popper.js/dist/umd/popper.min.js "></script>
            <script src="/src/contests/backend/assets/libs/bootstrap/dist/js/bootstrap.min.js "></script>
        </section>
    )
}