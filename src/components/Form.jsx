import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Select from "./Select";
import RadioGroup from "./RadioGroup";
import Checkbox from "./Checkbox";
import "./Form.css";

const Form = ({ formData, setFormData, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="form">
      <Input
        label="First name"
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
      />
      <Input
        label="Last name"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      <TextArea
        label="City description"
        value={formData.cityDescription}
        onChange={(e) =>
          setFormData({ ...formData, cityDescription: e.target.value })
        }
      />
      <Select
        label="Favorite season"
        value={formData.favoriteSeason}
        onChange={(e) =>
          setFormData({ ...formData, favoriteSeason: e.target.value })
        }
      />
      <RadioGroup
        label="Is soup dinner?"
        options={["Yes", "No"]}
        selected={formData.soupIsDinner}
        onChange={(value) => setFormData({ ...formData, soupIsDinner: value })}
      />
      <div className="form__button-checkbox--group">
        <Checkbox
          label="I accept the terms"
          checked={formData.areTermsAccepted}
          onChange={(e) =>
            setFormData({ ...formData, areTermsAccepted: e.target.checked })
          }
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
