import React, {useState} from "react";
import "./TripTypeDropdown.css";

const TripTypeDropdown = () => {
    const [selectedOption, setSelectedOption] = useState('Khứ hồi');
    const [isOpen, setIsOpen] = useState(false);

    const options = ['Khứ hồi', 'Một chiều'];

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="trip-type-dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
                {selectedOption} <span className="arrow">{isOpen ? '▲' : '▼'}</span>
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map((option) => (
                        <li
                            key={option}
                            className={`dropdown-item ${option === selectedOption ? 'selected' : ''}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TripTypeDropdown;