import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Student from './Student';
import Faculty from './Faculty';
import Worker from './Worker';
import Admin from './Admin';

function App18() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Student />} />
                <Route path="/Admin" element={<Admin />} />
                <Route path="/Faculty" element={<Faculty />} />
                <Route path="/Worker" element={<Worker />} />
                {/* Specify what should be rendered for the root URL ("/") */}
                <Route path="/" element={<Student />} />
                {/* <Route path="/" element={<Dashboard />} /> */}
            </Routes>
        </Router>
    );
}

export default App18;
