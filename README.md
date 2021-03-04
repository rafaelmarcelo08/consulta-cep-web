### [Veja o app rodando](https://consulta-cep-web.herokuapp.com/)

![Netlify Status](https://api.netlify.com/api/v1/badges/94f8a470-f5dc-4d97-bf4a-2c69e20bec2f/deploy-status)

## Projeto desenvolvido com ReactJS🚀

## 📚 Sobre o projeto

O projeto foi desenvolvido na parte de Front-End em ReactJS, no qual, o Front-End consome a API:  [ViaCEP](https://viacep.com.br/)

## 💻 Para acessar o webservice de CEP

Para acessar o webservice, um CEP no formato de {8} dígitos deve ser fornecido, por exemplo: "01001000".

## 🌎 Como é feito a requisição:
<strong>JSON</strong>

```bash
URL: viacep.com.br/ws/01001000/json/
```

    {
      "cep": "01001-000",
      "logradouro": "Praça da Sé",
      "complemento": "lado ímpar",
      "bairro": "Sé",
      "localidade": "São Paulo",
      "uf": "SP",
      "ibge": "3550308",
      "gia": "1004",
      "ddd": "11",
      "siafi": "7107"
    }
    
A requisição é feita através de uma URL, a mesma será dinâmica, sendo capaz de pesquisar vários CEP. A resposta será entregue no formato JSON, a partir dessa resposta será estruturado os valores nos respectivos lugares do layout da página. 

## 🛠 Tecnologias

> **Front-End:**

> - HTML5 
> - CSS3
> - JavaScript
> - ReactJS
> - Heroku
> - Técnicas de Responsivo
> - Git (Controle de Versionamento)

[ReactJS](https://pt-br.reactjs.org/) - O ReactJS ou React é uma biblioteca que permite criar interfaces para web usando JavaScript.

[Heroku](https://www.heroku.com/) - Heroku é uma plataforma em nuvem como um serviço que suporta várias linguagens de programação.

## 🔖 Layout

No link abaixo você encontra o layout do projeto web e também do mobile. Lembrando que você precisa ter uma conta no [Figma](http://figma.com/) para acessá-lo.

- [Layout Web](https://www.figma.com/file/sgeb4rEgPUEWtAH2goNolJ/consulte-cep-web?node-id=0%3A1)

## 🚀 Como executar o projeto

Para baixar o repositório local: 

```bash
git clone
```
Para instalar as dependências execulte o comando:

```bash
npm install
```
ou 
```bash
yarn install
```

Para rodar a aplicação execute:
```bash
npm start
```
ou 
```bash
yarn start
```

## 📝 Licença

Este projeto está sobe a licença de <strong>Rafael Marcelo</strong>
