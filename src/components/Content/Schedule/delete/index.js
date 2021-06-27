import { useState } from "react";

import { Button } from "../../../Button";
import { Card } from "../../../Card";
import "../../styles.css";

export const Delete = ({ roomSchedules }) => {
  const [active, setActive] = useState(null);

  const deleteItem = index => {
    return alert(`Item ${index} deletado.`)
  }

  return (
    <>
      <h2 className="content__title">Cancelar Agendamentos</h2>

      <div className="content__bottom">
        <div className="content__header">
          <span style={{marginRight: 110}}>Espaço:</span>
          <span>Data:</span>
          <span>Status:</span>
        </div>

        {roomSchedules.map((room, index) => {
          const classActive = active === index;
          const isAvailable = room.status === "available";
          const classAvailable = isAvailable ? "available" : "occupied";

          return (
            <Card
              key={`room-schedule-${index}`}
              onClick={() => setActive(index)}
              className={`card--pointer ${classActive && "card--selected"}`}
            >
              <span className="card__name">{room.name}</span>
              <span className="card__name">{room.date}</span>
              <Button className={`button button--fit-content button--card ${classAvailable}`}>
                {isAvailable ? "Agendar" : "Ocupado"}
              </Button>
            </Card>
          )
        })}
      </div>

      <div className="content-item">
        <Button className="button button--red" onClick={() => deleteItem(active)}>
          Excluir Agendamento
        </Button>
      </div>
    </>
  )
}