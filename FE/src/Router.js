import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './pages/HomePage';
import PageNotFound from './pages/NotFound';
import AllFiles from './pages/AllFiles';
import FilesUpload from './pages/UploadFile';

const RouterContent = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/files" element={<AllFiles />} />
            <Route path="/files/upload" element={<FilesUpload />} />
            <Route path="*" element={<PageNotFound></PageNotFound>} />
        </Routes>
    </Router>
);

export default RouterContent;