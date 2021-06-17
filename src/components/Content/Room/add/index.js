import { Input } from "../../../Input";
import { Button } from "../../../Button";

export const Add = () => {
  return (
    <>
      <div class="content__half">
        <h2 class="content__title">Cadastrar Espaço</h2>
        <Input 
          name="room"
          className="input--small"
          label="Digite o nome do Espaço"
        />
        
        <Button className="button--fit-content">Cadastrar</Button>
      </div>
    </>
  )
}