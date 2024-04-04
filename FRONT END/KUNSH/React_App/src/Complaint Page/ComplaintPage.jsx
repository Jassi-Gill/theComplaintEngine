import React, { useState, useContext } from "react";

function ComplaintPage() {


    return (
        <>
            <div className="heading">
                <h1>New Complaint</h1>
            </div>
            <div className="Form">
                <input type="text" name="Name" id="" placeholder="Enter FULL NAME" />
                <input type="text" name="Email" placeholder="Enter College e-mail Id" />
                <div>
                    <label htmlFor="batch"></label>
                    <select name="batch" id=""></select>
                    <option value="2026">2025</option>
                    <option value="2025">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                </div>
                <input type="" />
            </div>

        </>);
}
export default ComplaintPage;
