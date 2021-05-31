import { Input } from "../../../Input";
import { Select } from "../../../Select";
import { Button } from "../../../Button";

export const Add = () => {
  return (
    <>
      <h2 class="content__title">Cadastrar Agendamentos</h2>

      <div class="content__bottom">
        <div class="content__bottom-header">
          <span style="margin-right: 110px;">Espaço:</span>
          <span>Data:</span>
          <span>Status:</span>
        </div>
        <div class="card">
          <span class="card--name">Salão de Festas</span>
          <span class="card--name">22/07/2020</span>
          <div class="button card-button available">Agendar</div>
        </div>
        <div class="card">
          <span class="card--name">Área Gourmet</span>
          <span class="card--name">02/05/2019</span>
          <div class="button card-button button--red">Ocupado</div>
        </div>
        <div class="card">
          <span class="card--name">Sala de Cinema</span>
          <span class="card--name">19/01/2019</span>
          <div class="button card-button button--red">Ocupado</div>
        </div>
      </div>
    </>
  )
}