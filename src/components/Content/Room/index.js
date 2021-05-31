import { Add } from "./add";
import { Search } from "./search";
import { Edit } from "./edit";
import { Delete } from "./delete";

const rooms = [
  "Salão de Festas",
  "Salão Gourmet",
  "Sala de Jogos",
];

export const Room = ({ tabActive }) => {
  return (
    <div className="content">
      {tabActive === "search" && <Search rooms={rooms} />}
      {tabActive === "add" && <Add rooms={rooms} />}
      {tabActive === "edit" && <Edit rooms={rooms} />}
      {tabActive === "delete" && <Delete rooms={rooms} />}
    </div>
  );
}