document.addEventListener("DOMContentLoaded", function () {
    function handleClick() {
        // Handle click for profile button
    }

    function handleClick1() {
        // Handle click for home button
    }

    const homeButton = document.getElementById("home");
    const profileButton = document.getElementById("profile");

    homeButton.addEventListener("click", handleClick1);
    profileButton.addEventListener("click", handleClick);
});
