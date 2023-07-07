import React from "react";

const DeleteComponent = ({ id, nuevo, setNuevo }) => {
  const handleDelete = () => {
    fetch(`api/products/${id}`, {
      method: "delete",
    })
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("¡Éxito!:", response));
    setNuevo({ ...nuevo });
  };

  return (
    <>
      <button onClick={handleDelete}>Borrar</button>
    </>
  );
};

export default DeleteComponent;
