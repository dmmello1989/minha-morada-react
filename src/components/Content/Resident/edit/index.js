import { Input } from "../../../Input";
import { Select } from "../../../Select";
import { Button } from "../../../Button";

export const Edit = ({ apartments, selectBlocks }) => {
  return (
    <>
      <div className="content__half">
        <h2 className="content__title">Editar Condômino</h2>
        <div className="content__item">
          <span>Selecione o bloco (se houver):</span>
          <Select 
            name="block"
            options={selectBlocks}
          />
        </div>

        <div className="content__item">
          <span>Busque pelo apartamento:</span>
          <Select 
            name="apartment"
            options={apartments}
          />
        </div>
      </div>

      <div className="content__half">
        <Input 
          name="name"
          className="input--small"
          label="Nome do Condômino"
        />
        <Input 
          name="cpf"
          className="input--small"
          label="CPF"
        />
        <Input 
          name="email"
          className="input--small"
          label="E-mail"
        />
        <Input 
          name="phone"
          className="input--small"
          label="Telefone"
        />
        <Input 
          name="name"
          className="input--small"
          label="Data de Nascimento"
        />
        <Button className="button--fit-content">Salvar alterações</Button>
      </div>
    </>
  )
}