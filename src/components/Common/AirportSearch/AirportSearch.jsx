import React, {useEffect, useState} from "react";

const AirportSearch = ({ label, initialValue, onAirportSelect, excludedAirport }) => {

    const airports = [
        { name: "Nha Trang (CXR)", description: "Sân bay quốc tế Cam Ranh" },
        { name: "Huế (HUI)", description: "Sân bay quốc tế Phú Bài" },
        { name: "Hồ Chí Minh (SGN)", description: "Sân bay quốc tế Tân Sơn Nhất" },
        { name: "Hà Nội (HAN)", description: "Sân bay quốc tế Nội Bài" },
        { name: "Đà Nẵng (DAD)", description: "Sân bay quốc tế Đà Nẵng" },
        { name: "Phú Quốc (PQC)", description: "Sân bay quốc tế Phú Quốc" }
    ];

    const [inputValue, setInputValue] = useState(initialValue || '');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setInputValue(initialValue);
    }, [initialValue]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setIsOpen(true);
    };

    const handleOptionClick = (option) => {
        setInputValue(option.name);
        setIsOpen(false);
        onAirportSelect(option.name);
    };

    return (
        <div className="airport-search">
            <input
                type="text"
                placeholder={label}
                value={inputValue}
                onChange={handleInputChange}
                onClick={() => setIsOpen(!isOpen)}
            />
            {isOpen && (
                <div className="dropdown">
                    {airports
                        .filter((airport) => airport.name !== excludedAirport)
                        .map((airport, index) => (
                            <div
                                key={index}
                                className="dropdown-option"
                                onClick={() => handleOptionClick(airport)}
                            >
                                <strong>{airport.name}</strong>
                                <p>{airport.description}</p>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default AirportSearch;