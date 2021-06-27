import { Container } from "../Container";
import { Icon } from "../../assets/icons";
import { Link } from "../Link";
import "./styles.css";

export const Header = ({ isDashboard }) => {
  return (
    <header className="header">
      <Container>
        <Link href="/index.html">
          <div className="header__logo">
            <Icon icon="logo" width={80} height={80} />
            <span className="header__text">Minha Morada</span>
          </div>
        </Link>
        {isDashboard ? (
          <div className="header-nav">
            <h2>Olá, <strong>Daniel</strong></h2>
          </div>
        ) : (
          <div className="header__nav">
            <Link href="/" className="link--header">FAQ</Link>
            <Link href="/" className="link--header">Serviços</Link>
            <Link href="/" className="link--header">Sobre</Link>
          </div>
        )}
      </Container>
    </header>
  )
}