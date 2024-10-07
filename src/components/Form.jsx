import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Select from "./Select";
import RadioGroup from "./RadioGroup";
import Checkbox from "./Checkbox";

const Form = ({ formData, setFormData, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <Input
        label="Nome"
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
      />
      <Input
        label="Sobrenome"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      <TextArea
        label="Descrição da cidade"
        value={formData.cityDescription}
        onChange={(e) =>
          setFormData({ ...formData, cityDescription: e.target.value })
        }
      />
      <Select
        label="Estação Favorita"
        value={formData.favoriteSeason}
        onChange={(e) =>
          setFormData({ ...formData, favoriteSeason: e.target.value })
        }
      />
      <RadioGroup
        label="Sopa é Janta?"
        options={["Sim", "Não"]}
        selected={formData.soupIsDinner}
        onChange={(value) => setFormData({ ...formData, soupIsDinner: value })}
      />
      <Checkbox
        label="Aceito os termos"
        checked={formData.termsAccepted}
        onChange={(e) =>
          setFormData({ ...formData, termsAccepted: e.target.checked })
        }
      />
      <button type="submit">Submeter</button>
    </form>
  );
};

export default Form;
