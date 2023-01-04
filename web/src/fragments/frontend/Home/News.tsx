
import React from "react"

export const News = () => {
    return (
        <div>
            <React.Fragment>
                <section className="blog-area section-padding-100-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading">
                                    <h2>Latest News</h2>
                                    <p>Latest information on religion, church, politics revolves around us</p>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single-blog-post mb-100">
                                    <div className="post-thumbnail">
                                        <a href="single-post.html"><img src="src/images/bg-img/10.jpg" alt=""/></a>
                                    </div>
                                    <div className="post-content">
                                        <a href="single-post.html" className="post-title">
                                            <h4>Mexican priest murdered in his church</h4>
                                        </a>
                                        <div className="post-meta d-flex">
                                            <a href="#"><i className="fa fa-user" aria-hidden="true"></i> Luke Coppen</a>
                                            <a href="#"><i className="fa fa-calendar" aria-hidden="true"></i> April 23, 2018</a>
                                        </div>
                                        <p className="post-excerpt">The priest, who was also the diocesan judicial vicar, was accosted by the assailant and was involved in a discussion.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single-blog-post mb-100">
                                    <div className="post-thumbnail">
                                        <a href="single-post.html"><img src="src/images/bg-img/11.jpg" alt=""/></a>
                                    </div>
                                    <div className="post-content">
                                        <a href="single-post.html" className="post-title">
                                            <h4>A daily guide to what's open in the Catholic Church</h4>
                                        </a>
                                        <div className="post-meta d-flex">
                                            <a href="#"><i className="fa fa-user" aria-hidden="true"></i> Staff Reporter</a>
                                            <a href="#"><i className="fa fa-calendar" aria-hidden="true"></i> April 03, 2018</a>
                                        </div>
                                        <p className="post-excerpt">The Liturgy helps us to “rediscover our identity as disciples of the Risen Lord”, Pope Francis said at the Regina Caeli.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single-blog-post mb-100">
                                    <div className="post-thumbnail">
                                        <a href="single-post.html"><img src="src/images/bg-img/12.jpg" alt=""/></a>
                                    </div>
                                    <div className="post-content">
                                        <a href="single-post.html" className="post-title">
                                            <h4>The Bishop of Dromore was right to resign.</h4>
                                        </a>
                                        <div className="post-meta d-flex">
                                            <a href="#"><i className="fa fa-user" aria-hidden="true"></i> Lucie Smith</a>
                                            <a href="#"><i className="fa fa-calendar" aria-hidden="true"></i> April 15, 2018</a>
                                        </div>
                                        <p className="post-excerpt">God comes to us in free and undeserved favor in the person of Jesus Christ who lived, died, and rose for us that we might belong to God.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        </div>
    )
}