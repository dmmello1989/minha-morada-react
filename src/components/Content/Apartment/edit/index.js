import { useState } from "react";

import { Input } from "../../../Input";
import { Button } from "../../../Button";
import { Select } from "../../../Select";
import { Icon } from "../../../../assets/icons";

export const Edit = ({ residents, selectApartments, selectBlocks }) => {
  const [active, setActive] = useState("");

  return (
    <>
      <div className="content__half">
        <h2 className="content__title">Editar Apartamento</h2>

        <div className="content__item">
          <span>Selecione um apartamento:</span>
          <div className="select">
            <Select
              name="Apartamentos"
              options={selectApartments}
            />
          </div>
        </div>

        <div className="content__item">
          <span>Selecione o bloco:</span>
          <div className="select">
            <Select
              name="Blocos"
              options={selectBlocks}
            />
          </div>
        </div>
      </div>

      <div className="content__half">
        <div className="content-item-inputs">
          <Input 
            required={true}
            name="apartment"
            label="Nº Apartamento"
            className="input--small"
          />
          <Input 
            required={true}
            name="block"
            label="Bloco"
            className="input--small"
          />
          <Input 
            required={true}
            name="apartment"
            label="Vaga(s) garagem"
            className="input--small"
          />
        </div>

        <div className="content__item">
          <span className="card__key card__key--m-bottom">Moradores:</span>
          <div className="content__item">
            <Input
              name="cpf"
              required={true}
              label="CPF do Condômino"
              className="input--small"
            />
            <Button className="button--fit-content">
              <Icon icon="plus" width={24} height={24} />
            </Button>
          </div>
        </div>

        <div className="content-item">
          <div className="button">
            Salvar Alterações
          </div>
        </div>
      </div>
    </>
  )
}