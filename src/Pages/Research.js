import React, { useEffect, useState } from 'react';
import './Research.css';

const Research = () => {
    const [text, setText] = useState('');
    const paragraph = "Wildlife around the world is in decline primarily due to the loss of habitat as well as the intersection of territory between humans and wild animals. Manual recognition of animals can be more accurate but will require exponentially greater resources both in terms of capital and labor making it unfeasible in large-scale deployment, especially for a country like Nepal. We have developed a system for the recognition and classification of Wild Animals using Deep Convolutional Neural Network architecture to aid conservation as well as study of our ecological system. We used iNaturalist as our source for image data and Xeno-canto.org as the source for audio data.";

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= paragraph.length) {
                setText(paragraph.substring(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 25);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='research-container'>
            <div className="research">
                <h3 className='research-title'> Research</h3>
                <p className='research-info'>{text}</p>
                </div>
                <div>
                    <img className='search-img' src='./images/cartoon.jpg' alt='search-img'/>
                </div>
           
        </div>
    );
};

export default Research;