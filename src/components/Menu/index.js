import { Container } from "../Container";
import { Icon } from "../../assets/icons";

import "./styles.css";

export const Menu = ({ menuActive, handleNavigation }) => {
  const menuItems = [
    {
      icon: "resident",
      label: "Condôminos"
    },
    {
      icon: "room",
      label: "Espaços"
    },
    {
      icon: "schedule",
      label: "Agendar Espaços"
    },
    {
      icon: "apartment",
      label: "Apartamentos"
    },
    {
      icon: "assembly",
      label: "Assembléias"
    },
    {
      icon: "message",
      label: "Mensagens"
    },
  ];

  return (
    <div className="menu">
      <Container className="container--menu">
        <ul className="menu__list">
          {menuItems.map((item, index) => {
            const isActive = menuActive === item.icon ? "active" : "";

            return (
              <li className="menu__item" key={`menu-item-${index}`} onClick={() => handleNavigation(item.icon)}>
                <div className={`menu__image ${isActive}`}>
                  <Icon icon={item.icon} width={42} height={42} />
                </div>
                <span className={`menu__text ${isActive}`}>{item.label}</span>
              </li>
            )
          })}
        </ul>
      </Container>
    </div>
  );
}