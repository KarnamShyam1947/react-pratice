import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function All() {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const fRes = await fetch("http://localhost:3000/api/v1/products")
      const res = await fRes.json();
      console.log(res);
      setProducts(res);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <>
      <div className="products">
        <div className="tab-bar">
          <h3>Products</h3>
          <Link to={"/add"}>Add Products</Link>
        </div>
        <table border={2}>
          <thead>
            <tr>
              <th>SL. No.</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              products.map((value, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.name}</td>
                  <td>{value.price}</td>
                  <td>{value.description}</td>
                  <td>
                    <button>delete</button>
                    <button>edit</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default All

