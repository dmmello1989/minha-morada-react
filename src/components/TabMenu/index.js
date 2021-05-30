import { Container } from "../Container";
import { Icon } from "../../assets/icons";

import "./styles.css";

export const TabMenu = ({ tabActive, setTabActive }) => {
  const menuItems = [
    {
      icon: "search",
      label: "Consultar"
    },
    {
      icon: "add",
      label: "Cadastrar"
    },
    {
      icon: "edit",
      label: "Editar"
    },
    {
      icon: "delete",
      label: "Excluir"
    },
  ];

  return (
    <ul className="tab-menu">
      {menuItems.map((item, index) => {
        const isActive = tabActive === item.icon ? "tab-active" : "";

        return (
          <li className="tab-menu__item" key={`tab-menu-item-${index}`} onClick={() => setTabActive(item.icon)}>
            <div className={`tab-menu__image ${isActive}`}>
              <Icon icon={item.icon} width={24} height={24} />
            </div>
            <span className={`tab-menu__text ${isActive}`}>{item.label}</span>
          </li>
        )
      })}
    </ul>
  );
}