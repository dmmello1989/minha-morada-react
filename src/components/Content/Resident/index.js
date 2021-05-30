import { Add } from "./add";
import { Search } from "./search";
import { Edit } from "./edit";
import { Delete } from "./delete";

import { Container } from "../../Container";
import { Box } from "../../Box";

export const Resident = ({ tabActive }) => {
  return (
    <div className="content">
      {tabActive === "search" && <Search />}
      {tabActive === "add" && <Add />}
      {tabActive === "edit" && <Edit />}
      {tabActive === "delete" && <Delete />}
    </div>
  );
}