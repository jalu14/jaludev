---
categories: ["Bundler"]
date: "2019-08-22T16:22:19+00:00"
description: "Añadir TS a una aplicación HTML para facilitar el desarrollo"
image: "/uploads/chrome_wVAfu0AeWT.png"
slug: "parcel-typescript"
tags: ["Parcel", "Typescript"]
title: "Usando Parcel con HTML"
weight: 1
---

## ¿Qué es Parcel?

[Parcel](https://parceljs.org/) es un empaquetador, parecido a otros como Gulp, Grunt o Webpack, se encarga de 'pasar' el código de un lenguaje a otro. Se suele usar para pasar Sass a CSS, TS a JS o parecidos.

Parcel funciona desde un terminal, se instala en la línea de comandos y se opera desde ahí

## Instalando Parcel

Instalar Parcel es de lo más sencillo, tal y como tienen en su guía solo hay que tener [NodeJS](https://nodejs.org/en/) instalado para usar npm e introducir este comando:

```bash
npm install -g parcel-bundler
```

## Creando el proyecto con Parcel

Yo voy a crear un proyecto y añadir Parcel desde 0, pero si ya tienes algo creado, implementar Parcel no cuesta nada, es algo de lo que presumen y con razón.

Mi proyecto consta de solo 3 archivos

```javascript
// package.json
...
"scripts": {
    "start": "parcel index.html",
},
...
```

```typescript
// Un documento Typescript normal

console.log('Hola parcel');
```

```html
<!-- Y el index.html -->

<script src="index.ts"></script>
```

Ya está con estos 3 archivos se puede lanzar el servidor, que nos abrirá el entorno de desarrollo en **127.0.0.1:1234** por defecto.

## Ventajas de usar Parcel

* Según ellos mismos especifican, va volando en comparación a otros.
* La instalación y el arranque se hacen sin configuración y en 1 minuto contando la descarga, genial.
* Cada vez que editas un archivo recarga todo en unos mili-segundos.
* Obviamente poder usar TS y _transpilar_ a JS ayuda si estás acostumbrado o quieres entrar en el lenguaje **tipado**.