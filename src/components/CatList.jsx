import React, { useState } from "react";
// Example used in the first blog post topic: What React is not
const CatList = () => {
  const [cats, setCats] = useState([]);
  const [catInput, setCatInput] = useState("");

  const addCat = () => {
    if (catInput.trim() !== "") {
      setCats([...cats, { name: catInput, id: Date.now() }]);
      setCatInput("");
    }
  };

  return (
    <div>
      <input
        value={catInput}
        onChange={(e) => setCatInput(e.target.value)}
        placeholder="Add a cat"
      />
      <button onClick={addCat}>Add Cat</button>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CatList;
