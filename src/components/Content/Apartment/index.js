import { Add } from "./add";
import { Search } from "./search";
import { Edit } from "./edit";
import { Delete } from "./delete";

const selectApartments = ["101","102","103","104","201","202","203","204","301","302","303","304"];
const selectBlocks = ["A","B","C","D"];

const residents = [
  {
    name: "José Silva",
    icon: "personFour",
    cpf: "053.203.234-12",
    birthday: "12/11/1987",
    email: "jose@email.com",
    phone: "(48) 3210-0123 / (48) 9999-9999"
  },
  {
    name: "Maria Silva",
    icon: "personOne",
    cpf: "123.243.225-34",
    birthday: "05/04/1987",
    email: "maria@email.com",
    phone: "(48) 3210-0123 / (48) 9999-9999"
  },
  {
    name: "Billy Silva",
    icon: "personTwo",
    cpf: "003.943.005-04",
    birthday: "17/01/2007",
    email: "billy@gmail.com",
    phone: "(48) 3210-0123 / (48) 9999-9999"
  },
]

export const Apartment = ({ tabActive }) => {
  return (
    <div className="content">
      {tabActive === "search" && <Search selectApartments={selectApartments} selectBlocks={selectBlocks} residents={residents} />}
      {tabActive === "add" && <Add selectApartments={selectApartments} selectBlocks={selectBlocks} residents={residents} />}
      {tabActive === "edit" && <Edit selectApartments={selectApartments} selectBlocks={selectBlocks} residents={residents} />}
      {tabActive === "delete" && <Delete selectApartments={selectApartments} selectBlocks={selectBlocks} residents={residents} />}
    </div>
  );
}