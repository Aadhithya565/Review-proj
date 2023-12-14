import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    repeatEmail: '',
    password: '',
    repeatPassword: '',
    name: '',
    phone: '',
    street: '',
    city: '',
    country: '',
    website: 'http://',
    gender: '',
    birthdate: {
      day: '',
      month: '',
      year: '',
    },
    nationality: '',
    children: false,
    termsAndConditions: false,
    personalizedOffers: false,
    partnerOffers: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({ ...prevData, [name]: checked }));
    } else if (name === 'birthdate') {
      setFormData((prevData) => ({
        ...prevData,
        birthdate: { ...prevData.birthdate, [type]: value },
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="register">
      <h1>Registration</h1>
      <fieldset className="row1">
        <legend>Account Details</legend>
        <p>
          <label>Email *</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
          <label>Repeat email *</label>
          <input
            type="text"
            name="repeatEmail"
            value={formData.repeatEmail}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Password*</label>
          <input type="text" name="password" value={formData.password} onChange={handleChange} />
          <label>Repeat Password*</label>
          <input
            type="text"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChange}
          />
          <label className="obinfo">* obligatory fields</label>
        </p>
      </fieldset>
      <fieldset className="row2">
        <legend>Personal Details</legend>
        <p>
          <label>Name *</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </p>
        <p>
          <label>Phone *</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </p>
        <p>
          <label className="optional">Street</label>
          <input type="text" name="street" value={formData.street} onChange={handleChange} />
        </p>
        <p>
          <label>City *</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
        </p>
        <p>
          <label>Country *</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option></option>
            <option value="1">United States</option>
          </select>
        </p>
        <p>
          <label className="optional">Website</label>
          <input
            className="long"
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </p>
      </fieldset>
      <fieldset className="row3">
        <legend>Further Information</legend>
        <p>
          <label>Gender *</label>
          <input type="radio" name="gender" value="male" onChange={handleChange} />
          <label className="gender">Male</label>
          <input type="radio" name="gender" value="female" onChange={handleChange} />
          <label className="gender">Female</label>
        </p>
        <p>
          <label>Birthdate *</label>
          <select name="day" value={formData.birthdate.day} onChange={handleChange}>
            <option value="">Day</option>
            {/* Add day options */}
          </select>
          <select name="month" value={formData.birthdate.month} onChange={handleChange}>
            <option value="">Month</option>
            {/* Add month options */}
          </select>
          <input
            className="year"
            type="text"
            name="year"
            size="4"
            maxLength="4"
            placeholder="Year"
            value={formData.birthdate.year}
            onChange={handleChange}
          />
          (e.g., 1976)
        </p>
        <p>
          <label>Nationality *</label>
          <select name="nationality" value={formData.nationality} onChange={handleChange}>
            <option value=""></option>
            <option value="1">United States</option>
          </select>
        </p>
        
        
      </fieldset>
      <div>
        <button>Register
        </button>
      </div>
      
      
    </form>
  );
};

export default Login;