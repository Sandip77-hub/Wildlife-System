import React, { useState } from "react";
import Navbar from "../components/Navbar";
import './Contact.css';
import axios from 'axios';
import { FaFacebook, FaGithub, FaTwitterSquare } from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/submit-form', formData);
            console.log(response.data);
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <><><Navbar/></>
            <div>
                <div className="contact-container">
                    <div className="feedback-form">
                        <h3 className="feedback-title">Feedback and Inquiries</h3>
                        <form onSubmit={handleSubmit} className="form-content">
                            <label>Full Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} />
                            <label>Email:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} />
                            <label>Message:</label>
                            <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
                            <br />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <div className="contact-info">
                    <div>
                        <h3>Contact Information</h3>
                        <p>Wildlife Recognition & Surveillance System</p>
                        <p>Dream Wildlife Conservation,Nepal</p>
                        <p>Phone: +977-9803515245</p>
                        <p>Email: info@wildlife.com</p>
                    </div>
                    <div>
                        <h3>Support Channels</h3>
                        <p>Email: supportwildlife@gmail.com</p>
                        <p>Phone:+011-8596224</p>
                        <p>Online Chat Support: Visit our website</p>

                    </div>
                    <div>
                        <h3>Developers</h3>
                        <p>Sandip Pariyar</p>
                       <p>Zishan Siddique</p>
                       <p>Venus Bastola</p>
                       <p>Sushant Phagu</p>
                    </div>
                    </div>

                </div>
                <div>
                    <footer>
                        <FaFacebook className="facebook-icon" />
                        <FaGithub className="github-icon" />
                        <FaTwitterSquare className="twitter-icon" />
                    </footer>
                </div>
            </div>
        </>
    );
}