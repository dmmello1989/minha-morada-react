import { Icon } from "../../assets/icons";

import "./styles.css";

export const TabMenu = ({ tabActive, setTabActive, isSchedule, isMessage }) => {
  const menuItems = [
    {
      icon: "add",
      label: "Cadastrar"
    },
    {
      icon: "search",
      label: "Consultar"
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

  const scheduleItems = [
    {
      icon: "add",
      label: "Agendar"
    },
    {
      icon: "delete",
      label: "Cancelar"
    }
  ]

  return (
    <>
      {isMessage ? null : (
        <ul className="tab-menu">
          {isSchedule ? (
            <>
              {scheduleItems.map((item, index) => {
                const isActive = tabActive === item.icon ? "tab-active" : "";
        
                return (
                  <li className={`tab-menu__item ${isActive}`} key={`tab-menu-item-${index}`} onClick={() => setTabActive(item.icon)}>
                    <div className={`tab-menu__image ${isActive}`}>
                      <Icon icon={item.icon} width={24} height={24} />
                    </div>
                    <span className={`tab-menu__text ${isActive}`}>{item.label}</span>
                  </li>
                )
              })}
            </>
          ) : (
            <>
              {menuItems.map((item, index) => {
                const isActive = tabActive === item.icon ? "tab-active" : "";
        
                return (
                  <li className={`tab-menu__item ${isActive}`} key={`tab-menu-item-${index}`} onClick={() => setTabActive(item.icon)}>
                    <div className={`tab-menu__image ${isActive}`}>
                      <Icon icon={item.icon} width={24} height={24} />
                    </div>
                    <span className={`tab-menu__text ${isActive}`}>{item.label}</span>
                  </li>
                )
              })}
            </>
          )}
        </ul>
      )}
    </>
  );
}