import React from "react";
import "./App.css";
import logo from "./assets/logo.png";
import weed1 from "./assets/weed1.jpg";
import weed2 from "./assets/weed2.jpg";
import weed3 from "./assets/weed3.jpeg";
import weed4 from "./assets/weed4.jpg";
import weed5 from "./assets/weed5.jpeg";
import weed6 from "./assets/weed6.jpg";
import weed7 from "./assets/weed7.jpg";
import weed8 from "./assets/weed8.jpg";
import cannabis from "./assets/cannabis_faz_bem.jpg";

function App() {
  return (
    <div className="App">
      <header className="header">
        <a href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <div>
          <ul className="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Strains</a>
            </li>
            <li>
              <a href="/">Contato</a>
            </li>
          </ul>
        </div>
      </header>

      <h1>Green World</h1>

      <section className="flex">
        <div>
          <img src={weed4} alt="weed" />
          <h2>Weed 1</h2>
          <i>
            Blue Dream, a sativa-dominant hybrid originating in California, has
            achieved legendary status among West Coast strains. Crossing
            Blueberry with Haze, Blue Dream balances full-body relaxation with
            gentle cerebral invigoration. Novice and veteran consumers alike
            enjoy the level effects of Blue Dream, which ease you gently into a
            calm euphoria. With a sweet berry aroma redolent of its Blueberry
            parent, Blue Dream delivers swift symptom relief without heavy
            sedative effects. This makes Blue Dream a popular daytime medicine
            for patients treating pain, depression, nausea, and other ailments
            requiring a high THC strain.{" "}
          </i>
        </div>

        <div>
          <img src={weed6} alt="weed" />
          <h2>Weed 1</h2>
          <i>
            Blue Dream, a sativa-dominant hybrid originating in California, has
            achieved legendary status among West Coast strains. Crossing
            Blueberry with Haze, Blue Dream balances full-body relaxation with
            gentle cerebral invigoration. Novice and veteran consumers alike
            enjoy the level effects of Blue Dream, which ease you gently into a
            calm euphoria. With a sweet berry aroma redolent of its Blueberry
            parent, Blue Dream delivers swift symptom relief without heavy
            sedative effects. This makes Blue Dream a popular daytime medicine
            for patients treating pain, depression, nausea, and other ailments
            requiring a high THC strain.{" "}
          </i>
        </div>

        <div>
          <img src={weed2} alt="weed" />
          <h2>Weed 1</h2>
          <i>
            Blue Dream, a sativa-dominant hybrid originating in California, has
            achieved legendary status among West Coast strains. Crossing
            Blueberry with Haze, Blue Dream balances full-body relaxation with
            gentle cerebral invigoration. Novice and veteran consumers alike
            enjoy the level effects of Blue Dream, which ease you gently into a
            calm euphoria. With a sweet berry aroma redolent of its Blueberry
            parent, Blue Dream delivers swift symptom relief without heavy
            sedative effects. This makes Blue Dream a popular daytime medicine
            for patients treating pain, depression, nausea, and other ailments
            requiring a high THC strain.{" "}
          </i>
        </div>
      </section>

      <h1>Notícias</h1>

      <section className="grid">
        <div className="main-noticia">
          <img src={cannabis} alt="teste" />
          <h2>Maconha pode fazer bem à saúde?</h2>
          <p>
            O uso da maconha tem sido estudado como auxiliar do tratamento de
            alguns problemas de saúde, porém a indicação do seu uso para
            tratamentos ainda é tema de muitas discussões e estudos,
            permanecendo como droga ilícita no Brasil e na maioria dos países. O
            uso da maconha com fins terapêuticos tem sido bastante estudado como
            no tratamento de dores neuropáticas crônicas em pacientes com HIV
            positivo, no alívio de enjoos, como sedativo, no glaucoma, na
            redução da ansiedade e melhora do humor. A maconha ou cannabis é uma
            planta da qual podem ser extraídas cerca de 400 substâncias
            químicas, dentre elas, o tetrahidrocanabinol (THC), que é o
            principal responsável pelos seus efeitos psicoativos. O seu uso
            eventual pode levar à deficiências nos processos de aprendizagem e
            memória e nas atividades psicomotoras que necessitam de coordenação
            e atenção. Quando usada de forma crônica, a maconha pode piorar os
            distúrbios psiquiátricos como a esquizofrenia, causar problemas
            respiratórios e prejuízo das atividades diárias como trabalho e
            estudo.
          </p>
        </div>

        <div className="sidebar">
          <div>
            <img src={weed1} alt="weed" />
            <h2>Weed 1</h2>
          </div>

          <div>
            <img src={weed2} alt="weed" />
            <h2>Weed 2</h2>
          </div>

          <div>
            <img src={weed3} alt="weed" />
            <h2>Weed 3</h2>
          </div>

          <div>
            <img src={weed4} alt="weed" />
            <h2>Weed 4</h2>
          </div>

          <div>
            <img src={weed5} alt="weed" />
            <h2>Weed 5</h2>
          </div>

          <div>
            <img src={weed6} alt="weed" />
            <h2>Weed 6</h2>
          </div>
        </div>
      </section>

      <h3>Noticias 2</h3>

      <section className="grid3">
        <div className="grid3-item">
          <img src={weed8} alt="weed" />
          <p>Nome da maconha</p>
        </div>

        <div className="grid3-item2">
          <img src={weed7} alt="weed" />
          <p>Nome da maconha</p>
        </div>

        <div className="grid3-item3">
          <img src={weed7} alt="weed" />
          <p>Nome da maconha</p>
        </div>

        <div className="grid3-item2">
          <img src={weed7} alt="weed" />
          <p>Nome da maconha</p>
        </div>

        <div className="grid3-item2">
          <img src={weed7} alt="weed" />
          <p>Nome da maconha</p>
        </div>

        <div className="grid3-item2">
          <img src={weed7} alt="weed" />
          <p>Nome da maconha</p>
        </div>
      </section>
    </div>
  );
}

export default App;
