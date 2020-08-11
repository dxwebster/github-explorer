import React from "react";
import { FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title> Explore repositórios no Github </Title>

      <Form action="">
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit"> Pesquisar </button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/61834475?s=460&u=70c1e1887730301017571eabf514e679135b9c08&v=4"
            alt="Adriana Lima"
          />
          <div>
            <strong>NLW2-Proffy</strong>
            <p>
              Aplicação "Proffy" desenvolvida na Next Level Week #2 da
              Rocketseat
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/61834475?s=460&u=70c1e1887730301017571eabf514e679135b9c08&v=4"
            alt="Adriana Lima"
          />
          <div>
            <strong>NLW2-Proffy</strong>
            <p>
              Aplicação "Proffy" desenvolvida na Next Level Week #2 da
              Rocketseat
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/61834475?s=460&u=70c1e1887730301017571eabf514e679135b9c08&v=4"
            alt="Adriana Lima"
          />
          <div>
            <strong>NLW2-Proffy</strong>
            <p>
              Aplicação "Proffy" desenvolvida na Next Level Week #2 da
              Rocketseat
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
