import { Input } from "../../../Input";
import { Select } from "../../../Select";
import { Button } from "../../../Button";

export const Add = ({ createData, setCreateData, createResident, numbersApt, apartments, selectBlocks, handleSelectApartment }) => {
  return (
    <form onSubmit={createResident} className="form">
      <div className="content__half">
        <h2 className="content__title">Cadastrar Condômino</h2>
        <Input 
          name="name"
          className="input--small"
          label="Nome do Condômino"
          value={createData.nome}
          onChange={e => setCreateData({ ...createData, nome: e.target.value })}
        />
        <Input 
          name="cpf"
          className="input--small"
          label="CPF"
          value={createData.cpf}
          onChange={e => setCreateData({ ...createData, cpf: e.target.value })}
        />
        <Input 
          name="email"
          className="input--small"
          label="E-mail"
          value={createData.email}
          onChange={e => setCreateData({ ...createData, email: e.target.value })}
        />
        <Input 
          name="phone"
          className="input--small"
          label="Telefone"
          value={createData.telefone}
          onChange={e => setCreateData({ ...createData, telefone: e.target.value })}
        />
        <Input 
          name="name"
          className="input--small"
          label="Data de Nascimento"
          value={createData.dataNascimento}
          onChange={e => setCreateData({ ...createData, dataNascimento: e.target.value })}
        />
      </div>

      <div className="content__half">
        <div>
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
        
        <Button className="button--fit-content">Cadastrar</Button>
      </div>
    </form>
  )
}