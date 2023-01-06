import React from "react"
import { Breadcrumb } from "../../../components/Breadcrumb"

export const ContactMaps = () => {
    return (
        <section>
            <React.Fragment>
                <Breadcrumb from="Home" go="Contact"/>
                <div className="map-area mt-30">
                    <iframe className="mb-5 mb-lg-0 border border-left-danger shadow-lg" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14697.932513771693!2d-43.2010707!3d-22.9324278!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf961e3a018492334!2sADMBP%20-%20Assembl%C3%A9ia%20de%20Deus%20Minist%C3%A9rio%20Bar%C3%A3o%20de%20Petr%C3%B3polis!5e0!3m2!1sen!2sbr!4v1589473638158!5m2!1sen!2sbr" style={{border:"0", width: "100%", height: "384px" }} allowFullScreen aria-hidden="false" tabIndex={0}></iframe>
                </div>
            </React.Fragment>
        </section>
    )
}