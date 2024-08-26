import React, {useState} from "react";
import "./FlightBanner.css";

const FlightBanner = () => {

    const [tripType, setTripType] = useState('round-trip');
    const [from, setFrom] = useState('Hồ Chí Minh (SGN)');
    const [to, setTo] = useState('Nha Trang (CXR)');
    const [departDate, setDepartDate] = useState('2024-08-26');
    const [returnDate, setReturnDate] = useState('2024-08-27');
    const [passengers, setPassengers] = useState(1);

    const handleSearch = () => {
        // Handle search logic here
    };

    //handle search logic
    const [inputValue, setInputValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setIsOpen(true);
    };

    const handleOptionClick = (option) => {
        setInputValue(option.name);
        setIsOpen(false);
    };

    const airports = [
        { name: "Nha Trang (CXR)", description: "Sân bay quốc tế Cam Ranh" },
        { name: "Huế (HUI)", description: "Sân bay quốc tế Phú Bài" },
        { name: "Hồ Chí Minh (SGN)", description: "Sân bay quốc tế Tân Sơn Nhất" },
        { name: "Hà Nội (HAN)", description: "Sân bay quốc tế Nội Bài" },
        { name: "Đà Nẵng (DAD)", description: "Sân bay quốc tế Đà Nẵng" },
        { name: "Phú Quốc (PQC)", description: "Sân bay quốc tế Phú Quốc" }
    ];

    return (
        <div className="flight-booking">
            <div className="banner-container">
                <div className="option-container">
                    <div className="flight-option">
                        <input type="radio" name="flight-type"/>
                        <span>Khứ hồi</span>
                    </div>
                    <div className="flight-option">
                        <input type="radio" name="flight-type"/>
                        <span>Một chiều</span>
                    </div>
                </div>

                <div className="flight-form">
                    <div className="left-section">
                        <div className="city-container">


                            <div className="airport-search">
                                <input
                                    type="text"
                                    placeholder="Từ"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onClick={() => setIsOpen(!isOpen)}
                                />
                                {isOpen && (
                                    <div className="dropdown">
                                        <p>Sân bay tìm kiếm gần đây</p>
                                        {airports.map((airport, index) => (
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


                            <div className="airport-search">
                                <input
                                    type="text"
                                    placeholder="Đến"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onClick={() => setIsOpen(!isOpen)}
                                />
                                {isOpen && (
                                    <div className="dropdown">
                                        <p>Sân bay tìm kiếm gần đây</p>
                                        {airports.map((airport, index) => (
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
                        </div>

                        <div className="date-container">

                        </div>
                    </div>

                    <div className="right-section">
                        <div className="passenger-container">
                            <label>Số hành khách</label>
                            <select name="" id="">
                                <option value="1">1 hành khách</option>
                                <option value="2">2 hành khách</option>
                                <option value="3">3 hành khách</option>
                                <option value="4">4 hành khách</option>
                                <option value="5">5 hành khách</option>
                                <option value="6">6 hành khách</option>
                            </select>
                        </div>

                        <button onClick={handleSearch}>Tìm chuyến bay</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default FlightBanner;