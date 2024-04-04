import React, { useState, useContext } from "react";

function ComplaintPage() {

    const [complaintType, setComplaintType] = useState('');
    const [additionalOptions, setAdditionalOptions] = useState([]);

    const handleComplaintTypeChange = (e) => {
        const selectedValue = e.target.value;
        setComplaintType(selectedValue);


        switch (selectedValue) {
            case 'Electrical':
                setAdditionalOptions(['Option1', 'Option2', 'Option3']);
                break;
            case 'Plumbing':
                setAdditionalOptions(['OptionA', 'OptionB', 'OptionC']);
                break;
            case 'Civil':
                setAdditionalOptions(['OptionX', 'OptionY', 'OptionZ']);
                break;
            case 'Others':
                setAdditionalOptions(['OptionP', 'OptionQ', 'OptionR']);
                break;
            default:
                setAdditionalOptions([]);
                break;
        }
    };

    return (
        <>
            <div className="background-image">
                <img src="./10136775_17973908.jpg" alt="BackGround Image" />
            </div>
            <div className="heading">
                <h1>New Complaint</h1>
            </div>
            <form action="">
                <div className="Form">
                    <input type="text" name="Name" id="" placeholder="Enter FULL NAME" /><br />
                    <input type="number" name="RollNo." id="" /><br />
                    <input type="text" name="Email" placeholder="Enter College e-mail Id" /><br />
                    <div>
                        <label htmlFor="batch"></label>
                        <select name="batch" id="">
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                        </select>

                    </div><br />
                    <input type="number" name="room no." placeholder="enter room no." /><br />
                    <div>
                        <label htmlFor="Area"></label>
                        <select name="Area" id="">
                            <option value="Boys' Hostel">Boys' Hostel</option>
                            <option value="Girls' Hostel">Girls' Hostel</option>
                            <option value="Faculty Residence (T1/T2)">Faculty Residence (T1/T2)</option>
                            <option value="Admin Building">Admin Building</option>
                            <option value="Academic Building">Academic Building</option>
                            <option value="Security Barrack">Security Barrack</option>
                        </select>

                    </div>
                    <br />
                    <div>
                        <label htmlFor="complaintType">Complaint Type:</label>
                        <select name="complaintType" id="complaintType" onChange={handleComplaintTypeChange}>
                            <option value="">Select</option>
                            <option value="Electrical">Electrical</option>
                            <option value="Plumbing">Plumbing</option>
                            <option value="Civil">Civil</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <br />
                    {additionalOptions.length > 0 && (
                        <div>
                            {/* Additional options to display based on the selected complaint type */}
                            <label>Additional Options:</label>
                            <br />
                            {additionalOptions.map((option, index) => (
                                <div key={index}>
                                    <input type="radio" id={`option${index}`} name="additionalOptions" value={option} />
                                    <label htmlFor={`option${index}`}>{option}</label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <input type="text" name="brief-desc" id="" placeholder="Enter a breif description" />
                <input type="text" value={link} id="" placeholder="upload photo link" />
                <button>Upload⤴️</button>
            </form>



        </>);
}
export default ComplaintPage;
