## 📚 Instalação e Configuração das Bibliotecas Front-End

**Instalar Template de Typescript do React:** `create-react-app primeiro-projeto-react --template=typescript`

**Instalar o React-Router-DOM:** `yarn add react-router-dom`

**Instalar os tipos do React-Router-DOM:** `yarn add @types/react-router-dom`

**Instalar o Styled-Components:** `yarn add styled-components`

**Instalar os tipos do Styled-Components:** `yarn add @types/styled-components`

**Instalar bilbioteca de cores:** `yarn add polished`

**Instalar React-Icons:** `yarn add react-icons`

**Instalar Axios**: `yarn add axios`

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
import ReactDOM from 'react-dom';
document.getElementById('root');
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
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;
```

E vamos importar ele no dashboard e aplicar em volta do nosso título:

```tsx
import React from 'react';
import { Title } from './styles';

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
```

```css
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

# API Client

Na pasta src, criar a pasta services e o arquivo 'api.ts'.
Dentro da função create() do axios, vamos colocar a baseURL, que é o endereço que vai ser repetido em todas as requisições. Nessa aplicação vamos utilizar a api do Github: `https://api.github.com/`.

```ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;
```

Vamos importar a api em todas as páginas da nossa aplicação, nesse caso no Dashboard (página inicial) e Repository (página de listagem).

# Página: Dashboard

Agora criaremos uma função para a adição de novos repositórios (mais um item na lista). A lógica é a seguinte: Para a adiação de um novo repositório, precisamos:

- Ter acesso ao valor que foi digitado dentro do input de busca
- Consumir a API do Github
- Salvar novo repositório no estado

## Ter acesso ao valor que foi digitado dentro do input de busca

Existem diversas formas de armazenar o valor do input, mas aqui usaremos o 'useState()'. A primeira variável é o estado em si, a segunda é uma função que usaremos quando quisermos alterá-lo, e dentro do 'useState()' é o estado inicial, ou seja, vazio.

```tsx
const [newRepo, setNewRepo] = useState('');
```

## Consumir a API do Github

Para criar nossa busca de repositórios do Github, também usaremos o 'useState()'.

```tsx
const [repositories, setRepositories] = useState([]);
```

Agora no 'input', colocaremos o 'value' como 'newRepo', e o 'onChange' faremos um evento (e) que vai armazenar o valor do input. Vamos passar como parâmetro para a função 'setNewRepo()';

```tsx
<input
  value={newRepo}
  onChange={(e) => setNewRepo(e.target.value)}
  type="text"
  placeholder="Digite o nome do repositório"
/>
```

No form, colocaremos um submit para acionar a função de adição de repositório quando o formulário form enviado.

```tsx
<Form onSubmit={handleAddRepository}>
```

A função que lida com a adição do novo repositório é a 'handleAddRepository()'. Como estamos chamando ela por meio de um submit do form, precisamos informar que não precisaremos ser redirecionados para outra página, evento padrão do html. Fazemos isso por meio do método 'FormEvent' do React, e colocando o evento como parâmtro da função. Dentro da função executaremos o 'preventDefault()' que impede o redirecionamento da página.

```tsx
function handleAddRepository(event: FormEvent<HTMLFormElement>): void {
  event.preventDefault();
}
```

Sempre que criamos um estado que não é do tipo padrão (string, boolean, numer), ou seja, é um array ou objeto, precisamos informar qual o tipo desse estado.

```tsx
interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}
```

No final, a função 'handleAddRepository' vai ficar assim. Depois de adicionar o novo repositório nos repositórios existentes, chamamos a função setNewRepo() vazia para limpar o input de busca.

```tsx
async function handleAddRepository(
  event: FormEvent<HTMLFormElement>
): Promise<void> {
  event.preventDefault();

  const response = await api.get<Repository>(`repos/${newRepo}`);

  const repository = response.data;

  setRepositories([...repositories, repository]);

  setNewRepo('');
}
```
