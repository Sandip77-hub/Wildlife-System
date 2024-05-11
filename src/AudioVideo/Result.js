import React from 'react';
import "./Result.css"

const Result = ({ result }) => {
  return (
    <div className="result-table">
      <h1 className='video-title'>Video Result</h1>
      {result.map((item, index) => (
        <div className='row' key={index}>
          <div className="cell key">{item[0]} sec:</div>
          <div className="cell value"><b>{item[1]}</b></div>
        </div>
      ))}
    </div>
  );
};

export default Result;
