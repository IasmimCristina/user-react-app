import React from "react";

const seasons = [
  { value: "verão", color: "lightyellow" },
  { value: "outono", color: "sandybrown" },
  { value: "inverno", color: "lightblue" },
  { value: "primavera", color: "lightpink" },
];

const Preview = ({ formData }) => {
  const { favoriteSeason } = formData;

  // Encontrar a cor da estação favorita
  const favoriteSeasonColor = seasons.find(
    (season) => season.value === favoriteSeason.toLowerCase()
  )?.color || "gray";

  return (
    <div
      style={{
        border: `2px solid ${favoriteSeasonColor}`,
        padding: "10px",
      }}
    >
      <h2>Preview das Informações</h2>
      <p>
        Nome: {formData.firstName} {formData.lastName}
      </p>
      <p>Descrição da Cidade: {formData.cityDescription}</p>
      <p>Estação Favorita: {favoriteSeason}</p>
      <p>
        Estações Não Favoritas:{" "}
        {seasons
          .map((season) => season.value)
          .filter((season) => season !== favoriteSeason.toLowerCase())
          .join(", ")}
      </p>
      <p>
        Acha que sopa é janta?{" "}
        {formData.soupIsDinner ? formData.soupIsDinner : "Não respondeu"}
      </p>
      <p>{formData.termsAccepted ? "Termos aceitos" : ""}</p>
    </div>
  );
};

export default Preview;
