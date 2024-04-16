import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Thread_page() {
    function handleClick() {

    }
    function handleClick1() {

    }
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

        </div>
        <div className="pinned-comment">
            <button>Above</button>
            <div className="reply">
                <h5>replier name</h5>
                <p>sent time</p>
                <p>Reply</p>
                <button>Pin</button>
            </div>
            <button>Unpin Comment</button>
            <button>below</button>
        </div>
        <div className="threadheaderbar">
            <FontAwesomeIcon icon={faArrowLeft} />
            <h3>ThreadName/ComplaintName</h3>
        </div>
        <div className="thread">
            <h2>Threadname\complaintName</h2>
            <button>Join</button>
            <p>Start time from now</p>
            <p>HostedBY</p>
            <h5>HostName</h5>
            <div className="reply-box">
                <div className="reply1">
                    <h5>replier name</h5>
                    <p>sent time</p>
                    <p>Reply</p>
                    <button>Pin</button>
                </div>
                <div className="reply2">
                    <h5>replier name</h5>
                    <p>sent time</p>
                    <p>Reply</p>
                </div>
            </div>
            <div className="comment-box">
                <input type="text" placeholder="Enter your comment" />
                <button>Send</button>

            </div>
        </div>
        <div className="participant-box">
            <h1>Participants</h1>
            <h4>No.of joined</h4>
            <p>Participant1</p>
            <p>Participant2</p>
            <p>Participant3</p>

        </div>
    </>);

}
export default Thread_page;