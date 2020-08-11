## 📚 Instalação e Configuração das Bibliotecas Front-End

**Instalar Template de Typescript do React:** `create-react-app primeiro-projeto-react --template=typescript`

**Instalar o React-Router-DOM:** `yarn add react-router-dom`

**Instalar os tipos do React-Router-DOM:** `yarn add @types/react-router-dom`

**Instalar o Styled-Components:** `yarn add styled-components`

**Instalar os tipos do Styled-Components:** `yarn add @types/styled-components`

**Instalar bilbioteca de cores:** `yarn add polished`

**Instalar React-Icons:** `yarn add react-icons`

## Limpar estrutura do Template

Vamos fazer algumas alterações em arquivos do template que não vamos utilizar, ou que vamos recriar depois.

- Excluir Todos os arquivos .css
- Na pasta 'public' deixar apenas o index.html
- Excluir o Readme.md
- Excluir o App.test.tsx
- Excluir o logo.svg
- Excluir o serviceWorker.ts
- Excluir o setupTests.ts
- Abrir os arquivos 'index.tsx', App.tsx' e 'index.html' e remover as linhas que chamavam os arquivos que excluímos

# React-Scripts

O React-Scripts é um dependência que já vem instalada com o React-App e dentro dela já vem tudo configurado do Babel, Webpack (já tem importação de imagens e estilos também ).Não vamos precisar configurar isso na mão.

"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
},

# React-DOM

No arquivo index.html temos a div 'root' onde todo código React vai ser injetado dentro dessa div.

No src temos o arquivo index.tsx que utiliza o para renderizar nossa aplicação dentro de um elemento da DOM, no caso a div 'root'.

```tsx
import ReactDOM from "react-dom";
document.getElementById("root");
```

# App

O App.tsx é o arquivo principal da aplicação.

No React, sempre escrevemos componentes no formato de função, ou seja, a variável que recebe o componente precisa ser com a tipagem `React.FC`.
A função é escrita assim normalmente:

```tsx
function App() {
  return <h1>Hello World!</h1>;
}
```

Mas setando sua tipagem como um "Function Component do React" (React.FC) ela ficará assim:

```tsx
const App: React.FC = () => <Routes />;
```

Lembrando que componentes, sempre escrevemos com letra maiúscula.

# Rotas

Tudo no react são componentes até as rotas.
No arquivo de rotas, vamos utilizar um component padrão do React chamado Route. Ele tem algumas propriedades (para visualizar basta clicar na tag do componente e pressionar ctrl + espaço).

A primeira propriedade que vamos utilizar é o path, que é o endereço que vamos acessar a primeira página, neste caso, o Dashboard. A outra propriedade será o componente que o usuário verá na tela quando ele acessar esse endereço.

```tsx
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} />
  </Switch>
);
```

Utilizando o React-Router-DOM, temos alguns tipos de rotas. Nessa aplicação usaremos o `BrowserRouter`. Ele funciona como um endereço no browser, permite que eu digite a entidade na URL para acessar a rota correspondente.

Além disso, nossas rotas precisam ter o Switch que permite que apenas uma das rotas seja exibida, não as duas ao mesmo tempo.

# Estilos

Os arquivos .css no React, sempre acabam sendo globais e impactam toda a aplicação. Para resolver isso temos o Styled Components. Ele vai isolar o css para seu respectivo component, assim esse estilo não vai afetar no restante da aplicação (a menos que seja necessário). O estilo agora do componente será .ts e agora vamos criar componentes estilizados.

Aqui vamos criar um componente estilizado Title

```ts
import styled from "styled-components";

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;
```

E vamos importar ele no dashboard e aplicar em volta do nosso título:

```tsx
import React from "react";
import { Title } from "./styles";

const Dashboard: React.FC = () => {
  return <Title> Explore repositórios no Github</Title>;
};

export default Dashboard;
```

## Estilo Global

Também precisamos setar alguns estilos que utilizaremos em toda a aplicação, chamamos de estilo global. Na pasta 'src' vamos criar uma pasta 'styles' e um arquivo 'global.ts'. Vamos importar do 'Styled-Components' o método 'createGlobalStyle'

```ts
import { createGlobalStyle } from "styled-components";
import githubBackground from "../assets/github.svg";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
body{
    background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
}

body , input , button {
    font: 16px Roboto, sans-serif;
}

#root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
}

button{
    cursor: pointer;
}

`;
```

# CSS Tips

Quando eu tenho um elemento precedido do mesmo elemento (ex: listas com `<li>` ou `<a>`) e eu quiser colocar um espaçamento entre eles, faço da seguinte forma:

```css
   a + a {
      margin-top: 16px;
    }
    ``
```

Caso eu esteja usando o encadeamento de estilos, posso substituir o primeiro elemento pelo &:

```css
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;

    & + a {
      margin-top: 16px;
    }

```
