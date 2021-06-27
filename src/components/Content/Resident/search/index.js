import { Input } from "../../../Input";
import { Select } from "../../../Select";
import { Button } from "../../../Button";
import { PersonCard } from "../../../PersonCard";
import "../styles.css";

export const Search = ({ aptOptions, blockOptions }) => {
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
            options={blockOptions}
          />
        </div>

        <div className="content__item">
          <span>Selecione o apartamento:</span>
          <Select 
            name="apartment"
            options={aptOptions}
          />
        </div>

        <Button className="button--fit-content">Pesquisar</Button>
      </div>

      <div className="content__half">
        <PersonCard
          person="personOne"
          name="Maria Silva"
          cpf="123.456.789-00"
          birthday="05/04/1987"
          email="maria@gmail.com"
          phone="(48) 3210-0123 \ (48) 9999-9999"
        />
      </div>
    </>
  )
}