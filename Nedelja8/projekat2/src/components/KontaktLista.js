import React from 'react';
import { Kontakt } from './Kontakt';

export const KontaktLista = ({ kontakti = [], search }) => {
  let regExp = RegExp(search.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
  if(regExp !== `[]`)
  kontakti = kontakti.filter(kontakt => regExp.test(kontakt.name));
  return (
    <div className="kontakt-lista">
      {
        kontakti.map(kontakt => <Kontakt key={kontakt.name} kontakt={kontakt} />)
      }
    </div>
  );
}