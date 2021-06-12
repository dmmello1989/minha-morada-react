import { Add } from "./add";
import { Delete } from "./delete";

const roomSchedules = [
  {
    name: "Salão de Festas",
    date: "22/07/2020",
    status: "available"
  },
  {
    name: "Salão Gourmet",
    date: "02/05/2020",
    status: "unavailable"
  },
  {
    name: "Sala de Jogos",
    date: "19/01/2020",
    status: "unavailable"
  }
];

export const Schedule = ({ tabActive }) => {
  return (
    <>
      {tabActive === "add" && <Add roomSchedules={roomSchedules} />}
      {tabActive === "delete" && <Delete roomSchedules={roomSchedules} />}
    </>
  );
}