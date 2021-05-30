import { useState } from "react";
import { Container } from "../Container";
import { Content } from "../Content";
import { TabMenu } from "../TabMenu";
import "./styles.css";

export const MainBox = ({ menuActive }) => {
  const [tabActive, setTabActive] = useState("search");

  return (
    <Container className="container--main">
      <div className="main-box">
        <TabMenu tabActive={tabActive} setTabActive={setTabActive} />
        <div className="main-box__content">
          <Content menuActive={menuActive} tabActive={tabActive} />
        </div>
      </div>
    </Container>
  );
}