import { Icon } from "../../assets/icons";
import "./styles.css";

export const PersonCard = ({ person, name, cpf, birthday, email, phone }) => {
  return (
    <div class="card">
      <div class="card__left">
        <Icon icon={person} width={64} height={64} />
      </div>
      <div class="card__right">
        <p class="card__name">{name}</p>
        <div>
          <span class="card__key">CPF:</span>
          <span class="card__value">{cpf}</span>
          <span class="card__key">Data Nasc.:</span>
          <span class="card__value">{birthday}</span>
        </div>
        <div>
          <span class="card__key">E-mail:</span>
          <span class="card__value">{email}</span>
        </div>
        <div>
          <span class="card__key">Telefone:</span>
          <span class="card__value">{phone}</span>
        </div>
      </div>
    </div>
  )
}