import Head from 'next/head';
import Image from "next/image";
// import profilePic from './me.png'

const Home = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>dhappe web services</title>
        <meta name="description" content="Desenvolvedor Front End e UX/UI Designer Localizado no Recife" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="icon" href="./favicon-dhappe.ico" sizes='any' />
      </Head>

      <header className="header">
        <img src="./img/dhappe_logo.svg" alt="Logo empresa dhappe" width="104" height="38" className="dhappe"/>
        <nav>
          <ul className="header-menu">
            <li><a href="#experiencia">Experiência</a></li>
            <li><a href="#formacao">Formação</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><a href="/Novo-Site-dhappe/dhappe2.html">Novo Site</a></li>
            {/* <li><a href="/gerador-de-senhas.html">Gerador de Senha</a></li> */}
          </ul>
        </nav>
      </header>

      <main className="introducao">
        <img src="./img/homedhappeman2.svg" alt="Ilustração de Homem Programando" width="933" height="933" />
        <div>
          <h1>Desenvolvedor<br />Front End &amp;<br />UX/UI Designer</h1>
          <p>Soluções web para as suas necessidades.</p>
        </div>
      </main>

      <section className="experiencia" id="experiencia" aria-label="Experiência">
        <h2 className="subtitulo">Experiência</h2>
        <div>
          <p className="experiencia-texto">Desenvolvo projetos como o Nutri Mariana utilizando apenas <strong>HTML</strong>,
            <strong>CSS</strong> e <strong>JavaScript</strong>. Para aplicativos web como app de acompanhamento nutricional
            Nutri Mari eu trabalhei no <strong>UX</strong> / <strong>UI Design</strong> e no <strong>Backend</strong> do
            projeto.
          </p>

          <div className="empresa">
            <span className="empresa-ano">2021</span>
            <h3 className="empresa-titulo">Nutricionista - Mariana Aparecida</h3>
            <span className="empresa-titulo">Freelancer Desenvolvedor</span>
            <p className="empresa-texto">No projeto <a href="https://www.marianaaparecida.com.br" className="empresa-nutri"
              target="_blank">Nutricionista - Mariana Aparecida</a> eu trabalhei no desenvolvimento completo do HTML, CSS e
              JavaScript do site. Além disso, também construi o app Nutri Mari e prestei consultoria no Design.</p>
            <ul className="empresa-habilidades">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>UX Design</li>
              <li>UI Design</li>
            </ul>
          </div>

          {/* <div className="empresa">
            <span className="empresa-ano">2044-45</span>
            <h3 className="empresa-titulo">Surfbot</h3>
            <span className="empresa-titulo">Estagiário</span>
            <p className="empresa-texto">Surfbot é uma empresa que oferece aulas de surf no Rio de Janeiro. O projeto foi feito com HTML, CSS e JavaScript. Todo o projeto foi feito do zero.</p>
            <ul className="empresa-habilidades">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div> */}

          {/* <div className="empresa">
            <span className="empresa-ano">2044</span>
            <h3 className="empresa-titulo">Brafé</h3>
            <span className="empresa-titulo">Desenvolvedor Júnior</span>
            <p className="empresa-texto">Mais de 3 projetos foram desenvolvidos para a empresa Brafé. Eu trabalhei na criação do email marketing e também no HTML.</p>
            <ul className="empresa-habilidades">
              <li>Email Marketing</li>
              <li>HTML</li>
              <li>UX Design</li>
              <li>UI Design</li>
            </ul>
          </div> */}
        </div>
      </section>

      <section className="formacao" id="formacao" aria-label="Formação">
        <div className="formacao-container">
          <h2 className="subtitulo">Formação</h2>

          <div>
            <p className="formacao-texto">
              Minha mais recente experiência acadêmica foi a <strong>graduação</strong> 🎓 que fiz em <strong>Análise e
                Desenvolvimento de Sistemas</strong>. Além disso me mantenho sempre atualizado com cursos intensivos online
              de professores renomados.
            </p>

            <ul className="faculdade-lista">
              <li className="faculdade">
                <span className="faculdade-tipo">Graduação</span>
                <h3 className="faculdade-curso">Análise e Desenvolvimento de Sistemas</h3>
                <span className="faculdade-instituicao">Estácio Recife</span>
              </li>
              <li className="faculdade">
                <span className="faculdade-tipo">Pós-Graduando</span>
                <h3 className="faculdade-curso">Data Science & Analytics</h3>
                <span className="faculdade-instituicao">UPE - Universidade Estadual de Pernambuco</span>
              </li>
              {/* <li className="faculdade">
                <span className="faculdade-tipo">Mestre</span>
                <h3 className="faculdade-curso">User Experience Design</h3>
                <span className="faculdade-instituicao">UCLL</span>
              </li> */}
            </ul>

            <div className="formacao-extra">
              <div className="cursos">
                <h3>Cursos Intensivos</h3>
                <ul>
                  <li>UX Design &amp; UI Design <span>60h</span></li>
                  <li>Front End para Iniciantes <span>60h</span></li>
                  <li>JavaScript<span>72h</span></li>
                  <li>React Native<span>72h</span></li>
                </ul>
              </div>
              <div className="idiomas">
                <h3>Idiomas</h3>
                <ul>
                  <li className="idiomas-list">Inglês <span>/ Fluente</span></li>
                  <li className="idiomas-list">Espanhol <span>/ Intermediário</span></li>
                  <li className="idiomas-list">Italiano <span>/ Básico</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" id="contato">
        <div className="footer-container">
          <p className="footer-texto">Estou disponível para novos projetos no momento. Entre em contato comigo e marcamos uma
            conversa 👋</p>
          <div className="footer-contato">
            <div className="email">
              <h3>contato@dhappe.com</h3>
            </div>
            <div className="telefone">
              <h3>+55 81 99537-6781</h3>
            </div>
            <div className="social">
              <h3><a href="https://www.instagram.com/diogaoprado/" target="_blank">@diogaoprado</a></h3>
            </div>
          </div>
          <p className="footer-copy">dhappe©. Todos os direitos reservados. 2023 </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
