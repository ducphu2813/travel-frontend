import * as React from 'react';
import './flight.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import {Autocomplete} from "@mui/material";

const AdFlight = () => {

    const [tripType, setTripType] = React.useState('Khứ hồi');

    const handleChange = (event) => {
        setTripType(event.target.value);
    };

    //airport data
    const airports = [
        { code: 'LAX', name: "Nha Trang (CXR)", description: "Sân bay quốc tế Cam Ranh", city: 'Los Angeles', country: 'USA' },
        { code: 'LAX', name: "Huế (HUI)", description: "Sân bay quốc tế Phú Bài", city: 'Los Angeles', country: 'USA' },
        { code: 'LAX', name: "Hồ Chí Minh (SGN)", description: "Sân bay quốc tế Tân Sơn Nhất", city: 'Los Angeles', country: 'USA' },
        { code: 'LAX', name: "Hà Nội (HAN)", description: "Sân bay quốc tế Nội Bài", city: 'Los Angeles', country: 'USA' },
        { code: 'LAX', name: "Đà Nẵng (DAD)", description: "Sân bay quốc tế Đà Nẵng", city: 'Los Angeles', country: 'USA' },
        { code: 'LAX', name: "Phú Quốc (PQC)", description: "Sân bay quốc tế Phú Quốc", city: 'Los Angeles', country: 'USA' }
    ];



    return (
        <div className="container">
            <div className="filter-container">
                <div className="trip-type">
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Loại vé</InputLabel>
                            <Select
                                labelId="trip-type-select"
                                id="trip-type-select"
                                value={tripType}
                                label="Loại vé"
                                onChange={handleChange}
                            >
                                <MenuItem value="round-trip">Khứ hồi</MenuItem>
                                <MenuItem value="one-way">Một chiều</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>

                <div className="airport-select">
                    <div className="departure-airport">
                        <Autocomplete
                            id="departure-airport-select"
                            sx={{ width: 300 }}
                            options={airports}
                            autoHighlight
                            getOptionLabel={(option) => `${option.name} (${option.code})`}
                            renderOption={(props, option) => {
                                const { key, ...optionProps } = props;
                                return (
                                    <Box
                                        key={key}
                                        component="li"
                                        sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                                        {...optionProps}
                                    >
                                        {option.name} - {option.city} ({option.code})
                                    </Box>
                                );
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Từ"
                                    slotProps={{
                                        htmlInput: {
                                            ...params.inputProps,
                                            autoComplete: 'new-password', // disable autocomplete and autofill
                                        },
                                    }}
                                />
                            )}
                        />
                    </div>

                    <div className="arrival-airport">
                        <Autocomplete
                            id="arrival-airport-select"
                            sx={{ width: 300 }}
                            options={airports}
                            autoHighlight
                            getOptionLabel={(option) => `${option.name} (${option.code})`}
                            renderOption={(props, option) => {
                                const { key, ...optionProps } = props;
                                return (
                                    <Box
                                        key={key}
                                        component="li"
                                        sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                                        {...optionProps}
                                    >
                                        {option.name} - {option.city} ({option.code})
                                    </Box>
                                );
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Đến"
                                    slotProps={{
                                        htmlInput: {
                                            ...params.inputProps,
                                            autoComplete: 'new-password', // disable autocomplete and autofill
                                        },
                                    }}
                                />
                            )}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AdFlight;