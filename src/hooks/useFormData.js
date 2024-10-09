import { useState } from "react";

const useFormData = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    cityDescription: "",
    favoriteSeason: "",
    soupIsDinner: "",
    areTermsAccepted: false,
  });

  const resetFormData = () => {
    setFormData({
      firstName: "",
      lastName: "",
      cityDescription: "",
      favoriteSeason: "",
      soupIsDinner: "",
      areTermsAccepted: false,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Information submitted! :D");
    resetFormData();
  };

  const isAnyFieldFilled = () => {
    const {
      firstName,
      lastName,
      cityDescription,
      favoriteSeason,
      soupIsDinner,
      areTermsAccepted,
    } = formData;
    return (
      firstName ||
      lastName ||
      cityDescription ||
      favoriteSeason ||
      soupIsDinner ||
      areTermsAccepted
    );
  };

  return {
    formData,
    setFormData,
    handleFormSubmit,
    isAnyFieldFilled,
  };
};

export default useFormData;
