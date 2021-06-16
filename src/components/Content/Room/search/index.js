import { Input } from "../../../Input";
import { Card } from "../../../Card";
import { Button } from "../../../Button";
import "../styles.css";

export const Search = ({ rooms }) => {
  return (
    <>
      <div class="content__half">
        <h2 class="content__title">Consultar Espaço</h2>

        <Input 
          name="room"
          className="input--small"
          label="Digite o nome do Espaço"
        />

        <Button className="button--fit-content">Pesquisar</Button>
      </div>

      <div class="content__half">
        <span>Resultado:</span>
        {rooms.map((item, index) => (
          <Card key={`room-${index}`} className="card__name">{item}</Card>
        ))}
      </div>
    </>
  )
}