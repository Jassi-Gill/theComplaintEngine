import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Student() {
    const [stuId, setStuId] = useState("");
    const [pass, setPass] = useState("");
    const history = useNavigate();

    function handleIdChange(event) {
        setStuId(event.target.value);
    }

    function handlePassChange(event) {
        let len = event.target.value.length;
        setPass("•".repeat(len));
    }

    function handleClick(event) {
        const userType = event.target.textContent.toLowerCase();
        history(`/login/${userType}`);
    }

    return (
        <>
            <div className="Menu">
                <button onClick={handleClick}>Student</button>
                <button onClick={handleClick}>Faculty</button>
                <button onClick={handleClick}>Admin</button>
                <button onClick={handleClick}>Worker</button>
            </div>

            <div className="stu-login">
                <h1>LOGIN</h1>
                <div className="inputs">
                    <label>USERNAME:</label>
                    <input type="text" value={stuId} onChange={handleIdChange} placeholder="Enter Roll NO." id="username" /><br />
                    <label>PASSWORD:</label>
                    <input type="password" value={pass} onChange={handlePassChange} placeholder="••••••••" id="password" />
                </div>
                <button>LOGIN</button>
            </div>
        </>
    );
}

export default Student;
