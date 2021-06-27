import { useEffect } from "react";

import { Input } from "../../../Input";
import { Select } from "../../../Select";
import { Button } from "../../../Button";
import { PersonCard } from "../../../PersonCard";
import "../styles.css";

export const Search = ({ 
  residents,
  apartment,
  numbersApt, 
  selectBlocks,
  getResidents,
  searchResult,
  setSearchResult,
  handleSelectApartment
}) => {

  useEffect(() => {
    getResidents();
  }, []);

  console.log(apartment)

  const handleSearchResident = person => {
    const resident = residents.find(it => it.nome === person);

    console.log(resident);
  }

  return (
    <>
      <div className="content__half">
        <h2 className="content__title">Consultar Condômino</h2>

        <Input 
          name="name"
          className="input--small"
          label="Nome do Condômino"
        />

        
        <div className="content__item">
          <span>Selecione o bloco (se houver):</span>
          <Select 
            name="block"
            options={selectBlocks}
          />
        </div>

        <div className="content__item">
          <span>Selecione o apartamento:</span>
          <Select 
            name="apartment"
            options={numbersApt}
            onChange={e => handleSelectApartment(e.target.value)}
          />
        </div>

        <Button className="button--fit-content">Pesquisar</Button>
      </div>

      <div className="content__half">
        {residents.map((person, index) => (
          <PersonCard
            cpf={person.cpf}
            person="personOne"
            name={person.nome}
            email={person.email}
            key={`person-${index}`}
            phone={person.telefone}
            birthday={person.dataNascimento}
          />
        ))}
      </div>
    </>
  )
}