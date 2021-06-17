import { Input } from "../../../Input";
import "../../styles.css";

export const Add = () => {
  return (
    <div className="content content--flex-column">
      <h2 className="content__title">Cadastrar Assembléias</h2>
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
        <span className="content__header">Ata:</span>
        <textarea className="content__textarea" name="minute" id="minute" cols="30" rows="10"></textarea>
        <div style={{ display: "flex", justifyContent: "space-between" }}> 
          <div className="button button--yellow">Anexar Arquivo</div>
          <div className="button">Cadastrar</div>
        </div>
      </div>
    </div>
  )
}