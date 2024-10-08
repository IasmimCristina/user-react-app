import React from "react";
import { SEASONS } from "../helpers/constants";
import "./Preview.css";

const Preview = ({ formData, isFormFilled }) => {
  const {
    firstName,
    lastName,
    cityDescription,
    favoriteSeason,
    soupIsDinner,
    areTermsAccepted,
  } = formData;

  const favoriteSeasonColor =
    SEASONS.find((season) => season.value === favoriteSeason.toLowerCase())
      ?.color || "gray";

  return (
    <div className="preview" style={{ borderColor: favoriteSeasonColor }}>
      <h2 className="preview__header">Information Preview</h2>

      {isFormFilled() ? (
        <>
          {(firstName || lastName) && (
            <p className="preview__item">
              <span className="preview__label">Name:</span> {firstName}{" "}
              {lastName}
            </p>
          )}
          {cityDescription && (
            <p className="preview__item">
              <span className="preview__label">City description:</span>{" "}
              {cityDescription}
            </p>
          )}
          {favoriteSeason && (
            <p className="preview__item">
              <span className="preview__label">Favorite season:</span>{" "}
              <span className="preview__season">{favoriteSeason}</span>
            </p>
          )}
          {favoriteSeason && (
            <p className="preview__item">
              <span className="preview__label">Least favorite seasons:</span>{" "}
              {SEASONS.map((season) => season.value)
                .filter((season) => season !== favoriteSeason.toLowerCase())
                .join(", ")}
            </p>
          )}
          {soupIsDinner !== "" && (
            <p className="preview__item">
              <span className="preview__label">Is soup dinner?</span>{" "}
              {soupIsDinner ? soupIsDinner : "No answer"}
            </p>
          )}
          {areTermsAccepted && <p className="preview__terms">Terms accepted</p>}
        </>
      ) : (
        <p className="preview__no-data">No form data has been informed yet.</p>
      )}
    </div>
  );
};

export default Preview;
