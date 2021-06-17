import { Container } from "../Container";
import { Content } from "../Content";
import { TabMenu } from "../TabMenu";
import "./styles.css";

export const MainBox = ({ menuActive, tabActive, setTabActive }) => {
  return (
    <Container className="container--main">
      <div className="main-box">
        <TabMenu tabActive={tabActive} setTabActive={setTabActive} isSchedule={menuActive === "schedule"} isMessage={menuActive === "message"} />
        <div className="main-box__content">
          <Content menuActive={menuActive} tabActive={tabActive} />
        </div>
      </div>
    </Container>
  );
}