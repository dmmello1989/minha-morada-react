import { useState } from "react";
import { Input } from "../../../Input";
import { Button } from "../../../Button";
// import { Icon } from "../../../../assets/icons";

import ApartmentService from "../../../../services/ApartmentService";
import "../../styles.css";

export const Add = ({ apartments, setApartments }) => {
  const [apartamento, setApartamento] = useState({});

  const createApartment = (e) => {
    e.preventDefault();

    const body = {
      "apartamento": {
        ...apartamento
      }
    }

    console.log(body)
    ApartmentService.createApartment(body).then(response => {
      return setApartments([ ...apartments, apartamento ]);
    })
  }

  return (
    <form onSubmit={createApartment} className="form">
      <div className="content__half">
        <h2 className="content__title">Cadastrar Apartamento</h2>
      
        <div className="content-item-inputs">
          <Input 
            required={true}
            name="apartment"
            label="Nº Apartamento"
            value={apartamento.numeroApto}
            className="input--small"
            onChange={e => setApartamento({ ...apartamento, numeroApto: e.target.value })}
          />
          <Input 
            name="block"
            label="Bloco"
            value={apartamento.blocoApto}
            className="input--small"
            onChange={e => setApartamento({ ...apartamento, blocoApto: e.target.value })}
          />
          <Input 
            required={true}
            name="apartment"
            label="Vaga(s) garagem"
            className="input--small"
            value={apartamento.vagaGaragem}
            onChange={e => setApartamento({ ...apartamento, vagaGaragem: e.target.value })}
          />
        </div>
      </div>

      <div className="content__half">
        {/* <span className="card__key card__key--m-bottom">Moradores:</span>
        <div className="content__item">
          <Input
            name="cpf"
            value={cpf}
            required={true}
            label="CPF do Condômino"
            className="input--small"
            onChange={e => setCpf(e.target.value)}
          />
          <Button className="button--fit-content">
            <Icon icon="plus" width={24} height={24} />
          </Button>
        </div> */}

        <div className="content-item">
          <Button className="button--fit-content">Cadastrar</Button>
        </div>
      </div>
    </form>
  )
}