# Atlantico Avanti - Desafio 03 - 📜
Bootcamp em Desenvolvimento Full Stack da Atlântico Avanti.
Professor(a): Germanno Gurgel do Amaral Teles (germannoteles@gmail.com )
Monitor(a): Jheyele Raquel (Jheyele@gmail.com)

## Descrição do projeto:
Este projeto é uma aplicação web que utiliza ReactJS como biblioteca principal para o desenvolvimento front-end e React Hooks para gerenciar o estado da aplicação. Ele faz requisições HTTP para uma API no backend e exibe os dados retornados de forma interativa para a API de previsão do tempo da OpenWeatherMap e exibe os dados retornados de forma interativa.

Os dados apresentados são:
- Temperatura
- Temperatura mínima
- Temperatura máxima
- Descrição do tempo
- Longitude
- Latitude
- Humidade
- Velocidade do vento

## Características Principais:
1. **ReactJS e React Hooks**: O projeto utiliza o ReactJS como biblioteca principal e enfatiza o uso de React Hooks, como `useState`, `useEffect`, `useContext`, entre outros, para gerenciar o estado e o ciclo de vida dos componentes.

2. **Requisições HTTP com Axios**: Utiliza a biblioteca Axios para fazer requisições HTTP para a API de previsão do tempo da OpenWeatherMap. Os dados da previsão do tempo são recuperados e exibidos na aplicação.

3. **Componente de Lista**: Implementa um componente de lista que exibe os dados da previsão do tempo retornados pela API. Os dados podem ser exibidos em forma de lista de itens, cartões ou qualquer outra estrutura visual. O estado dos dados é gerenciado usando `useState`.

4. **Context API e useContext**: Utiliza o Context API e `useContext` para gerenciar o estado da aplicação, permitindo que os dados da previsão do tempo sejam compartilhados entre os componentes de forma eficiente.

5. **Componente de Pesquisa**: Implementa um componente de pesquisa que permite aos usuários buscar a previsão do tempo com base em um local específico. O estado da pesquisa é gerenciado usando `useState`.

6. **Estilização**: Estiliza a aplicação utilizando CSS ou uma biblioteca de estilos, como o styled-components. Também utiliza `useState` para alternar entre diferentes estilos ou temas, proporcionando uma experiência visual agradável aos usuários.

## API de Previsão do Tempo da OpenWeatherMap
Este projeto utiliza a API de previsão do tempo da OpenWeatherMap para obter informações meteorológicas. Para mais detalhes sobre esta API e como usá-la, consulte a [documentação da API da OpenWeatherMap](https://openweathermap.org/api).
   
## Frameworks utilizadas:
- axios: ^1.5.0,
- dotenv: ^16.3.1,
- react: ^18.2.0,
- react-dom: ^18.2.0,
- react-router-dom: ^6.3.0,
- styled-components: ^6.0.8

## Instalação
1. Clone este repositório:
  - git clone https://github.com/seu-usuario/projeto-Desafio-03.git
3. Navegue até o diretório do projeto:
  - cd projeto-Desafio-03
3  Instale as dependências:
  - npm install
4. Crie um arquivo .env no projeto, com a seguinte variável contendo sua API keys da API openweathermap:
   - VITE_API_KEY = "API KEY"
   - VITE_BASE_URL = "https://api.openweathermap.org/data/2.5/"
5. Inicie a aplicação:
  - npm start
  
## Equipe:
- Ana Virginia (virginia.cloud.tec@gmail.com)																					
- Mateus Vitor (mateusvitor01.mv@gmail.com)
- Matheus Prado (matheus.filgueiras17@gmail.com) 

