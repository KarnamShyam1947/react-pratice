import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";

function Edit() {

  const { id } = useParams();

  const initialValues = {
    name: '',
    description: '',
    price: ''
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/products/${id}`);
      const result = await response.json();
      setFormValues(result);
    } catch (err) {
      console.error('Error fetching product details:', err);
    }
  };

  useEffect(() => {

    fetchProductDetails();
  }, []);

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
      const result = await editProduct();
      
      if(result.error) {
        alert(result.error);
      }
      else {
        alert(result.message);
        navigate("/all", { replace: true });
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

    if (isNaN(formValues.price)) {
      errors.price = 'Product price must be a number';
    }

    return errors;
  };

  const editProduct = async () => {
    const fetchRes = await fetch(`http://localhost:3000/api/v1/products/${id}`,
      {
        method: "PUT",
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
    <form onSubmit={handleFormSubmission}>
        <h1>Edit Product</h1>
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

          <input type="submit" value="Edit Product" />
        </div>
      </form>
  )
}

export default Edit
