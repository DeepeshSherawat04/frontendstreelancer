import React, { useState } from 'react';
import { toast } from "react-toastify";
import Backendurl from "../../../config"; 

const ContactForm = () => {



  const [formData, setFormData] = useState({
    company: '',
    name: '',
     phone: '',
    email: '',
    regions: [],
    workModel: 'Full time remote',
    country: 'Your country',
    teamSize: 15,
    requirements: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    let updatedRegions = [...formData.regions];
    if (checked) {
      updatedRegions.push(value);
    } else {
      updatedRegions = updatedRegions.filter((region) => region !== value);
    }
    setFormData({ ...formData, regions: updatedRegions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${Backendurl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
    
         toast.success( "Inquiry submitted successfully!");
        // Optionally reset form
        setFormData({
          company: '',
          name: '',
          email: '',
          regions: [],
          workModel: 'Full time remote',
          country: 'Your country',
          teamSize: 15,
          requirements: '',
        });
      } else {
       
         toast.error( "Submission failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert('Error submitting the form.');
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="global-header">
        <h2>Ready to Build Your Global Team?</h2>
        <p>
          Connect with our team to discuss your global talent needs and discover how our flexible
          workforce solutions can help your business thrive across borders.
        </p>
      </div>

      <div className="global-formbox">
        <h3>Contact Us</h3>
        <form className="global-form" onSubmit={handleSubmit}>
          <label htmlFor="company">Company Name</label>
          <input type="text" id="company" value={formData.company} onChange={handleChange} />

         <div className="global-formrow">
  <div>
    <label htmlFor="name">Your Name</label>
    <input type="text" id="name" value={formData.name} onChange={handleChange} />
  </div>
  <div>
    <label htmlFor="email">Email Address</label>
    <input type="email" id="email" value={formData.email} onChange={handleChange} />
  </div>
  <div>
    <label htmlFor="phone">Phone Number</label>
    <input type="tel" id="phone" value={formData.phone} onChange={handleChange} />
  </div>
</div>


          <div className="checkbox-section">
            <label>Regions of Interest</label>
            <div className="checkbox-container">
              <div>
                <label><input type="checkbox" value="Technology" onChange={handleCheckbox} checked={formData.regions.includes("Technology")} /> Technology</label>
                <label><input type="checkbox" value="Healthcare" onChange={handleCheckbox} checked={formData.regions.includes("Healthcare")} /> Healthcare</label>
              </div>
              <div>
                <label><input type="checkbox" value="Finance & Banking" onChange={handleCheckbox} checked={formData.regions.includes("Finance & Banking")} /> Finance & Banking</label>
                <label><input type="checkbox" value="Education" onChange={handleCheckbox}  checked={formData.regions.includes("Education")}/> Education</label>
              </div>
            </div>
          </div>

          <div className="global-formrow">
            <div>
              <label htmlFor="workModel">Preferred Work Model</label>
              <select id="workModel" value={formData.workModel} onChange={handleChange}>
                <option>Full time remote</option>
                <option>Part time</option>
                <option>On-site</option>
              </select>
            </div>
            <div>
              <label htmlFor="country">Select Country</label>
              <select id="country" value={formData.country} onChange={handleChange}>
                <option>Your country</option>
                <option>India</option>
                <option>USA</option>
              </select>
            </div>
          </div>

          <label htmlFor="teamSize" className="slider-label">Team Size Needed</label>
          <input
            type="range"
            min="1"
            max="50"
            value={formData.teamSize}
            onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
            id="teamSize"
          />

          <div className="slider-numbers">
            <span>1</span>
            <span>10</span>
            <span>20</span>
            <span>30</span>
            <span>50</span>
          </div>

          <p>{formData.teamSize} Team members</p>

          <label htmlFor="requirements">Additional Requirements</label>
          <textarea
            id="requirements"
            rows="4"
            value={formData.requirements}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Submit Inquiry</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
