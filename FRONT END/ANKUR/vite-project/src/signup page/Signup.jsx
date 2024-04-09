import React, { useState } from "react";

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Add your sign-up logic here
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  }

  return (
    <div className="background-template">
      <div className="admin-container">
        <div className="photo-section">
          {/* Photo goes here */}
          <img src="comp2.jpg" alt="Engineering" className="background-photo" />
        </div>
        <div className="login-section">
          {/* Sign-up box goes here */}
          <div className="fac-login">
            <h1>SIGN UP</h1>
            <form onSubmit={handleSubmit}>
              <div className="inputs">
                <label htmlFor="username">USERNAME:</label>
                <input type="text" value={username} onChange={handleUsernameChange} placeholder="Enter username" id="username" />
                <br />
                <label htmlFor="password">PASSWORD:</label>
                <input type="password" value={password} onChange={handlePasswordChange} placeholder="Enter password" id="password" />
                <br />
                <label htmlFor="confirmPassword">CONFIRM PASSWORD:</label>
                <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Confirm password" id="confirmPassword" />
              </div>
              <button type="submit">SIGN UP</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
