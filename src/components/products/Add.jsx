import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Add() {
  const initialValues = {
    name: '',
    description: '',
    price: ''
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    
    const errors = validateInput();
    
    if (Object.keys(errors).length === 0) {
      const result = await addProduct();
      
      if(result.error) {
        alert(result.error);
      }
      else {
        alert(result.message);
        navigate("/all");
      }

    } else {
      setError(errors);
      alert('Form has errors');
    }
  };

  const validateInput = () => {
    const errors = {};

    if (formValues.name.trim() === '') {
      errors.name = 'Product Name is required';
    }

    if (formValues.description.trim() === '') {
      errors.description = 'Product description is required';
    }

    if (formValues.price.trim() === '') {
      errors.price = 'Product price is required';
    } else if (isNaN(formValues.price)) {
      errors.price = 'Product price must be a number';
    }

    return errors;
  };

  const addProduct = async () => {
    const fetchRes = await fetch("http://localhost:3000/api/v1/products",
      {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    const result = await fetchRes.json();
    
    return result;
  }

  return (
    <>
      <form onSubmit={handleFormSubmission}>
        <h1>Add Product</h1>
        <div className="inputs">
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            placeholder="Enter product name"
            className={error.name ? "error-field" : ""}
          />
          {
            error.name && 
            <span className="error">{error.name}</span>
          }

          <input
            type="text"
            name="price"
            value={formValues.price}
            onChange={handleInputChange}
            placeholder="Enter product price"
            className={error.price ? "error-field" : ""}
          />
          {
            error.price && 
            <span className="error">{error.price}</span>
          }

          <textarea
            name="description"
            value={formValues.description}
            onChange={handleInputChange}
            placeholder="Enter description"
            className={error.description ? "error-field" : ""}
          ></textarea>
          {
            error.description && 
            <span className="error">{error.description}</span>
          }

          <input type="submit" value="Add Product" />
        </div>
      </form>
    </>
  );
}

export default Add;
