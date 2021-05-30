import { Resident } from "./Resident";
import { Room } from "./Room";
import { Schedule } from "./Schedule";
import { Apartment } from "./Apartment";
import { Assembly } from "./Assembly";
import { Message } from "./Message";

export const Content = ({ menuActive, tabActive }) => {
  switch (menuActive) {
    case "resident":
      return <Resident tabActive={tabActive} />;
    case "room":
      return <Room tabActive={tabActive} />;
    case "schedule":
      return <Schedule tabActive={tabActive} />;
    case "apartment":
      return <Apartment tabActive={tabActive} />;
    case "assembly":
      return <Assembly tabActive={tabActive} />;
    case "message":
      return <Message tabActive={tabActive} />;
    default:
      return null;
  }
}