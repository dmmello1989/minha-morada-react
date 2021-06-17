import { Add } from "./add";

const contactsList = ["TODOS","A - 101","A - 102","A - 103","A - 104","A - 201","A - 202","A - 203","A - 204","A - 301","A - 302","A - 303","A - 304"];

export const Message = () => {
  return (
    <Add contactsList={contactsList} />
  );
}