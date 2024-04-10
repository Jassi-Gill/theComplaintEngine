import React from 'react';

function TableComponent({ data }) {
  // Extract keys from the first item in the data array
  const keys = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <table>
      <thead>
        <tr>
          {/* Render table headers dynamically based on keys */}
          {keys.map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Render table data dynamically */}
        {data.map((item, index) => (
          <tr key={index}>
            {keys.map((key) => (
              <td key={key}>{item[key]}</td>
            ))}
            <td className="action-buttons">
              {/* Edit and Delete buttons */}
              <button className="edit-button">Edit</button>
              <button className="delete-button">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableComponent;
