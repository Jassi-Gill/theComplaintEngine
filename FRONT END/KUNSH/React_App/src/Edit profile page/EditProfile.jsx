import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function EditProfile() {
    return (<>
        <div className="Navbar">
            <button onClick={handleClick1} id="home" className="icons">
                <FontAwesomeIcon icon={faHouse} />
            </button>
            <div>
                <input type="text" placeholder="Search for Topics" id="search-box" />
                <button>Search</button>
            </div>

            <button onClick={handleClick} id="profile" className="icons">
                <FontAwesomeIcon icon={faUser} />
            </button>
            <p></p>
        </div>
        <div className="edit-profile-box">
            <h2>EDIT YOUR PROFILE</h2>
            <label htmlFor="Name">Name:</label>
            <h5>Name</h5>
            <label htmlFor="Username">Username:</label>
            <input type="text" value={username} />
            <label htmlFor="Email">Email</label>
            <h5>Email</h5>
            <label htmlFor="rollNo.">RollNO.</label>
            <h5>RollNo</h5>
            <label htmlFor="roomNo.">RoomNO.</label>
            <input type="number" name="roomNo." id="" />

            <button>Cancel</button>
            <button>Update</button>

        </div>
    </>);
}
export default EditProfile;