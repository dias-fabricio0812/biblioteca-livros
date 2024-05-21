# Catálogo de Livros com Paginação - Node.js e MongoDB

Este projeto é uma aplicação web simples para exibir um catálogo de livros com paginação, desenvolvida utilizando Node.js, Express, MongoDB e Python. A aplicação permite navegar entre páginas de livros com controles de paginação, além de exibir a contagem de livros na página atual e o total de livros no catálogo.

## Funcionalidades

- Listagem de livros com detalhes como título, autor, ISBN, páginas, ano e valor.
- Páginação com controles de navegação para:
  - Ir para a primeira página.
  - Ir para a página anterior.
  - Navegar entre cinco páginas consecutivas.
  - Ir para a próxima página.
  - Ir para a última página.
- Contador que exibe a quantidade de livros na página atual e total de livros no catálogo.

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- EJS (Embedded JavaScript templates)
- HTML, CSS
- Python

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js, MongoDB e o Python instalados na sua máquina.

- [Node.js](https://nodejs.org/en)
- [MongoDB](https://www.mongodb.com/)
- [Python](https://www.python.org/)

## Instruções para Instalação e Execução

1. Clone o repositório:
> git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. Navegue até o diretório do projeto:
> cd nome-do-repositorio

3. Instale as dependências:
> npm install

4. Instale o pymongo utilizado para inserir os dados no MongoDB:
> pip install pymongo

5. Certifique-se de que o MongoDB está rodando localmente em **mongodb://localhost:27017** e que há uma base de dados chamada **biblioteca** com uma coleção **livros**.

6. Insira os livros:
> py inserir_livros.py

7. Inicie o servidor:
> node app.js

8. Abra o navegador e acesse **http://localhost:3000** para visualizar a aplicação.

## Estrutura do Projeto

- **app.js**: Configuração do servidor e lógica de paginação.
- **views/index.ejs**: Template EJS para renderização da página.
- **public/css/styles.css**: Estilos CSS para a aplicação.
- **inserir_livros.py**: Script Python para inserir dados no MongoDB a partir de um arquivo CSV.
- **livros.csv**: Arquivo CSV contendo os dados dos livros.
- **package.json**: Dependências e informações do projet