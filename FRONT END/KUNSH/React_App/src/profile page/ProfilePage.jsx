import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function ProfilePage() {
    function handleClick() {

    }
    function handleClick1() {

    }
    return (
        <>
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
            <div className="left-panel">
                <h3>open to all complaints</h3>
                <h3>All</h3>
                <h4>complaint type1(number)</h4>
                <h4>complaint type2(number)</h4>
                <h4>complaint type3(number)</h4>
            </div>

            <div className="center-panel">
                <p>profile pic</p>
                <h3>Name</h3>
                <h4>username</h4>
                <h4>no.of followers</h4>
                <button>Follow</button>
                <p>Complaints participated in</p>
                <div className="Thread-boxes">
                    <div className="thread1">
                        <h3>Complaint Creator</h3>
                        <h4>ThreadName</h4>
                        <p>Thread Start Date</p>
                        <h4>profile pic of people joined</h4>
                        <p>no .of participants joined</p>
                    </div>
                </div>
            </div>
            <div className="right-panel">
                <h2>Recent Activities</h2>
                <div className="Reply-box1">
                    <p>Profile pic</p>
                    <p>username</p>
                    <p>Date from now </p>
                    <p>comment to post</p>
                    <h5>Complaint name</h5>
                    <p>Reply</p>
                </div>

            </div>
        </>
    );
}
export default ProfilePage;