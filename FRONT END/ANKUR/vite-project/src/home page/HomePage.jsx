import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';

function HomePage() {
    let ThreadName = "Fan Not working";

    // Example statistics data
    const statistics = {
        totalWorkers: 150,
        totalStudents: 500,
        totalFaculties: 50
    };

    function handleClick() {
        // Handle click for profile button
    }

    function handleClick1() {
        // Handle click for home button
    }

    const [showPanel, setShowPanel] = useState(false);

    useEffect(() => {
        setShowPanel(true);
    }, []);

    return (
        <>
            <header>
                <div className="Navbar">
                    <button onClick={handleClick1} id="home" className="icons">
                        <FontAwesomeIcon icon={faHouse} />
                    </button>
                    <div className="search-container">
                        <input type="text" placeholder="Search for Topics" id="search-box" />
                        <button className="search-button">Search</button>
                    </div>
                    <button onClick={handleClick} id="profile" className="icons">
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                </div>
            </header>
            <div className="container">
                <CSSTransition in={showPanel} timeout={500} classNames="panel">
                    <div className="left">
                        <div className="panel">
                            <h2>Statistics</h2>
                            <div className="statistic">
                                <h3>Total Workers:</h3>
                                <p>{statistics.totalWorkers}</p>
                            </div>
                            <div className="statistic">
                                <h3>Total Students:</h3>
                                <p>{statistics.totalStudents}</p>
                            </div>
                            <div className="statistic">
                                <h3>Total Faculties:</h3>
                                <p>{statistics.totalFaculties}</p>
                            </div>
                        </div>
                    </div>
                </CSSTransition>
                <div className="parent Joined-Threads">
                    <h2>Joined Threads</h2>
                    <div className="Thread">
                        <h3>Complaint Creator</h3>
                        <h4>{ThreadName}</h4>
                        <p>Thread Start Date</p>
                        <h6>Thread Type / Complaint Type</h6>
                    </div>
                </div>
                <div className="parent recent-threads">
                    <h2>Recent Threads</h2>
                    <div className="Recent-Thread">
                        <h2>Thread Name</h2>
                        <p>Latest Comment</p>
                        <p>Latest Comment date</p>
                    </div>
                </div>
            </div>
            <footer>
                <div>About Us</div>
                <div>Admin Contact</div>
            </footer>
        </>
    )
}

export default HomePage;
