import React, { useState } from "react";

const UpdateComponent = ({ input, nuevo, setNuevo, setInput }) => {
  const [idInput, setIdInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `api/products/${idInput}`;
    fetch(url, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("¡Éxito!:", response));
    setNuevo({ ...nuevo });
    setIdInput("");
    setInput({ [e.target.name]: "" });
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setIdInput(e.target.value);
  };

  return (
    <>
      <form>
        <label>¿Quiere modificar un producto? Ingrese el Id: </label>
        <input
          value={idInput}
          onChange={handleSearch}
          type="number"
          name="id"
          placeholder="Id"
        />
        <button onClick={handleSubmit}>Actualizar Producto</button>
      </form>
    </>
  );
};

export default UpdateComponent;
