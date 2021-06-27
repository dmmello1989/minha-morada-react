import { useEffect } from "react";

import { Card } from "../../../Card";
import { Input } from "../../../Input";
import { Button } from "../../../Button";
import { Select } from "../../../Select";
import { Icon } from "../../../../assets/icons";

import "../../styles.css";

export const Edit = ({ 
  editData,
  apartment,
  numbersApt,
  setEditData,
  selectBlocks,
  editApartment,
  handleSelectApartment
}) => {
  const hasApartment = Object.keys(apartment).length > 0;
  const resident = hasApartment && apartment.morador;

  useEffect(() => {
    setEditData({
      numeroApto: apartment.numeroApto,
      blocoApto: apartment.blocoApto,
      vagaGaragem: apartment.vagaGaragem
    });
  }, [apartment])

  return (
    <form onSubmit={e => editApartment(e, apartment.id)} className="form">
      <div className="content__half">
        <h2 className="content__title">Editar Apartamento</h2>

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
          <span>Selecione o bloco:</span>
          <div className="select">
            <Select
              name="Blocos"
              options={selectBlocks}
            />
          </div>
        </div>
      </div>

      <div className="content__half content__half--p-top">
        <Input 
          required={true}
          name="apartment"
          label="Nº Apartamento"
          className="input--small"
          value={editData.numeroApto}
          onChange={e => setEditData({ ...editData, numeroApto: e.target.value })}
        />
        <Input 
          name="block"
          label="Bloco"
          className="input--small"
          value={editData.blocoApto}
          onChange={e => setEditData({ ...editData, blocoApto: e.target.value })}
        />
        <Input 
          required={true}
          name="apartment"
          label="Vaga(s) garagem"
          className="input--small"
          value={editData.vagaGaragem}
          onChange={e => setEditData({ ...editData, vagaGaragem: e.target.value })}
        />

        <div>
          <span className="card__key">Moradores:</span>
          
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

        <div className="content-item">
          <Button className="button">Salvar Alterações</Button>
        </div>
      </div>
    </form>
  )
}