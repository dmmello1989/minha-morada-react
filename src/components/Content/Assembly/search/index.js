import { Card } from "../../../Card";
import { Input } from "../../../Input";
import { Button } from "../../../Button";
import "../../styles.css";

export const Search = ({ assemblies }) => {
  return (
    <div className="content content--flex-column">
      <h2 className="content__title">Consultar Assembléias</h2>
      <div className="content__top">
        <div className="content__item content__item--no-margin">
          <Input
            name="type"
            label="Digite um tipo de assembléia"
            className="input--small"
          />
        </div>
        <div className="content__date">
          <Input
            name="date"
            type="date"
            isDate={true}
            label="Selecione uma data"
          />
        </div>
      </div>

      <div className="content__bottom">
        <div className="content__header">
          <span style={{marginRight: 110}}>Assembléia:</span>
          <span>Data:</span>
          <span>Status:</span>
        </div>

        {assemblies.map((assembly, index) => (
          <Card key={`room-schedule-${index}`}>
            <span className="card__name">{assembly.type}</span>
            <span className="card__name">{assembly.date}</span>
            <Button className="button--fit-content">Ver Ata</Button>
          </Card>
        ))}
      </div>
    </div>
  )
}