//import { useState } from "react";

//const [images, setImages] = useState([])

export const Believe = () => {
    return (
        <section className="home_slider_container">
            <div className="owl-carousel owl-theme home_slider">

                <div className="owl-item">
                    <div className="home_slider_background" style={{ backgroundImage: "src/images/bg-img/1.jpg"} }></div>
                    <div className="home_slider_content text-center">
                        <div className="cross_1 d-flex flex-column align-items-center justify-content-center"><img src="src/images/cross_1.png" alt=""/></div>
                        <h1>God is all around us</h1>
                        <div className="button home_slider_button"><a href="#">Come and join us</a></div>
                    </div>
                </div>

                <div className="owl-item">
                    <div className="home_slider_background" style={{ backgroundImage: "src/images/bg-img/2.jpg"} }></div>
                    <div className="home_slider_content text-center">
                        <div className="cross_1 d-flex flex-column align-items-center justify-content-center"><img src="src/images/cross_1.png" alt=""/></div>
                        <h1>God is all around us</h1>
                        <div className="button home_slider_button"><a href="#">Come and join us</a></div>
                    </div>
                </div>

                <div className="owl-item">
                    <div className="home_slider_background" style={{ backgroundImage: "src/images/bg-img/3.jpg"} }></div>
                    <div className="home_slider_content text-center">
                        <div className="cross_1 d-flex flex-column align-items-center justify-content-center"><img src="src/images/cross_1.png" alt=""/></div>
                        <h1>God is all around us</h1>
                        <div className="button home_slider_button"><a href="#">Come and join us</a></div>
                    </div>
                </div>
            </div>
            <div className="home_slider_nav d-flex flex-column align-items-center justify-content-center"><img src="src/images/arrow_r.png" alt=""/></div>
        </section>
    )
}
