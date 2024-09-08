import React from 'react'
import { useParams } from "react-router-dom";

function Edit() {

  const params = useParams();

  return (
    <h1>Edit Page for id : {params.id}</h1>
  )
}

export default Edit