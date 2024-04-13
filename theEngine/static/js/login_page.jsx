document.addEventListener("DOMContentLoaded", function() {
  const userTypeSelect = document.getElementById("user-type-select");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginButton = document.getElementById("login-button");

  loginButton.addEventListener("click", handleLogin);

  function handleLogin() {
    const selectedUserType = userTypeSelect.value;
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Handle login based on selectedUserType
    console.log("User Type:", selectedUserType);
    console.log("Username:", username);
    console.log("Password:", password);
  }
});
