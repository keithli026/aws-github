import React from 'react';
import Breadcrumb from "../components/Breadcrumb";
import { Container } from "../GlobalStyle";
import { Link } from "react-router-dom"

const ServicesOverview = () => {
    return (
        <Container className="overviews">
            <div className="overview">
                <Link to="/services/manual-therapy">
                    <img src={process.env.PUBLIC_URL + "/image_3_to_2.png"} alt="Manual Therapy"></img>
                    <h2>Manual Therapy</h2>
                </Link>
            </div>
              <div className="overview">
                <Link to="/services/dry-needling">
                    <img src={process.env.PUBLIC_URL + "/image_3_to_2.png"} alt="Dry Needling"></img>
                    <h2>Dry Needling</h2>
                </Link>
            </div>
            <div className="overview">
                <Link to="/services/exercise-rehabilitation">
                    <img src={process.env.PUBLIC_URL + "/image_3_to_2.png"} alt="Exercise Rehabilitation"></img>
                    <h2>Exercise Rehabilitation</h2>
                </Link>
            </div>
            <div className="overview">
                <Link to="/services/massage-therapy">
                    <img src={process.env.PUBLIC_URL + "/image_3_to_2.png"} alt="Massage Therapy"></img>
                    <h2>Massage Therapy</h2>
                </Link>
            </div>
            <div className="overview">
                <Link to="/services/extracorporeal-shockwave-therapy">
                    <img src={process.env.PUBLIC_URL + "/image_3_to_2.png"} alt="Extracorporeal Shockwave Therapy"></img>
                    <h2>Extracorporeal Shockwave Therapy</h2>
                </Link>
            </div>
            <div className="overview">
                <Link to="/services/electrotherapy">
                    <img src={process.env.PUBLIC_URL + "/image_3_to_2.png"} alt="Electrotherapy"></img>
                    <h2>Electrotherapy</h2>
                </Link>
            </div>
            <div className="overview">
                <Link to="/services/cupping-therapy">
                    <img src={process.env.PUBLIC_URL + "/image_3_to_2.png"} alt="Cupping Therapy"></img>
                    <h2>Cupping Therapy</h2>
                </Link>
            </div>
            <div className="overview">
                <Link to="/services/taping">
                    <img src={process.env.PUBLIC_URL + "/image_3_to_2.png"} alt="Taping"></img>
                    <h2>Taping</h2>
                </Link>
            </div>

            {/* <div className="overview">
                <Link to="/services/myofascial-release">
                    <img src={process.env.PUBLIC_URL + "/image_3_to_2.png"} alt="Myofascial Release"></img>
                    <h2>Myofascial Release</h2>
                </Link>
            </div>
            <div className="overview">
                <Link to="/services/radial-shockwave-therapy">
                    <img src={process.env.PUBLIC_URL + "/image_3_to_2.png"} alt="Radial Shockwave Therapy"></img>
                    <h2>Radial Shockwave Therapy</h2>
                </Link>
            </div>
            <div className="overview">
                <Link to="/services/therapeutic-ultrasound">
                    <img src={process.env.PUBLIC_URL + "/image_3_to_2.png"} alt="Therapeutic Ultrasound"></img>
                    <h2>Therapeutic Ultrasound</h2>
                </Link>
            </div> */}

        </Container>
    );
}

export default ServicesOverview;