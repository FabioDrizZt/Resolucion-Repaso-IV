import React from "react";

const PostComponent = ({ nuevo, setNuevo, input, setInput }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("api/products", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("¡Éxito!:", response));
    setNuevo({ ...nuevo });
    setInput({ [e.target.name]: "" });
  };

  return (
    <>
      <button onClick={handleSubmit}> Crear Producto </button>
    </>
  );
};

export default PostComponent;
