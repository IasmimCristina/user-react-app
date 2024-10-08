import React from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";
import useFormData from "./hooks/useFormData";
import "./styles/App.css";

function App() {
  const { formData, setFormData, resetFormData, isFormFilled } = useFormData();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Information submitted! :D");
    resetFormData();
  };

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__form">
          <h1 className="app__title">Form</h1>
          <Form
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleFormSubmit}
          />
        </div>
        <Preview formData={formData} isFormFilled={isFormFilled} />
      </div>
    </div>
  );
}

export default App;
