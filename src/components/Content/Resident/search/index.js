import { useEffect } from "react";

import { Input } from "../../../Input";
import { Select } from "../../../Select";
import { Button } from "../../../Button";
import { Card } from "../../../Card";
import { PersonCard } from "../../../PersonCard";
import "../styles.css";

export const Search = ({ 
  numbersApt, 
  searchTerm,
  selectBlocks,
  getResidents,
  searchResult,
  handleSearchResident,
  handleSelectApartment
}) => {
  const hasSearched = searchResult.length > 0;

  useEffect(() => {
    getResidents();
  }, []);

  return (
    <>
      <div className="content__half">
        <h2 className="content__title">Consultar Condômino</h2>

        <Input 
          name="name"
          className="input--small"
          label="Nome do Condômino"
          value={searchTerm}
          onChange={handleSearchResident}
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
        {hasSearched ? (
          <>
            {searchResult.map((person, index) => (
              <PersonCard
                cpf={person.cpf}
                name={person.nome}
                person="personOne"
                email={person.email}
                key={`person-${index}`}
                phone={person.telefone}
                birthday={person.dataNascimento}
              />
            ))}
          </>
        ) : (
          <Card>Apartamento vazio</Card>
        )}
      </div>
    </>
  )
}