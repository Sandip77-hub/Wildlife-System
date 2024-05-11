import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clickSound from './assets/audio.mp3';
import { FaRegCirclePlay } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const audioRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (audioRef.current && isRecording) {
      playSound();
    }
  }, [location.pathname, isRecording]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleSoundEnded = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
    }
  };

  const handleItemClick = () => {
    toggleMenu();
    setIsRecording(!isRecording);
    if (!isRecording) {
      playSound();
    } else {
      stopSound();
    }
  };

  return (
    <nav>
      <h1>Wildlife Surveillance</h1>
      <div className={`flex-container ${isOpen ? 'show' : ''}`}>
        <Link to="/" className='home-btn'>Home</Link>
        <Link to="/record" className='record-btn'>Record</Link>
        <Link to="/contact" className='contact-btn'>Contact</Link>
        
      </div>
      <div className="play-btn">
        <Link to='#' onClick={handleItemClick}><FaRegCirclePlay /></Link>
        <audio ref={audioRef} src={clickSound} onEnded={handleSoundEnded} />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`menu-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`menu-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`menu-line ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
