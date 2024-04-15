function DataPage() {
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
  
    const app = document.getElementById('app');
  
    const div = document.createElement('div');
    div.classList.add('Navbar');
    div.innerHTML = `
      <button onclick="handleClick1()" id="home" class="icons">
        <i class="fas fa-home"></i>
      </button>
      <div>
        <input type="text" placeholder="Search for Topics" id="search-box" />
        <button>Search</button>
      </div>
      <button onclick="handleClick()" id="profile" class="icons">
        <i class="fas fa-user"></i>
      </button>
      <p></p>
    `;
    app.appendChild(div);
  
    const h1 = document.createElement('h1');
    h1.textContent = 'Tables';
    app.appendChild(h1);
  
    const studentsButton = document.createElement('button');
    studentsButton.textContent = 'Students';
    studentsButton.onclick = () => handleButtonClick('students');
    app.appendChild(studentsButton);
  
    const facultyButton = document.createElement('button');
    facultyButton.textContent = 'Faculty';
    facultyButton.onclick = () => handleButtonClick('faculty');
    app.appendChild(facultyButton);
  
    const handleClick = () => {
      // Add your handleClick logic here
    };
    
    const handleClick1 = () => {
      // Add your handleClick1 logic here
    };
  
    const handleButtonClick = (tableType) => {
      clearTable();
      if (tableType === 'students') {
        renderTable(studentData);
      } else if (tableType === 'faculty') {
        renderTable(facultyData);
      }
    };
  
    const renderTable = (data) => {
      const table = document.createElement('table');
      const thead = document.createElement('thead');
      const tbody = document.createElement('tbody');
  
      const keys = Object.keys(data[0]);
  
      const headerRow = document.createElement('tr');
      keys.forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
  
      data.forEach(item => {
        const tr = document.createElement('tr');
        tr.classList.add('table-row');
        keys.forEach(key => {
          const td = document.createElement('td');
          td.textContent = item[key];
          tr.appendChild(td);
        });
        const td = document.createElement('td');
        td.classList.add('action-buttons');
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-button');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-button');
        td.appendChild(editBtn);
        td.appendChild(deleteBtn);
        tr.appendChild(td);
        tbody.appendChild(tr);
      });
  
      table.appendChild(thead);
      table.appendChild(tbody);
      app.appendChild(table);
    };
  
    const clearTable = () => {
      const table = app.querySelector('table');
      if (table) {
        table.remove();
      }
    };
  }
  
  DataPage();
  