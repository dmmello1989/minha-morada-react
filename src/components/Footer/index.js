import { Container } from "../Container";
import { Icon } from "../../assets/icons";
import { Link } from "../Link";
import "./styles.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-left">
          <Link href="/">FAQ</Link>
          <Link href="/">Termos de Uso</Link>
          <Link href="/">Política de Privacidade</Link>
        </div>
        <div className="footer-right">
          <a className="footer-right-icon" href="http://www.facebook.com">
            <Icon icon="facebook" width={24} height={24} className="icon--primary" />
          </a>
          <a className="footer-right-icon" href="http://www.instagram.com">
            <Icon icon="instagram" width={24} height={24} className="icon--primary" />
          </a>
          <a className="footer-right-icon" href="http://www.twitter.com">
            <Icon icon="twitter" width={24} height={24} className="icon--primary" />
          </a>
        </div>
      </Container>
    </footer>
  )
}