import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Add } from "./add";
import { Search } from "./search";
import { Edit } from "./edit";
import { Delete } from "./delete";

import ApartmentService from "../../../services/ApartmentService";
import ResidentService from "../../../services/ResidentService";

const aptOptions = [
  "101", "102", "103", "104", "201", "202", "203", "204"
];

const selectBlocks = ["Não há blocos"];

const initialEditState = {
  numeroApto: "",
  blocoApto: "",
  vagaGaragem: ""
};

export const Resident = ({ tabActive }) => {
  const [residents, setResidents] = useState([]);
  const [apartment, setApartment] = useState([]);
  const [apartments, setApartments] = useState([]);
  const [numbersApt, setNumbersApt] = useState([]);
  const [createData, setCreateData] = useState({});
  const [searchResult, setSearchResult] = useState("");
  const [editData, setEditData] = useState(initialEditState);

  useEffect(() => {
    getApartments();
  }, []);

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

  const getResidents = () => {
    ResidentService.getResidents().then(response => {
      const data = response.data.listaMoradores;

      setResidents(data);
    }).catch(e => (
      toast.error(e.mensagem, {
        position: toast.POSITION.TOP_CENTER
      })
    ));
  };

  const createResident = e => {
    e.preventDefault();

    const body = {
      "morador": {
        ...createData,
        "apartamento": {
          "id": apartment.id
        }
      }
    };

    console.log(body)

    ResidentService.createResident(body).then(response => {
      toast.success(response.data.mensagem, {
        position: toast.POSITION.TOP_CENTER
      });
      return setResidents([ ...residents, createData ]);
    }).catch(e => (
      toast.error(e.mensagem, {
        position: toast.POSITION.TOP_CENTER
      })
    ));
  };

  const deleteResident = id => {
    ResidentService.deleteResident(id).then(response => {
      toast.success(response.data.mensagem, {
        position: toast.POSITION.TOP_CENTER
      });
      getResidents();
    }).catch(e => (
      toast.error(e.mensagem, {
        position: toast.POSITION.TOP_CENTER
      })
    ));
  }

  return (
    <div className="content">
      {tabActive === "search" && 
        <Search
          apartment={apartment}
          residents={residents}
          numbersApt={numbersApt}
          apartments={apartments}
          selectBlocks={selectBlocks}
          getResidents={getResidents}
          searchResult={searchResult}
          setSearchResult={setSearchResult}
          handleSelectApartment={handleSelectApartment}
        />
      }
      {tabActive === "add" && 
        <Add
          createData={createData}
          numbersApt={numbersApt}
          apartments={apartments}
          selectBlocks={selectBlocks}
          setCreateData={setCreateData}
          createResident={createResident}
          handleSelectApartment={handleSelectApartment}
        />
      }
      {tabActive === "edit" && 
        <Edit
          apartments={numbersApt}
          selectBlocks={selectBlocks}
        />
      }
      {tabActive === "delete" && 
        <Delete
          numbersApt={numbersApt}
          selectBlocks={selectBlocks}
          deleteResident={deleteResident}
        />
      }
    </div>
  );
}