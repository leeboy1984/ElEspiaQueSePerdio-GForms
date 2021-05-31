# El Espía que se perdió - GForms edition

En este repositorio encontrarás todo lo que necesitas para la creación de partidas de este gran juego en modo remoto y apoyados en Google Forms.

La parte web de este juego está hecha con GatsbyJS, para cualquier duda sobre GatsbyJS puedes visitar la [Documentadión de Gatsby - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

Puedes ver una versión previa [aqui](https://elespiaqueseperdio.netlify.app/)

Para este tablero se ha seguido el Starter de GatsbyJS [gatsby-starter-multiverse](https://github.com/anubhavsrivastava/gatsby-starter-multiverse)

## Un vistazo

![Screenshot](./src/assets/img/demo.png)

## Instalación

Asegúrate de tener GatsbyCLI instalado:

```sh
npm install --global gatsby-cli
```

Clona el proyecto:

```sh
git clone https://github.com/leeboy1984/ElEspiaQueSePerdio-GForms
```

Para ejecutarlo:

```sh
cd ElEspiaQueSePerdio-GForms
npm install
gatsby develop
```

### Personalización

Edita `config.js` y cambia los detalles que quieras

```javascript
module.exports = {
  siteTitle: 'El Espía que se perdió | Versión GForms', // <title>
  ...
  heading: 'El espía que se perdió',
  subHeading: 'Versión online',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/leeboy1984',
    }
    ...
  ],
};

```

### Desplegando usando Netlify

Puedes seguir el siguiente manual para poder desplegar tu propio tablero en Netlify siguiendo [estos pasos](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/).

### License

[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](LICENSE)

Referir al fichero `LICENSE` de este repositorio.
