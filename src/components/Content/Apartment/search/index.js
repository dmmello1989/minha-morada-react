import { Select } from "../../../Select";
import { Card } from "../../../Card";
import { Icon } from "../../../../assets/icons";
import "../../styles.css";

export const Search = ({ numbersApt, apartment, selectBlocks, handleSelectApartment }) => {
  const hasApartment = Object.keys(apartment).length > 0;
  const resident = hasApartment && apartment.morador;

  return (
    <>
      <div className="content__half">
        <h2 className="content__title">Consultar Apartamento</h2>

        <div className="content__item">
          <span>Selecione um apartamento:</span>
          <div className="select">
            <Select
              name="Apartamentos"
              options={numbersApt}
              onChange={e => handleSelectApartment(e.target.value)}
            />
          </div>
        </div>

        <div className="content__item">
          <span>Selecione o bloco (se houver):</span>
          <div className="select">
            <Select
              name="Blocos"
              options={selectBlocks}
            />
          </div>
        </div>
      </div>

      {hasApartment && (
        <div className="content__half">
          <div style={{marginBottom: 16}}>
            <span className="card__key">Vaga(s) Estacionamento:</span>
            <span className="card__value"><strong>{apartment.vagaGaragem}</strong></span>
          </div>

          {!!resident ? (
            <Card>
              <div className="card__left">
                <Icon icon="personOne" width={64} height={64} />
              </div>
              <div className="card__right">
                <p className="card__name">{resident.nome}</p>
                <div>
                  <span className="card__key">CPF:</span>
                  <span className="card__value">{resident.cpf}</span>
                  <span className="card__key">Data Nasc.:</span>
                  <span className="card__value">{resident.dataNascimento}</span>
                </div>
                <div>
                  <span className="card__key">E-mail:</span>
                  <span className="card__value">{resident.email}</span>
                </div>
                <div>
                  <span className="card__key">Telefone:</span>
                  <span className="card__value">{resident.telefone}</span>
                </div>
              </div>
            </Card>
          ) : (
            <Card>
              <p className="card__name">Apartamento vazio</p>
            </Card>
          )}
        </div>
      )}
    </>
  )
}