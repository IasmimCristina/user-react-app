import { useState } from "react";

const useFormData = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    cityDescription: "",
    favoriteSeason: "",
    soupIsDinner: "",
    termsAccepted: false,
  });

  const resetFormData = () => {
    setFormData({
      firstName: "",
      lastName: "",
      cityDescription: "",
      favoriteSeason: "",
      soupIsDinner: "",
      termsAccepted: false,
    });
  };

  return {
    formData,
    setFormData,
    resetFormData,
  };
};

export default useFormData;
