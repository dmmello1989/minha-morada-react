import { useEffect, useState } from "react";

import { Add } from "./add";
import { Search } from "./search";
import { Edit } from "./edit";
import { Delete } from "./delete";

import ApartmentService from "../../../services/ApartmentService";

const selectBlocks = ["Não há blocos"];

export const Apartment = ({ tabActive }) => {
  const [apartments, setApartments] = useState([]);
  const [apartment, setApartment] = useState({});
  const [numbersApt, setNumbersApt] = useState([]);

  useEffect(() => {
    ApartmentService.getApartments().then(response => {
      const data = response.data.listaApartamentos;
      const numberApt = data.map(apt => apt.numeroApto);

      setApartments(data);
      setNumbersApt(numberApt);
    });
  }, []);

  const handleSelectApartment = id => {
    const selectApt = apartments.find(it => it.numeroApto === id);

    getApartment(selectApt.id);
  };

  // HTTP METHODS
  // __________________
  const getApartment = id => {
    ApartmentService.getApartment(id).then(response => {
      const apt = response.data.apartamento;
      setApartment(apt);
    })
  };

  const deleteApartment = id => {
    ApartmentService.deleteApartment(id).then(response => {

    })
  }

  return (
    <div className="content">
      {tabActive === "search" && 
        <Search 
          apartment={apartment}
          numbersApt={numbersApt}
          selectBlocks={selectBlocks}
          handleSelectApartment={handleSelectApartment}
        />}
      {tabActive === "add" && 
        <Add 
          apartments={apartments}
          setApartments={setApartments}
        />}
      {tabActive === "edit" && 
        <Edit 
          apartments={apartments}
          selectBlocks={selectBlocks}
        />}
      {tabActive === "delete" && 
        <Delete 
          apartment={apartment}
          numbersApt={numbersApt}
          selectBlocks={selectBlocks}
          deleteApartment={deleteApartment}
          handleSelectApartment={handleSelectApartment}
        />}
    </div>
  );
}