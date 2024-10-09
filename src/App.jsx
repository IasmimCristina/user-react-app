import React from "react";
import { Form } from "./components/Form";
import { Preview } from "./components/Preview";
import useFormData from "./hooks/useFormData";
import "./styles/App.css";

function App() {
  const { formData, setFormData, handleFormSubmit, isAnyFieldFilled } =
    useFormData();

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
        <Preview formData={formData} isAnyFieldFilled={isAnyFieldFilled} />
      </div>
    </div>
  );
}

export default App;
