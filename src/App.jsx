import React, { useState } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    cityDescription: "",
    favoriteSeason: "",
    soupIsDinner: "",
    termsAccepted: false,
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Informações enviadas");
    setFormData({
      firstName: "",
      lastName: "",
      cityDescription: "",
      favoriteSeason: "",
      soupIsDinner: "",
      termsAccepted: false,
    });
  };

  return (
    <div>
      <h1>Formulário</h1>
      <Form
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleFormSubmit}
      />
      <Preview formData={formData} />
    </div>
  );
}

export default App;
