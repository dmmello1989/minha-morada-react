import { Add } from "./add";
import { Search } from "./search";
import { Edit } from "./edit";
import { Delete } from "./delete";

import { Container } from "../../Container";
import { Box } from "../../Box";

const aptOptions = [
  "101", "102", "103", "104", "201", "202", "203", "204"
]

const blockOptions = [
  "A", "B", "C", "D"
]

export const Resident = ({ tabActive }) => {
  return (
    <div className="content">
      {tabActive === "search" && <Search aptOptions={aptOptions} blockOptions={blockOptions} />}
      {tabActive === "add" && <Add aptOptions={aptOptions} blockOptions={blockOptions} />}
      {tabActive === "edit" && <Edit aptOptions={aptOptions} blockOptions={blockOptions} />}
      {tabActive === "delete" && <Delete aptOptions={aptOptions} blockOptions={blockOptions} />}
    </div>
  );
}