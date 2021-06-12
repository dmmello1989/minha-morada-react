import { Select } from "../../../Select";
import { Card } from "../../../Card";
import { Icon } from "../../../../assets/icons";
import "../../styles.css";

export const Search = ({ residents, selectApartments, selectBlocks }) => {
  return (
    <>
      <div class="content__half">
        <h2 class="content__title">Consultar Apartamento</h2>

        <div class="content__item">
          <span>Selecione um apartamento:</span>
          <div class="select">
            <Select
              name="Apartamentos"
              options={selectApartments}
            />
          </div>
        </div>

        <div class="content__item">
          <span>Selecione o bloco:</span>
          <div class="select">
            <Select
              name="Blocos"
              options={selectBlocks}
            />
          </div>
        </div>
      </div>

      <div class="content__half">
        <div style={{marginBottom: 16}}>
          <span class="card__key">Vaga(s) Estacionamento:</span>
          <span class="card__value"><strong>12, 13</strong></span>
        </div>

        {residents.map((resident, index) => (
          <Card key={`resident-${index}`}>
            <div class="card__left">
              <Icon icon={resident.icon} width={64} height={64} />
            </div>
            <div class="card__right">
              <p class="card__name">{resident.name}</p>
              <div>
                <span class="card__key">CPF:</span>
                <span class="card__value">{resident.cpf}</span>
                <span class="card__key">Data Nasc.:</span>
                <span class="card__value">{resident.birthday}</span>
              </div>
              <div>
                <span class="card__key">E-mail:</span>
                <span class="card__value">{resident.email}</span>
              </div>
              <div>
                <span class="card__key">Telefone:</span>
                <span class="card__value">{resident.phone}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}