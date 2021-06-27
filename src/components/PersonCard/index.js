import { Icon } from "../../assets/icons";
import "./styles.css";

export const PersonCard = ({ person, name, cpf, birthday, email, phone }) => {
  return (
    <div className="card">
      <div className="card__left">
        <Icon icon={person} width={64} height={64} />
      </div>
      <div className="card__right">
        <p className="card__name">{name}</p>
        <div>
          <span className="card__key">CPF:</span>
          <span className="card__value">{cpf}</span>
          <span className="card__key">Data Nasc.:</span>
          <span className="card__value">{birthday}</span>
        </div>
        <div>
          <span className="card__key">E-mail:</span>
          <span className="card__value">{email}</span>
        </div>
        <div>
          <span className="card__key">Telefone:</span>
          <span className="card__value">{phone}</span>
        </div>
      </div>
    </div>
  )
}