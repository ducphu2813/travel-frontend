import React from 'react';
import './FlightCard.css';
import vietjetLogo from '../../assets/vietjet.webp';


const FlightCard = () => {

    return (
        <div className="flight-card">
            <div className="flight-info">

                <div className="location-info">
                    <div className="location">
                        <span>Hồ Chí Minh City</span>
                        <span className="icon">⇄</span>
                        <span>Nha Trang</span>
                    </div>
                    <div className="dates">
                        <span>15 thg 10</span>
                        <span>17 thg 10</span>
                    </div>
                </div>

                <div className="airline-logo">
                    <img src={vietjetLogo} alt="vietjet"/>
                </div>
            </div>

            <div className="price-section">
                <div className="price-info">
                    <span className="price">1.490.800</span>
                    <span className="currency">VND</span>
                </div>
                <button className="view-button">Xem</button>
            </div>
        </div>
    );

}

export default FlightCard