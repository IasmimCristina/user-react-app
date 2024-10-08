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

  const isFormFilled = () => {
    return (
      formData.firstName ||
      formData.lastName ||
      formData.cityDescription ||
      formData.favoriteSeason ||
      formData.soupIsDinner ||
      formData.areTermsAccepted
    );
  };

  return {
    formData,
    setFormData,
    resetFormData,
    isFormFilled,
  };
};

export default useFormData;
