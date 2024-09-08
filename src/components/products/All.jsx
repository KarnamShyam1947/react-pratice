import React from 'react'
import { Link } from 'react-router-dom'

function All() {
  return (
    <>
      <div className="products">
        <div className="tab-bar">
          <h3>Products</h3>
          <Link to={"/add"}>Add Products</Link>
        </div>
        <table border={2}>
          <tr>
            <th>SL. No.</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Product1</td>
            <td>120</td>
            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptatem!</td>
            <td>
              <button>delete</button>
              <button>edit</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Product2</td>
            <td>120</td>
            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptatem!</td>
            <td>
              <button>delete</button>
              <button>edit</button>
            </td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default All