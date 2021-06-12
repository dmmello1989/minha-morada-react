import { Input } from "../../../Input";
import { Button } from "../../../Button";
import { Icon } from "../../../../assets/icons";
import "../../styles.css";

export const Add = () => {
  return (
    <>
      <div className="content__half">
        <h2 className="content__title">Cadastrar Apartamento</h2>
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
      </div>

      <div className="content__half">
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

        <div className="content-item">
          <Button className="button--fit-content">Cadastrar</Button>
        </div>
      </div>
    </>
  )
}