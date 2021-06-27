import { useState } from "react";

import { Input } from "../../../Input";
import { Card } from "../../../Card";
import { Button } from "../../../Button";

export const Edit = ({ rooms }) => {
  const [active, setActive] = useState("");

  return (
    <>
      <div className="content__half">
        <h2 className="content__title">Editar Espaço</h2>
          {rooms.map((item, index) => {
            const isActive = active === index;

            return (
              <div className="is-pointer" onClick={() => setActive(index)}>
                <Card key={`room-${index}`} className="card__name">
                  {isActive ? (
                    <Input 
                      name="room"
                      label={item}
                      className="input--edit"
                    />
                  ) : (
                    <span>{item}</span>
                  )}
                </Card>
                {isActive && <Button className="button--fit-content">Salvar alterações</Button>}
              </div>
            )
          })}
      </div>
    </>
  )
}