import { Input } from "../../../Input";
import { Select } from "../../../Select";
import { Button } from "../../../Button";
import { PersonCard } from "../../../PersonCard";
import "../styles.css";

export const Search = () => {
  const aptOptions = [
    "101", "102", "103", "104", "201", "202", "203", "204"
  ]

  const blockOptions = [
    "A", "B", "C", "D"
  ]

  return (
    <>
      <div class="content__half">
        <h2 class="content__title">Consultar Condômino</h2>

        <Input 
          name="name"
          className="input--small"
          label="Nome do Condômino"
        />

        <div class="content__item">
          <span>Ou selecione um apartamento:</span>
          <Select 
            name="apartment"
            options={aptOptions}
          />
        </div>

        <div class="content__item">
          <span>Selecione o bloco:</span>
          <Select 
            name="block"
            options={blockOptions}
          />
        </div>

        <Button className="button--fit-content">Pesquisar</Button>
      </div>

      <div class="content__half">
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