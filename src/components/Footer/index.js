import { Container } from "../Container";
import { Icon } from "../../assets/icons";
import { Link } from "../Link";
import "./styles.css";

export const Footer = () => {
  return (
    <footer class="footer" id="footer">
      <Container>
        <div class="footer-left">
          <Link href="/">FAQ</Link>
          <Link href="/">Termos de Uso</Link>
          <Link href="/">Política de Privacidade</Link>
        </div>
        <div class="footer-right">
          <a class="footer-right-icon" href="http://www.facebook.com">
            <Icon icon="facebook" width={24} height={24} className="icon--primary" />
          </a>
          <a class="footer-right-icon" href="http://www.instagram.com">
            <Icon icon="instagram" width={24} height={24} className="icon--primary" />
          </a>
          <a class="footer-right-icon" href="http://www.twitter.com">
            <Icon icon="twitter" width={24} height={24} className="icon--primary" />
          </a>
        </div>
      </Container>
    </footer>
  )
}