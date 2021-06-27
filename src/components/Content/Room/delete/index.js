import { useState } from "react";

import { Button } from "../../../Button";
import { Card } from "../../../Card";
import "../styles.css";

export const Delete = ({ rooms }) => {
  const [active, setActive] = useState("");

  return (
    <>
      <div className="content__half">
        <h2 className="content__title">Editar Espaço</h2>
          {rooms.map((item, index) => {
            const isActive = active === index;

            return (
              <div className="is-pointer" onClick={() => setActive(index)}>
                <Card key={`room-${index}`} className={`card__name ${isActive && "card--selected"}`}>
                  {item}
                </Card>
                {isActive && <Button className="button button--red">Excluir Espaço</Button>}
              </div>
            )
          })}
      </div>
    </>
  )
}