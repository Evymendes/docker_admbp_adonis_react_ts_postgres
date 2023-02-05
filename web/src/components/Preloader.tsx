import React from "react"

export const Preloader = () => {
    return (
        <section>
            <React.Fragment>
                <div className="preloader">
                    <div className="lds-ripple">
                        <div className="lds-pos"></div>
                        <div className="lds-pos"></div>
                    </div>
                </div>
            </React.Fragment>
        </section>
    )
}