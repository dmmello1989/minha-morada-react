import { Container } from "../Container";
import { Icon } from "../../assets/icons";
import { Link } from "../Link";
import "./styles.css";

export const Header = () => {
  return (
    <header class="header">
      <Container>
        <Link href="/index.html">
          <div class="header__logo">
            <Icon icon="logo" width={80} height={80} />
            <span class="header__text">Minha Morada</span>
          </div>
        </Link>
        <div class="header__nav">
          <Link href="/" className="link--header">FAQ</Link>
          <Link href="/" className="link--header">Serviços</Link>
          <Link href="/" className="link--header">Sobre</Link>
        </div>
      </Container>
    </header>
  )
}