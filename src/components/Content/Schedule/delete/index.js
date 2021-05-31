import { useState } from "react";

import { Input } from "../../../Input";
import { Button } from "../../../Button";
import { Card } from "../../../Card";
import "../styles.css";

export const Delete = ({ rooms }) => {
  const [active, setActive] = useState("");

  return (
    <>
      <h2 class="content-title">Cancelar Agendamentos</h2>

      <div class="content-bottom">
        <div class="content-bottom-header">
          <span>Espaço:</span>
          <span>Data:</span>
          <span>Status:</span>
        </div>
        <div class="card" style="background-color: #004DB0; color: #FFFFFF;">
          <span class="card-name">Salão de Festas</span>
          <span class="card-name">22/07/2020</span>
          <div class="button card-button" style="background-color: #F0BC5E; box-shadow: none;">Agendado</div>
        </div>
        <div class="card">
          <span class="card-name">Área Gourmet</span>
          <span class="card-name">02/05/2019</span>
          <div class="button card-button">Ocupado</div>
        </div>
        <div class="card">
          <span class="card-name">Sala de Cinema</span>
          <span class="card-name">19/01/2019</span>
          <div class="button card-button">Ocupado</div>
        </div>
        
      </div>

      <div class="content-item">
        <div class="button" style="width: 350px; background-color: #FA2E27;">
          Excluir Agendamento
        </div>
      </div>
    </>
  )
}