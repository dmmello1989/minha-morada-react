import { Input } from "../../../Input";
import { Button } from "../../../Button";
import "../../styles.css";

export const Add = ({ createData, setCreateData, createApartment }) => {
  return (
    <form onSubmit={createApartment} className="form">
      <div className="content__half">
        <h2 className="content__title">Cadastrar Apartamento</h2>
      
        <div className="content-item-inputs">
          <Input 
            required={true}
            name="apartment"
            label="Nº Apartamento"
            value={createData.numeroApto}
            className="input--small"
            onChange={e => setCreateData({ ...createData, numeroApto: e.target.value })}
          />
          <Input 
            name="block"
            label="Bloco"
            value={createData.blocoApto}
            className="input--small"
            onChange={e => setCreateData({ ...createData, blocoApto: e.target.value })}
          />
          <Input 
            required={true}
            name="apartment"
            label="Vaga(s) garagem"
            className="input--small"
            value={createData.vagaGaragem}
            onChange={e => setCreateData({ ...createData, vagaGaragem: e.target.value })}
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