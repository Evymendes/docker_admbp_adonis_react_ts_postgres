import React from "react"
//import * as dotenv from "dotenv";
//dotenv.config();
//const name = process.env.REACT_NAME

export const Intro = () => {
    return (
        <div>
            <React.Fragment>
                <section className="about-area section-padding-100-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading">
                                    <h2> Seja Bem Vindo <br/>ADMBP</h2>
                                    <p>
                                    Assembleia de Deus é a designação dada para uma denominação de igrejas evangélicas cristãs; As Assembleias de Deus estão inseridas nas doutrinas do Protestantismo e Pentecostalismo. Existem várias Assembleias de Deus com nomes diferentes, e se trata da maior denominação evangélica no Brasil.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row about-content justify-content-center">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="about-us-content mb-100">
                                    <img src="src/images/bg-img/3.jpg" alt="" />
                                    <div className="about-text">
                                        <h4>A Igreja</h4>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                        <a href="#">Read More <i className="fa fa-angle-double-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="about-us-content mb-100">
                                    <img src="src/images/bg-img/4.jpg" alt="" />
                                    <div className="about-text">
                                        <h4>A História</h4>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                        <a href="#">Read More <i className="fa fa-angle-double-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="about-us-content mb-100">
                                    <img src="src/images/bg-img/5.jpg" alt="" />
                                    <div className="about-text">
                                        <h4>O Cultos</h4>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                        <a href="#">Read More <i className="fa fa-angle-double-right"></i></a>
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