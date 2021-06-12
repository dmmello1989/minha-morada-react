import { Add } from "./add";
import { Search } from "./search";
import { Edit } from "./edit";
import { Delete } from "./delete";

export const Assembly = ({ tabActive }) => {
  return (
    <div className="content">
      {tabActive === "search" && <Search />}
      {tabActive === "add" && <Add />}
      {tabActive === "edit" && <Edit />}
      {tabActive === "delete" && <Delete />}
    </div>
  );
}