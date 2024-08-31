
import React, {useState} from 'react';
import './FlightSearch.css';
import TripTypeDropdown from '../TripType/TripTypeDropdown.jsx';

const FlightSearch = () => {



    return (
        <div className="search-container">
            <div className="filter-container">
                <TripTypeDropdown />

            </div>
        </div>
    );
}

export default FlightSearch;