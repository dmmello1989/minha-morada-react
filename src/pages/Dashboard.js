import { useState } from "react";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { MainBox } from "../components/MainBox";
import { Footer } from "../components/Footer";

export const Dashboard = () => {
  const [menuActive, setMenuActive] = useState("resident");
  const [tabActive, setTabActive] = useState("add");

  const handleNavigation = menu => {
    setTabActive("add");
    setMenuActive(menu);
  };

  return(
    <div className="page-wrapper">
      <Header isDashboard={true} />
      <Menu 
        menuActive={menuActive}
        handleNavigation={handleNavigation}
      />
      <MainBox
        tabActive={tabActive}
        menuActive={menuActive}
        setTabActive={setTabActive}
      />
      <Footer />
    </div>
  )
}