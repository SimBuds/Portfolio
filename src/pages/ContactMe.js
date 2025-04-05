import React, { useState } from 'react';
import '../assets/styles/ContactMe.css';

function ContactMe() {
    const [formData, setFormData] = useState({
      email: '',
      message: '',
      name: ''
    });
    const [formStatus, setFormStatus] = useState({
      isLoading: false,
      success: false,
      error: null
    });
    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
      const errors = {};
      
      if (!formData.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email is invalid';
      }
      
      if (!formData.message) {
        errors.message = 'Message is required';
      } else if (formData.message.length < 10) {
        errors.message = 'Message should be at least 10 characters';
      }
      
      return errors;
    };

    const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      
      const errors = validateForm();
      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
      }
      
      setFormErrors({});
      setFormStatus({ isLoading: true, success: false, error: null });
      
      try {
        const response = await fetch('https://formspree.io/f/mbjezzwv', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (response.ok) {
          setFormStatus({ isLoading: false, success: true, error: null });
          setFormData({ email: '', message: '', name: '' });
          setTimeout(() => {
            setFormStatus(prev => ({ ...prev, success: false }));
          }, 5000);
        } else {
          const errorData = await response.json();
          setFormStatus({ 
            isLoading: false, 
            success: false, 
            error: errorData.message || 'Failed to send message. Please try again later.' 
          });
        }
      } catch (error) {
        console.error('Error sending email:', error);
        setFormStatus({ 
          isLoading: false, 
          success: false, 
          error: 'Network error. Please check your internet connection and try again.' 
        });
      }
    };

    return (
      <div className="contact-page">
        <h1>Feel free to reach out!</h1>
        
        {formStatus.success && (
          <div className="success-message">
            Thank you for your message! I'll get back to you soon.
          </div>
        )}
        
        {formStatus.error && (
          <div className="error-message">
            {formStatus.error}
          </div>
        )}
        
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="email@example.com"
                className={formErrors.email ? 'error-input' : ''}
              />
              {formErrors.email && <span className="error-text">{formErrors.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message:</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Type your message here..."
                className={formErrors.message ? 'error-input' : ''}
              />
              {formErrors.message && <span className="error-text">{formErrors.message}</span>}
            </div>
            
            <button 
              type="submit" 
              className="send-button" 
              disabled={formStatus.isLoading}
            >
              {formStatus.isLoading ? (
                <span>Sending... <span className="loading-dots"></span></span>
              ) : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    );
}

export default ContactMe;