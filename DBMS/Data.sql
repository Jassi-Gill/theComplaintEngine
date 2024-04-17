-- Student Table
INSERT INTO Student (stuId, stuName, emailId, stuDepartment, stuGender, stuBatch, roomNo) 
VALUES 
(1, 'John Doe', 'john@example.com', 'Computer Science' , 'Male', 'Batch 1', 'C101'),
(2, 'Jane Smith', 'jane@example.com', 'Electrical Engineering' , 'Female', 'Batch 1', 'E201'),
(3, 'Alice Johnson', 'alice@example.com', 'Mechanical Engineering' , 'Male', 'Batch 1', 'M301'),
(4, 'Bob Brown', 'bob@example.com', 'Computer Science' , 'Male', 'Batch 1', 'C102'),
(5, 'Emily Davis', 'emily@example.com', 'Electrical Engineering' , 'Female', 'Batch 1', 'E202'),
(6, 'Michael Wilson', 'michael@example.com', 'Mechanical Engineering' , 'Male', 'Batch 1', 'M302'),
(7, 'David Jones', 'david@example.com', 'Computer Science' , 'Male', 'Batch 1', 'C103'),
(8, 'Sarah Miller', 'sarah@example.com', 'Electrical Engineering' , 'Female', 'Batch 1', 'E203'),
(9, 'Emma Wilson', 'emma@example.com', 'Mechanical Engineering,', 'Male', 'Batch 1', 'M303'),
(10, 'Ryan Taylor', 'ryan@example.com', 'Computer Science' , 'Male', 'Batch 1', 'C104'), 
(11, 'Daniel Harris', 'daniel@example.com', 'Computer Science,', 'Male', 'Batch 2', 'C105'),
(12, 'Sophia Anderson', 'sophia@example.com', 'Electrical Engineering' , 'Female', 'Batch 2', 'E204'),
(13, 'William Martinez', 'william@example.com', 'Mechanical Engineering' , 'Male', 'Batch 2', 'M304'),
(14, 'Olivia Wilson', 'olivia@example.com', 'Computer Science' , 'Male', 'Batch 2', 'C106'),
(15, 'James Taylor', 'james@example.com', 'Electrical Engineering' , 'Female', 'Batch 2', 'E205'),
(16, 'Ethan Moore', 'ethan@example.com', 'Mechanical Engineering' , 'Male', 'Batch 2', 'M305'),
(17, 'Ava Garcia', 'ava@example.com', 'Computer Science' , 'Male', 'Batch 2', 'C107'),
(18, 'Mia Lopez', 'mia@example.com', 'Electrical Engineering' , 'Female', 'Batch 2', 'E206'),
(19, 'Alexander Lee', 'alexander@example.com', 'Mechanical Engineering' , 'Male', 'Batch 2', 'M306');



-- StuMobile
INSERT INTO StuMobile (stuId, stuMobileNo)
VALUES
(1, 8234567890),
(2, 9876543210),
(3, 8959565455),
(4, 7131245781),
(4, 8134654762),
(5, 6245612456),
(6, 7345613455),
(7, 8465416515),
(7, 9461547654),
(8, 6645454745),
(9, 8771687118),
(10, 8541465414),
(11, 9234432121),
(12, 9876654321),
(13, 8555775677),
(14, 7234432109),
(15, 6333246522),
(16, 6333456644),
(17, 8544165146),
(18, 9666845688),
(18, 8544656555),
(19, 9777555555);


-- WorkersDepartment
INSERT INTO WorkerDepartment (dId, dName, dLocation, dEmail, dHead)
VALUES
('CS', 'Computer Science', 'Building A', 'cs@example.com', 'Dr. Smith'),
('EE', 'Electrical Engineering', 'Building B', 'ee@example.com', 'Prof. Johnson'),
('ME', 'Mechanical Engineering', 'Building C', 'me@example.com', 'Dr. Brown');


-- Worker
INSERT INTO Worker (workerId, workerName, dId, workerDesig)
VALUES
('W001', 'Mark Johnson', 'CS', 'Software Engineer'),
('W002', 'Emily Smith', 'EE', 'Electrical Technician'),
('W003', 'Michael Davis', 'ME', 'Mechanical Engineer'),
('W004', 'Jessica White', 'CS', 'Web Developer'),
('W005', 'William Brown', 'EE', 'Electrical Engineer'),
('W006', 'Sophia Wilson', 'ME', 'Mechanical Technician'),
('W007', 'Andrew Miller', 'CS', 'Software Developer'),
('W008', 'Olivia Jones', 'EE', 'Electrical Designer'),
('W009', 'Noah Taylor', 'ME', 'Mechanical Supervisor'),
('W010', 'Isabella Davis', 'CS', 'Systems Analyst');


-- WorkerMobile
INSERT INTO WorkerMobile (workerId, workerMobileNo)
VALUES
('W001', 9145465451),
('W002', 8456445652),
('W003', 7354654453),
('W003', 8389785543),
('W004', 6789465464),
('W005', 7877124545),
('W006', 9786546556),
('W007', 6879545564),
('W008', 8456655644),
('W008', 8478784645),
('W009', 9456456465),
('W010', 7564565454);


-- Faculty
INSERT INTO Faculty (facId, facName, facEmail, facDesig)
VALUES
('F001', 'Dr. Michael Brown', 'michael@example.com', 'Professor'),
('F002', 'Prof. Sarah Davis', 'sarah@example.com', 'Associate Professor'),
('F003', 'Dr. Emily Wilson', 'emily@example.com', 'Professor'),
('F004', 'Prof. Matthew Johnson', 'matthew@example.com', 'Assistant Professor'),
('F005', 'Dr. Olivia Smith', 'olivia@example.com', 'Professor'),
('F006', 'Prof. Ethan Miller', 'ethan@example.com', 'Associate Professor'),
('F007', 'Dr. Ava Wilson', 'ava@example.com', 'Professor'),
('F008', 'Prof. Jacob Brown', 'jacob@example.com', 'Assistant Professor'),
('F009', 'Dr. Mia Jones', 'mia@example.com', 'Professor'),
('F010', 'Prof. William Davis', 'william@example.com', 'Associate Professor');


-- FacultyMobile
INSERT INTO FacMobile (facId, facMobileNo)
VALUES
('F001', 9564646544),
('F002', 9454664454),
('F003', 7465748415),
('F004', 9687945656),
('F005', 8879879741),
('F006', 8879456522),
('F007', 7878978564),
('F008', 6086787879),
('F009', 7879451223),
('F010', 9387978456);


-- OngoingWorks
INSERT INTO OngoingWorks (cId, iniDate, expCompDate)
VALUES
(1, '2024-04-01', '2024-04-15'),
(2, '2024-04-10', '2024-04-30'),
(3, '2024-05-05', '2024-05-20'),
(4, '2024-05-15', '2024-06-01'),
(5, '2024-06-01', '2024-06-15'),
(6, '2024-06-10', '2024-06-30'),
(7, '2024-07-01', '2024-07-15'),
(8, '2024-07-10', '2024-07-31'),
(9, '2024-08-01', '2024-08-15'),
(10, '2024-08-10', '2024-08-31');


-- OngoingWorksWorker
INSERT INTO OngoingWorksWorker (cId, workerId)
VALUES
(1, 'W001'),
(2, 'W002'),
(3, 'W003'),
(4, 'W004'),
(5, 'W005'),
(6, 'W006'),
(7, 'W007'),
(8, 'W008'),
(9, 'W009'),
(10, 'W010');


-- OngoingWorksStudent
INSERT INTO OngoingWorksStudent (cId, stuId)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);


-- OngoingWorksFaculty
INSERT INTO OngoingWorksFaculty (cId, facId) VALUES
(1, 'F001'),
(2, 'F002'),
(3, 'F003'),
(4, 'F004'),
(5, 'F005'),
(6, 'F006'),
(7, 'F007'),
(8, 'F008'),
(9, 'F009'),
(10, 'F010');


-- Insert data into SuperAdmin table
INSERT INTO SuperAdmin (adUserName, adName, adEmail, adLocation) VALUES
('Admin1', 'Jassi', 'admin1@example.com', 'R12'),
('Admin2', 'Kunsh', 'admin2@example.com', 'R05'),
('Admin3', 'Ankur', 'admin3@example.com', 'R33');


-- Insert data into SupAdmMobileNo table
INSERT INTO SupAdmMobileNo (adUserName, supAdMobileNo) VALUES
('Admin1', 7889745452),
('Admin2', 9345678901),
('Admin3', 8456789012);


-- Insert data into FiledComplaint table
INSERT INTO FiledComplaint (complainId, stuId, cDesc, dId) VALUES
(1, 1, 'Issue with network connectivity', 'CS'),
(2, 2, 'Problem with lab equipment', 'EE'),
(3, 3, 'Complaint regarding research project', 'ME'),
(4, 4, 'Marketing strategy complaint', 'ME'),
(5, 5, 'Financial data discrepancy', 'EE'),
(6, 6, 'HR policy concern', 'CS'),
(7, 7, 'Operations workflow issue', 'ME'),
(8, 8, 'Legal contract dispute', 'EE'),
(9, 9, 'Sales performance complaint', 'CS'),
(10, 10, 'Customer service feedback', 'CS');


-- Insert data into Thread table
INSERT INTO Thread (cId, reply) VALUES
(1, 'Investigating the network issue'),
(2, 'Technician assigned to fix lab equipment'),
(3, 'Research project review scheduled'),
(4, 'Marketing team meeting scheduled'),
(5, 'Financial analysis in progress'),
(6, 'HR policy under review'),
(7, 'Operations process optimization underway'),
(8, 'Legal consultation scheduled'),
(9, 'Sales strategy discussion'),
(10, 'Customer service training session scheduled');


SELECT * FROM Student;

SELECT * FROM StuMobile;

SELECT * FROM WorkerDepartment;

SELECT * FROM Worker;

SELECT * FROM WorkerMobile;

SELECT * FROM Faculty;

SELECT * FROM FacMobile;

SELECT * FROM OngoingWorks;

SELECT * FROM OngoingWorksWorker;

SELECT * FROM OngoingWorksStudent;

SELECT * FROM OngoingWorksFaculty;

SELECT * FROM SuperAdmin;

SELECT * FROM SupAdmMobileNo;

SELECT * FROM FiledComplaint;

SELECT * FROM Thread;
