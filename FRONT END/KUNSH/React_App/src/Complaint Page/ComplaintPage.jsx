import React, { useState, useEffect } from "react";

function ComplaintPage() {
    const [complaintType, setComplaintType] = useState('');
    const [additionalOptions, setAdditionalOptions] = useState([]);
    const [photoLink, setPhotoLink] = useState('');
    const [inputPhotoLink, setInputPhotoLink] = useState('');
    const [selectedOptionImages, setSelectedOptionImages] = useState({});
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (option) => {
        setSelectedOption(option); // Update selected option when radio button changes
    };

    useEffect(() => {
        const inputFields = document.querySelectorAll('.input-container input');

        inputFields.forEach(input => {
            const handleFocus = () => {
                input.nextElementSibling.classList.add('active');
            };

            const handleBlur = () => {
                if (!input.value.trim()) {
                    input.nextElementSibling.classList.remove('active');
                }
            };

            const handleInput = () => {
                if (input.value.trim()) {
                    input.nextElementSibling.classList.add('active');
                } else {
                    input.nextElementSibling.classList.remove('active');
                }
            };

            input.addEventListener('focus', handleFocus);
            input.addEventListener('blur', handleBlur);
            input.addEventListener('input', handleInput);

            return () => {
                input.removeEventListener('focus', handleFocus);
                input.removeEventListener('blur', handleBlur);
                input.removeEventListener('input', handleInput);
            };
        });
    }, []);

    const handleComplaintTypeChange = (e) => {
        const selectedValue = e.target.value;
        setComplaintType(selectedValue);

        const complaintOptions = {
            'Electrical': {
                'Cabin fan': { name: 'Cabin fan', imagePath: './cabin Fan.jpg' },
                'Ceiling Fan': { name: 'Ceiling Fan', imagePath: './Ceiling FAn.jpg' },
                'Stand fan': { name: 'Stand fan', imagePath: './Stand Fan.jpg' },
                'LIGHT': { name: 'LIGHT' },
                'Fan Regulator': { name: 'Fan Regulator' },
                'Exhaust Fan-Round Type': { name: 'Exhaust Fan-Round Type', imagePath: './exh fan round.jpg' },
                'Exhaust Fan-Square Type': { name: 'Exhaust Fan-Square Type', imagePath: './exhaust fan crompton.jpg' },
                'Socket': { name: 'Socket', imagePath: './socket.jpg' },
                'Switch': { name: 'Switch', imagePath: './switch.jpg' }
            },
            'Plumbing': {
                'Toilet faucet/JetSpray': { name: 'Toilet faucet/JetSpray' },
                'Toilet cistern / flushing': { name: 'Toilet cistern / flushing', imagePath: './cistern.jpg' },
                'Toilet Seat Cover': { name: 'Toilet Seat Cover' },
                'Water Tap': { name: 'Water Tap' },
                'Water Leakage/ Drain clogged': { name: 'Water Leakage/ Drain clogged' }
            },
            'Civil': {
                'Wall/Floor etc.': { name: 'Wall/Floor etc.' }
            },
            // 'Mess':{

            // }
            'Others': {
                'Air Conditioner': { name: 'Air Conditioner' },
                'Elevator/ Lift': { name: 'Elevator/ Lift' },
                'Cleaning/Hygiene': { name: 'Cleaning/Hygiene' },
                'Security Services': { name: 'Security Services' },
                'Hostel TV related': { name: 'Hostel TV related' }
            }
        };

        if (selectedValue in complaintOptions) {
            const selectedOptions = complaintOptions[selectedValue];
            setAdditionalOptions(Object.keys(selectedOptions));
            setSelectedOptionImages(selectedOptions);
        } else {
            setAdditionalOptions([]);
            setSelectedOptionImages({});
        }
    };

    const handleButtonClick = () => {
        setPhotoLink(inputPhotoLink);
        console.log(photoLink);
    };

    const handleInputChange = (e) => {
        setInputPhotoLink(e.target.value);
    };

    return (
        <>
            <div className="background-image">
                <img src="./10136775_17973908.jpg" alt="BackGround Image" />
            </div>
            <div className="heading">
                <h1>New Complaint</h1>
            </div>
            <form>
                <div className="Form">
                    <input type="text" name="Name" placeholder="Enter FULL NAME" /><br />
                    <input type="text" name="Email" placeholder="Enter College e-mail Id" /><br />
                    <div className="small_box">
                        <input type="number" name="RollNo." placeholder="Enter Roll no." /><br />
                        <select name="batch">
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                        </select><br />
                    </div>

                    <div className="small_box">
                        <input type="number" name="room no." placeholder="Enter room no." /><br />
                        <select name="Area">
                            <option value="Boys' Hostel">Boys' Hostel</option>
                            <option value="Girls' Hostel">Girls' Hostel</option>
                            <option value="Faculty Residence (T1/T2)">Faculty Residence (T1/T2)</option>
                            <option value="Admin Building">Admin Building</option>
                            <option value="Academic Building">Academic Building</option>
                            <option value="Security Barrack">Security Barrack</option>
                        </select><br />
                    </div>
                    <select name="complaintType" onChange={handleComplaintTypeChange}>
                        <option value="">Select</option>
                        <option value="Electrical">Electrical</option>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Civil">Civil</option>
                        <option value="Mess">Mess</option>
                        <option value="Others">Others</option>
                    </select><br />
                    {additionalOptions.length > 0 && (
                        <div>
                            <label>Additional Options:</label><br />
                            {additionalOptions.map((option, index) => (
                                <div key={index} className="option-container">
                                    <input
                                        type="radio"
                                        id={`option${index}`}
                                        name="additionalOptions"
                                        value={option}
                                        checked={option === selectedOption} // Check if the option is selected
                                        onChange={() => handleOptionChange(option)} // Call handleOptionChange on change
                                    />
                                    <label htmlFor={`option${index}`}>{option}</label>
                                    {selectedOptionImages[option] && selectedOptionImages[option].imagePath && (
                                        <img
                                            src={selectedOptionImages[option].imagePath}
                                            alt={`Image for ${option}`}
                                            className={`animated-element ${option === selectedOption ? 'selected' : ''}`}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}


                    <input type="text" name="brief-desc" placeholder="Enter a brief description" id="breif-desc" />
                    <input type="text" value={inputPhotoLink} onChange={handleInputChange} placeholder="Upload photo link" />
                    <button type="button" onClick={handleButtonClick}>Upload⤴️</button>
                    <input type="submit" />
                </div>
            </form>
        </>
    );
}

export default ComplaintPage;
