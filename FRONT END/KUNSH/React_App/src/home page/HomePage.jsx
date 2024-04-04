import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
    let ThreadName = "Fan Not working";

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
            <div className="container">
                <div className="left">
                    <h4>To be updated</h4>
                </div>
                <div className="parent0">
                    <div className="Joined-Threads">
                        <h2>Joined Threads</h2>
                        <div className="Thread">
                            <h3>Complaint Creator</h3>
                            <h4>{ThreadName}</h4>
                            <p>Thread Start Date</p>
                            <h6>Thread Type / Compaint Type</h6>

                        </div>
                    </div>

                </div>
                <div className="parent">
                    <div className="recent-threads">
                        <h2>Recent Threads</h2>
                        <div className="Recent-Thread">
                            <h2>Thread Name</h2>
                            <p>Latest Comment</p>
                            <p>Latest Comment date</p>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}
export default HomePage;