import React, { useState } from 'react';
import TableComponent from './TableComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function DataPage() {
  function handleClick() {

  }
  function handleClick1() {

  }
  const [activeTable, setActiveTable] = useState(null);

  const handleButtonClick = (tableType) => {
    setActiveTable(tableType);
  };

  const studentData = [
    { rollno: 1, name: 'John Doe', email: 'john@example.com' },
    { rollno: 2, name: 'Jane Doe', email: 'jane@example.com' },
    // Add more student data as needed
  ];

  const facultyData = [
    { id: 1, name: 'Dr. Smith', email: 'smith@example.com' },
    { id: 2, name: 'Prof. Johnson', email: 'johnson@example.com' },
    // Add more faculty data as needed
  ];

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
    <div>
      <h1>Tables</h1>
      <button onClick={() => handleButtonClick('students')}>Students</button>
      <button onClick={() => handleButtonClick('faculty')}>Faculty</button>

      {activeTable === 'students' && <TableComponent data={studentData} />}
      {activeTable === 'faculty' && <TableComponent data={facultyData} />}
    </div>
  </>
  );
};

export default DataPage;
