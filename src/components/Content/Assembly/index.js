import { Add } from "./add";
import { Search } from "./search";
import { Edit } from "./edit";
import { Delete } from "./delete";

const assemblies = [
  {
    type: "Assembléia Extraordinária",
    date: "22/07/2020",
  },
  {
    type: "Assembléia Geral Ordinária",
    date: "20/06/2020",
  },
  {
    type: "Assembléia Extraordinária",
    date: "19/05/2020",
  },
]

export const Assembly = ({ tabActive }) => {
  return (
    <div className="content">
      {tabActive === "search" && <Search assemblies={assemblies} />}
      {tabActive === "add" && <Add />}
      {tabActive === "edit" && <Edit assemblies={assemblies} />}
      {tabActive === "delete" && <Delete assemblies={assemblies} />}
    </div>
  );
}