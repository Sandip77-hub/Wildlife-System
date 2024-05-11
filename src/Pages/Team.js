import React from 'react';
import './Team.css';
import { FaFacebook, FaGithub } from 'react-icons/fa';

const Team = () => {
  return (
    <div>
      <h1 className='team-title'>Team Members</h1>
      <div className='team-card-container'>
        <div className='card-team'>
          <img className='team-card-img' src='./images/sandip.jpg' alt='sandip' />
          <div className='team-card-body'>
          <p>Sandip Pariyar</p>
          <a href='https://www.facebook.com/profile.php?id=100004799268317&mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'>
            <FaFacebook className='face-book'/>
          </a>
          <a href='https://github.com/Sandip77-hub' target='_blank' rel='noopener noreferrer'>
            <FaGithub className='git-hub'/>
          </a>
          </div>
        </div>
        <div className='card-team'>
          <img className='team-card-img' src='./images/zishan.jpg' alt='zishan' />
          <div className='team-card-body'>
          <p>Zishan Siddique</p>
          <a href='https://www.facebook.com/zishansiddique80?mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'>
            <FaFacebook className='face-book'/>
          </a>
          <a href='https://l.facebook.com/l.php?u=https%3A%2F%2Fgithub.com%2Fkaagaj-bottle%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR1jIwK1Ey82IaLdruUBxz6lyOhmK2o5Cpyb-oVGE6mhZB2ogcc1jZOXlEQ_aem_AQkh4Jy0iRDDIQEzMEeZEPf3IiJa0Z1H5LrP8pkGcztXF8EpqDAv0Z0XQTRRCQdcXTZIE_Ib2R4Ea6cO3eNleSVi&h=AT2jhENdBD4RhCQFZDmvTpnA3omAnI-5cR1R5juchuDzhPj3NWX0ef1N2ldXaEnl4VlN4AgcX6Y0-RPsmTlm-w_NcaLD7GUp9II3hRvwuScI4N3nP5Bfh0BIxd_EWQ' target='_blank' rel='noopener noreferrer'>
            <FaGithub className='git-hub'/>
          </a>
          </div>
        </div>
        <div className='card-team'>
          <img className='team-card-img' src='./images/venus.jpg' alt='venus' />
          <div className='team-card-body'>
          <p>Venus Bastola</p>
          <a href='https://www.facebook.com/Venusbastola56?mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'>
            <FaFacebook className='face-book'/>
          </a>
          <a href='https://github.com/venusbastola12' target='_blank' rel='noopener noreferrer'>
            <FaGithub className='git-hub'/>
          </a>
          </div>
        </div>
        <div className='card-team'>
          <img className='team-card-img' src='./images/sushant.jpg' alt='sushant' />
          <div className='team-card-body'>
          <p>Sushant Phagu</p>
          <a href='https://www.facebook.com/sushant.phago?mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'>
            <FaFacebook className='face-book'/>
          </a>
          <a href='https://github.com/' target='_blank' rel='noopener noreferrer'>
            <FaGithub className='git-hub'/>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
