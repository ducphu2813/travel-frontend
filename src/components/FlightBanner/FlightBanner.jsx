import React, {useEffect, useState} from "react";
import "./FlightBanner.css";
import AirportSearch from "../AirportSearch/AirportSearch.jsx";

//component AirportSearch
// const AirportSearch = ({ label, initialValue, onAirportSelect, excludedAirport }) => {
//
//     const airports = [
//         { name: "Nha Trang (CXR)", description: "Sân bay quốc tế Cam Ranh" },
//         { name: "Huế (HUI)", description: "Sân bay quốc tế Phú Bài" },
//         { name: "Hồ Chí Minh (SGN)", description: "Sân bay quốc tế Tân Sơn Nhất" },
//         { name: "Hà Nội (HAN)", description: "Sân bay quốc tế Nội Bài" },
//         { name: "Đà Nẵng (DAD)", description: "Sân bay quốc tế Đà Nẵng" },
//         { name: "Phú Quốc (PQC)", description: "Sân bay quốc tế Phú Quốc" }
//     ];
//
//     const [inputValue, setInputValue] = useState(initialValue || '');
//     const [isOpen, setIsOpen] = useState(false);
//
//     useEffect(() => {
//         setInputValue(initialValue);
//     }, [initialValue]);
//
//     const handleInputChange = (e) => {
//         setInputValue(e.target.value);
//         setIsOpen(true);
//     };
//
//     const handleOptionClick = (option) => {
//         setInputValue(option.name);
//         setIsOpen(false);
//         onAirportSelect(option.name);
//     };
//
//     return (
//         <div className="airport-search">
//             <input
//                 type="text"
//                 placeholder={label}
//                 value={inputValue}
//                 onChange={handleInputChange}
//                 onClick={() => setIsOpen(!isOpen)}
//             />
//             {isOpen && (
//                 <div className="dropdown">
//                     {airports
//                         .filter((airport) => airport.name !== excludedAirport)
//                         .map((airport, index) => (
//                             <div
//                                 key={index}
//                                 className="dropdown-option"
//                                 onClick={() => handleOptionClick(airport)}
//                             >
//                                 <strong>{airport.name}</strong>
//                                 <p>{airport.description}</p>
//                             </div>
//                         ))}
//                 </div>
//             )}
//         </div>
//     );
// };

const FlightBanner = () => {

    const [departureAirport, setDepartureAirport] = useState('Hồ Chí Minh (SGN)');
    const [arrivalAirport, setArrivalAirport] = useState('Hà Nội (HAN)');

    const handleDepartureSelect = (airport) => {
        setDepartureAirport(airport);
        if (airport === arrivalAirport) setArrivalAirport('');
    };

    const handleArrivalSelect = (airport) => {
        setArrivalAirport(airport);
        if (airport === departureAirport) setDepartureAirport('');
    };

    //xử lý chọn khứ hồi hoặc một chiều
    const [tripType, setTripType] = useState('round-trip');

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const dayAfterTomorrow = new Date(tomorrow);
    dayAfterTomorrow.setDate(tomorrow.getDate() + 2);

    const [departDate, setDepartDate] = useState(tomorrow.toISOString().split('T')[0]);
    const [returnDate, setReturnDate] = useState(dayAfterTomorrow.toISOString().split('T')[0]);

    useEffect(() => {
        // Update the return date if it becomes invalid based on the new depart date
        const newReturnDate = new Date(departDate);
        newReturnDate.setDate(newReturnDate.getDate() + 2);

        if (new Date(returnDate) <= new Date(departDate)) {
            setReturnDate(newReturnDate.toISOString().split('T')[0]);
        }
    }, [departDate]);

    //xử lý nhập số hành khách
    const [passengerCount, setPassengerCount] = useState(1);

    const handleIncrease = () => {
        setPassengerCount((prevCount) => prevCount + 1);
    };

    const handleDecrease = () => {
        if (passengerCount > 1) {
            setPassengerCount((prevCount) => prevCount - 1);
        }
    };

    //xử lý tìm chuyến bay
    const handleSearch = () => {
        alert('Searching for flights ...');

        // Tạo 1 json object chứa thông tin chuyến bay
        const flightInfo = {
            tripType,
            departureAirport,
            arrivalAirport,
            departDate,
            returnDate,
            passengerCount
        };
        console.log(flightInfo);
    };


    return (
        <div className="flight-booking">
            <div className="banner-container">
                <div className="option-container">
                    <div className="flight-option">
                        <input
                            type="radio"
                            name="flight-type"
                            id="round-trip"
                            value="round-trip"
                            checked={tripType === 'round-trip'}
                            onChange={() => setTripType('round-trip')}
                        />
                        <span>Khứ hồi</span>
                    </div>
                    <div className="flight-option">
                        <input
                            type="radio"
                            name="flight-type"
                            id="one-way"
                            value="one-way"
                            checked={tripType === 'one-way'}
                            onChange={() => setTripType('one-way')}
                        />
                        <span>Một chiều</span>
                    </div>
                </div>

                <div className="flight-form">
                    <div className="left-section">
                        <div className="city-container">
                            <AirportSearch
                                label="Từ"
                                initialValue={departureAirport}
                                onAirportSelect={handleDepartureSelect}
                                excludedAirport={arrivalAirport}
                            />
                            <AirportSearch
                                label="Đến"
                                initialValue={arrivalAirport}
                                onAirportSelect={handleArrivalSelect}
                                excludedAirport={departureAirport}
                            />
                        </div>

                        <div className="date-container">

                            <div className="date-input">
                                <label>Ngày đi</label>
                                <input
                                    type="date"
                                    value={departDate}
                                    min={today.toISOString().split('T')[0]}
                                    onChange={(e) => setDepartDate(e.target.value)}
                                />
                            </div>

                            {tripType === 'round-trip' && (
                                <div className="date-input">
                                    <label>Ngày về</label>
                                    <input
                                        type="date"
                                        value={returnDate}
                                        min={new Date(departDate).toISOString().split('T')[0]}
                                        onChange={(e) => setReturnDate(e.target.value)}
                                    />
                                </div>
                            )}

                        </div>
                    </div>

                    <div className="right-section">
                        <div className="passenger-container">
                            <label>Số hành khách</label>
                            <div className="passenger-counter">
                                <button onClick={handleDecrease} className="counter-button"
                                        disabled={passengerCount <= 1}>
                                    -
                                </button>
                                <span className="counter-value">{passengerCount}</span>
                                <button onClick={handleIncrease} className="counter-button">
                                    +
                                </button>
                            </div>
                        </div>

                        <button
                            className="search-btn"
                            onClick={handleSearch}
                        >Tìm chuyến bay</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default FlightBanner;