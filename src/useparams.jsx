
import React from "react";
import { useParams } from "react-router-dom";

function Func() {
  const { id } = useParams();

  return (
    <div>
      <h2>Visit Product Details</h2>
      <p>Details for Product ID: {id}</p>
    </div>
  );
}

export default Func;
