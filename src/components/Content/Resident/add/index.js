import { Input } from "../../../Input";
import { Select } from "../../../Select";
import { Button } from "../../../Button";

export const Add = ({ aptOptions, blockOptions }) => {
  return (
    <>
      <div class="content__half">
        <h2 class="content__title">Cadastrar Condômino</h2>
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
      </div>

      <div class="content__half">
        <div>
          <div class="content__item">
            <span>Selecione o bloco (se houver):</span>
            <Select 
              name="block"
              options={blockOptions}
            />
          </div>

          <div class="content__item">
            <span>Selecione o apartamento:</span>
            <Select 
              name="apartment"
              options={aptOptions}
            />
          </div>
        </div>
        
        <Button className="button--fit-content">Cadastrar</Button>
      </div>
    </>
  )
}