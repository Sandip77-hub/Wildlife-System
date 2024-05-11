import React, { useState } from 'react';
import Result from './Result';

const ShowResult = () => {
  const [result, setResult] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [videoKey, setVideoKey] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setVideoKey((prevKey) => prevKey + 1);
    setResult([]);
  };
  
  const handleUpload = async () => {
    if (!selectedFile) {
      console.error('No file selected.');
      return;
    }
  
    const formData = new FormData();
    formData.append('video', selectedFile);
  
    try {
      const response = await fetch('http://localhost:5200/api/v1/output/video', {
        method: 'POST',
        body: formData,
      });
      const responseData = await response.json();
      console.log('Upload response:', responseData); // Debugging
      setResult(responseData.data.finalData);
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <div className='upload-image'>
      <div>
        <input type="file" onChange={handleFileChange} accept="video/*" />
        <button onClick={handleUpload}>Upload</button>
      </div>
      {selectedFile && (
        <div>
          <h3>Selected Video:</h3>
          <video key={videoKey} controls width="400">
            <source src={URL.createObjectURL(selectedFile)} type={selectedFile.type} />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <h2 className='display-item'>Display Result</h2>
      {result.length > 0 && (
        <div>
          <Result result={result} />
        </div>
      )}
    </div>
  );
};

export default ShowResult;