import { useState } from "react";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { MainBox } from "../components/MainBox";
import { Footer } from "../components/Footer";

export const Dashboard = () => {
  const [menuActive, setMenuActive] = useState("resident");

  return(
    <div className="page-wrapper">
      <Header />
      <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
      <MainBox menuActive={menuActive} />
      <Footer />
    </div>
  )
}