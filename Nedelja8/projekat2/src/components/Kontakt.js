import React from 'react';

export const Kontakt = ({ kontakt }) => {
  return (
    <div className="kontakt">
      <label>{kontakt.name}</label>
      <label>{kontakt.number}</label>
    </div>
  );
}