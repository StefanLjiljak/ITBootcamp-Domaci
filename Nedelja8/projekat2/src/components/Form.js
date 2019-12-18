import React, { useState } from 'react';

export const Form = ({ updateKontakt }) => {
  const [kontakt, setKontakt] = useState({
    name: '',
    number: ''
  });
  
  const [error, setError] = useState('');

  const submit = () => {
    if (!/^(?!\s*$).+/.test(kontakt.name)) {
      return setError('Polje ne sme ostati prazno.');
    }
    if (!/^[+](\d){3}(\s)(\d){9}$/.test(kontakt.number)) {
      return setError('Molimo unesite broj telefona u formatu +ххх ххххххххх.');
    }
    updateKontakt(kontakt);
    setError('');
  }

  return (
    <>
      <form onSubmit={e => e.preventDefault()} >
        <input
          type="text"
          name="name"
          placeholder="Ime i Prezime"
          value={kontakt.name}
          onChange={e => setKontakt({
            name: e.target.value,
            number: kontakt.number
          })}
          required
        />

        <input
          type="text"
          name="number"
          placeholder="Broj telefona"
          maxLength="14"
          value={kontakt.number}
          onChange={e => setKontakt({
            name: kontakt.name,
            number: e.target.value
          })}
          required
        />

        <input
          type="submit"
          value="Dodaj kontakt"
          onClick={submit}
        />
      </form>
      <p>{error}</p>
    </>
  );
}