import React, { useState } from 'react'

function Add() {

  var initialValues = {
    name: "",
    description: "",
    price: ""
  }

  const [formValues, setFormValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name] : value
    })

  }

  const handleFormSubmission = (e) => {
    e.preventDefault();
    
    console.log(formValues);
    alert("form submitted");

    setFormValues(initialValues);
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
          />

          <input 
            type="text" 
            name="price" 
            value={formValues.price}
            onChange={handleInputChange}
            placeholder="Enter product price" 
          />

          <textarea 
            name="description" 
            value={formValues.description}
            onChange={handleInputChange}
            placeholder='Enter description'
          ></textarea>
          <input type="submit" value="Add Product" />
        </div>
      </form>
    </>
  )
}

export default Add