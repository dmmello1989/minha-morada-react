import { Input } from "../../../Input";
import { Button } from "../../../Button";
import { Icon } from "../../../../assets/icons";
import "../../styles.css";

export const Add = () => {
  return (
    <div className="content content--flex-column">
      <h2 className="content__title">Cadastrar Assembléias</h2>
      <div className="content__top">
        <div className="content__item">
          <Input
            name="subject"
            label="Digite um assunto"
            className="input--small"
          />
        </div>
        <div className="content__date">
          <Input
            name="date"
            type="date"
            label="Selecione uma data"
          />
        </div>
      </div>

      <div className="content__bottom">
        <div>
          <span>Ata:</span>
        </div>
        <textarea className="content__bottom__textarea" name="minute" id="minute" cols="30" rows="10"></textarea>
        <div> 
          <div className="button">Anexar Arquivo</div>
          <div className="button">Cadastrar</div>
        </div>
      </div>
    </div>
  )
}