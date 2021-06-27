import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Add } from "./add";
import { Search } from "./search";
import { Edit } from "./edit";
import { Delete } from "./delete";

import ApartmentService from "../../../services/ApartmentService";

const selectBlocks = ["Não há blocos"];

const initialEditState = {
  numeroApto: "",
  blocoApto: "",
  vagaGaragem: ""
};

export const Apartment = ({ tabActive }) => {
  const [apartment, setApartment] = useState({});
  const [apartments, setApartments] = useState([]);
  const [numbersApt, setNumbersApt] = useState([]);
  const [createData, setCreateData] = useState({});
  const [editData, setEditData] = useState(initialEditState);

  useEffect(() => {
    getApartments();
  }, []);

  useEffect(() => {
    setApartment({});
    getApartments();
  }, [tabActive]);

  const handleSelectApartment = id => {
    const selectApt = apartments.find(it => it.numeroApto === id);

    getApartment(selectApt.id);
  };

  // HTTP METHODS
  // __________________
  const getApartments = () => {
    ApartmentService.getApartments().then(response => {
      const data = response.data.listaApartamentos;
      const numberApt = data.map(apt => apt.numeroApto);

      setApartments(data);
      setNumbersApt(numberApt);
    }).catch(e => (
      toast.error(e.mensagem, {
        position: toast.POSITION.TOP_CENTER
      })
    ));
  };

  const getApartment = id => {
    ApartmentService.getApartment(id).then(response => {
      const apt = response.data.apartamento;
      setApartment(apt);
    }).catch(e => (
      toast.error(e.mensagem, {
        position: toast.POSITION.TOP_CENTER
      })
    ));
  };

  const createApartment = (e) => {
    e.preventDefault();

    const body = {
      "apartamento": {
        ...createData
      }
    }

    console.log(body)

    ApartmentService.createApartment(body).then(response => {
      toast.success(response.data.mensagem, {
        position: toast.POSITION.TOP_CENTER
      });
      return setApartments([ ...apartments, createData ]);
    }).catch(e => (
      toast.error(e.mensagem, {
        position: toast.POSITION.TOP_CENTER
      })
    ));
  };

  const editApartment = (e, id) => {
    e.preventDefault();

    const body = {
      "apartamento": {
        ...editData
      }
    }

    ApartmentService.editApartment(id, body).then(response => {
      toast.success(response.data.mensagem, {
        position: toast.POSITION.TOP_CENTER
      });
      return setApartments([ ...apartments, editData ]);
    }).catch(e => (
      toast.error(e.mensagem, {
        position: toast.POSITION.TOP_CENTER
      })
    ));
  };

  const deleteApartment = id => {
    ApartmentService.deleteApartment(id).then(response => {
      toast.success(response.data.mensagem, {
        position: toast.POSITION.TOP_CENTER
      });
      getApartments();
    }).catch(e => (
      toast.error(e.mensagem, {
        position: toast.POSITION.TOP_CENTER
      })
    ));
  };

  return (
    <div className="content">
      {tabActive === "search" && 
        <Search 
          apartment={apartment}
          numbersApt={numbersApt}
          selectBlocks={selectBlocks}
          getApartments={getApartments}
          handleSelectApartment={handleSelectApartment}
        />}
      {tabActive === "add" && 
        <Add 
          createData={createData}
          apartments={apartments}
          setCreateData={setCreateData}
          setApartments={setApartments}
          createApartment={createApartment}
        />}
      {tabActive === "edit" && 
        <Edit
          editData={editData}
          apartment={apartment}
          numbersApt={numbersApt}
          setEditData={setEditData}
          selectBlocks={selectBlocks}
          editApartment={editApartment}
          handleSelectApartment={handleSelectApartment}
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