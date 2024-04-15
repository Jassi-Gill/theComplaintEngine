document.addEventListener("DOMContentLoaded", function () {
    // Example statistics data
    const statistics = {
        totalWorkers: 150,
        totalStudents: 500,
        totalFaculties: 50
    };

    // Complaint types data
    const complaintTypes = [
        { name: "Electrical", link: "https://example.com/electrical" },
        { name: "Plumbing", link: "https://example.com/plumbing" },
        { name: "Mess", link: "https://example.com/mess" }
        // Add more complaint types as needed
    ];

    // Update statistics
    document.getElementById("total-workers").textContent = statistics.totalWorkers;
    document.getElementById("total-students").textContent = statistics.totalStudents;
    document.getElementById("total-faculties").textContent = statistics.totalFaculties;

    // Populate complaint types list
    const complaintsList = document.getElementById("complaints-list");
    complaintTypes.forEach(complaint => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = complaint.name;
        link.href = complaint.link;
        listItem.appendChild(link);
        complaintsList.appendChild(listItem);
    });
});
