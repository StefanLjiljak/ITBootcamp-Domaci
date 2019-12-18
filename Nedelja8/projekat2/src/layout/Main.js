import React, { useState } from 'react';
import { Form } from '../components/Form';
import { KontaktLista } from '../components/KontaktLista';


export const Main = () => {
  const [kontakti, setKontakti] = useState([]);
  const [search, setSearch] = useState('');
  
  const updateKontakt = (kontakt) => {
    let trenutni = kontakti.find(x => x.name === kontakt.name);
    if(trenutni !== undefined) {
      if(window.confirm('Da li zelite da izmenite broj telefona?')) {
        let prikaz = [...kontakti];
        prikaz[prikaz.indexOf(trenutni)] = kontakt;
        setKontakti(prikaz);
      }
    } else {
      let prikaz = [...kontakti];
        prikaz.push(kontakt);
        setKontakti(prikaz);
    }
  }

 

  return (
    <main>
      <input 
        id="search"
        type="search" 
        placeholder="Pretraga kontakt liste ..."
        value={search} 
        onChange={e => setSearch(e.target.value)} />
      <Form updateKontakt={updateKontakt} />
      <KontaktLista kontakti={kontakti} search={search} />
      
    </main>
  );
}