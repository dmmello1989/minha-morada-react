import { useState } from "react";

import { Input } from "../../../Input";
import { Button } from "../../../Button";
import { Card } from "../../../Card";
import "../styles.css";

export const Delete = ({ rooms }) => {
  const [active, setActive] = useState("");

  return (
    <>
      <div class="content__half">
        <h2 class="content__title">Editar Espaço</h2>
          {rooms.map((item, index) => {
            const isActive = active === index;

            return (
              <div className="is-pointer" onClick={() => setActive(index)}>
                <Card key={`room-${index}`} className={`card--name ${isActive && "card--selected"}`}>
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