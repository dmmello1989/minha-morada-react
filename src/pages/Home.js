import { useHistory } from "react-router-dom";

import { Header } from "../components/Header";
import { Container } from "../components/Container";
import { Box } from "../components/Box";
import { Input } from "../components/Input";
import { Link } from "../components/Link";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import "../styles/home.css";

export const Home = () => {
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/dashboard");
  }

  return (
    <div className="page-wrapper">
      <Header />
        <main className="main">
          <Container className="container--home">
            <div className="main--left">
              <span className="main__text--small">Meu lar,</span>
              <h1 className="main__title">Minha Morada</h1>
              <h2 className="main__subtitle">
                Todas as informações sobre  o seu <br/>
                <span className="main__subtitle--blue is-bold">condomínio</span> em um só lugar.
              </h2>
            </div>

            <div className="main--right">
              <Box>
                <h3 className="main__title--form is-bold">Login</h3>
                <form className="form" action="login" onSubmit={(e) => handleSubmit(e)}>

                  <Input
                    name="email"
                    type="email"
                    label="E-mail"
                  />
                  <Input
                    name="password"
                    type="password"
                    label="Senha"
                  />

                  <div className="form__action">
                    <Link className="link--blue is-bold" href="/">Esqueceu sua senha?</Link>
                    <Button className="button--small button--has-m-bottom button--full-width" type="submit">Entrar</Button>
                    <span>Não tem conta? <Link className="link--blue is-bold" href="/">Cadastre-se aqui</Link>.</span>
                  </div>
                </form>
              </Box>
            </div>
          </Container>
        </main>
      <Footer />
    </div>
  )
}