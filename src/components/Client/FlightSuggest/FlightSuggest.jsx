import React from 'react';
import './FlightSuggest.css';
import FlightCard from "../FlightCard/FlightCard.jsx";

const FlightSuggest = () => {
    return (
        <div className="suggest-container">
            <h1>
                Giá vé máy bay rẻ tốt nhất
            </h1>
            <div className="suggest-list">
                <FlightCard/>
                <FlightCard/>
                <FlightCard/>
                <FlightCard/>
                <FlightCard/>
                <FlightCard/>
                <FlightCard/>
                <FlightCard/>
                <FlightCard/>
                <FlightCard/>
            </div>
        </div>
    )
}

export default FlightSuggest