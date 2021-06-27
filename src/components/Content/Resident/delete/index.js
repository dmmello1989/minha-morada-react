import { useEffect, useState } from "react";

import { Card } from "../../../Card";
import { Input } from "../../../Input";
import { Select } from "../../../Select";
import { Button } from "../../../Button";
import { PersonCard } from "../../../PersonCard";
import "../styles.css";

export const Delete = ({ 
  numbersApt, 
  searchTerm,
  selectBlocks,
  getResidents,
  searchResult,
  deleteResident,
  handleSearchResident,
  handleSelectApartment
}) => {
  const [residentId, setResidentId] = useState(null);
  const hasSearched = searchResult.length > 0;

  useEffect(() => {
    getResidents();
  }, []);

  useEffect(() => {
    setResidentId(hasSearched ? searchResult[0].id : null);
  }, [searchResult])

  return (
    <>
      <div className="content__half">
        <h2 className="content__title">Excluir Condômino</h2>

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
        <Button
          onClick={() => deleteResident(residentId)}
          className="button--fit-content button--red"
        >
            Excluir Condômino
        </Button>
      </div>
    </>
  )
}