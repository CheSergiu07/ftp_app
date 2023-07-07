import React from 'react';
import FileUploadComponent from './components/FileUploadComponent';
import FileDownloadComponent from './components/FileDownloadComponent';
import StatusComponent from './components/StatusComponent';

function App() {
    return (
        <div>
            <h1>FTP App</h1>
            <FileUploadComponent />
            <FileDownloadComponent />
            <StatusComponent />
        </div>
    );
}

export default App;
