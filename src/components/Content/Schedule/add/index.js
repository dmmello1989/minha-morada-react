import { Card } from "../../../Card";
import { Button } from "../../../Button";

export const Add = ({ roomSchedules }) => {
  return (
    <div className="content content--flex-column">
      <h2 className="content__title">Cadastrar Agendamentos</h2>

      <div className="content__bottom">
        <div className="content__header">
          <span style={{marginRight: 110}}>Espaço:</span>
          <span>Data:</span>
          <span>Status:</span>
        </div>

        {roomSchedules.map((room, index) => {
          const isAvailable = room.status === "available";

          return (
            <Card key={`room-schedule-${index}`}>
              <span className="card__name">{room.name}</span>
              <span className="card__name">{room.date}</span>
              <Button className={`button button--fit-content button--card ${isAvailable ? "available" : "occupied"}`}>
                {isAvailable ? "Agendar" : "Ocupado"}
              </Button>
            </Card>
          )
        })}
      </div>
    </div>
  )
}