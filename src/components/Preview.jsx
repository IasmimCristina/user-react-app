import React from "react";
import { SEASONS } from "../helpers/constants";
import "./Preview.css";

const Preview = ({ formData }) => {
  const { favoriteSeason } = formData;

  const favoriteSeasonColor =
    SEASONS.find((season) => season.value === favoriteSeason.toLowerCase())
      ?.color || "gray";

  return (
    <div className="preview" style={{ borderColor: favoriteSeasonColor }}>
      <h2 className="preview__header">Information Preview</h2>
      <p className="preview__item">
        <span className="preview__label">Name:</span> {formData.firstName}{" "}
        {formData.lastName}
      </p>
      <p className="preview__item">
        <span className="preview__label">City Description:</span>{" "}
        {formData.cityDescription}
      </p>
      <p className="preview__item">
        <span className="preview__label">Favorite Season:</span>{" "}
        <span className="preview__season">{favoriteSeason}</span>
      </p>
      <p className="preview__item">
        <span className="preview__label">Least Favorite Seasons:</span>{" "}
        {SEASONS.map((season) => season.value)
          .filter((season) => season !== favoriteSeason.toLowerCase())
          .join(", ")}
      </p>
      <p className="preview__item">
        <span className="preview__label">Is soup dinner?</span>{" "}
        {formData.soupIsDinner ? formData.soupIsDinner : "No answer"}
      </p>
      <p className="preview__terms">
        {formData.termsAccepted ? "Terms accepted" : ""}
      </p>
    </div>
  );
};

export default Preview;
