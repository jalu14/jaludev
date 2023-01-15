---
title: "Replicando una app con diferentes frameworks"
slug: "misma-app-diferentes-frameworks"
category: "Front"
tags: ["Angular", "React", "Svelte"]
draft: true
date: "2022-04-05T16:22:19+00:00"
description: "Voy a hacer una misma aplicación usando 3 librerías distintas"

---



Desde hace tiempo me aparecen videos recomendados de gente replicando una misma app usando diferentes frameworks, me parecen entretenidos pero no me acaba de cuadrar la aplicación que escogen puesto que es muy "light", la desarrollan rápido pero no prueban cosas claves como: **una llamada a una API; cargar librerías de UI; compilar y desplegar la app en un servicio**. Así que me lanzo a probar mi suerte en esto y aprender algo más

## La aplicación

Ya he mencionado arriba los requisitos, pero quiero añadir unas pautas sobre cosas a usar con el fin de tocar muchos puntos, a mi criterio, importantes para determinar si ha sido o no cómodo el desarrollo en ese framework.

### La app tiene que poder

- Realizar llamadas a una API que he desarrollado
- Utilizar una librería de mapas
- Lanzar modales con inputs
- Sesiones de usuarios básicas
- Usar una librería de tablas
- Ser navegable con el teclado
- Utilizar [Tailwind](https://tailwindcss.com/)
- Usar analytics de Google, de forma básica

Con estos requisitos decido hacer una **app "moderna" de comercio cercano**, en la que los usuarios puedan añadir sus tiendas, puntuar y comentar otras desde un mapa y luego poder hacer gestión de productos o servicios básica.

Ahora tengo que dejar claro **mi nivel con cada "framework"** que voy a usar, he eliminado algunos por no conocerlos mucho aunque en un futuro me gustaría adaptar esto a Vue o Sapper por poner algunos ejemplos.

- **Angular**: Avanzado, trabajo desde hace 5 años con esta jovial herramienta diseñada con mimo por Google, nunca jamás se me ocurriría usar otro framework ya que estoy muy *contento* con este.
- **React**: Intermedio, llevo 2 años usándolo para bastantes proyectos rápidos, uma deliçia, he cambiado este blog a Gatsby y montado apps más serias
- **Svelte**: Principiante, las veces que lo he usado me ha encantado por lo rápido que monta todo pero no para cosas complicadas puesto que le faltan librerías y comunidad detrás para ciertos problemas

Quiero ampliar mis horizontes con estos 3 frameworks en el proceso, ahora sí, a empezar

## React

Escojo empezar por React para agilizar el desarrollo de la interfaz, así aprovecho la estructura para los otros proyectos

### Crear proyecto

Para crear el proyecto usaré [Vite](https://vitejs.dev/)

```bash
npm create vite@latest react-app -- --template react-ts
```

No voy a poner todos los pasos y todo el código, pero si algo de vez en cuando para romper el ladrillo de texto

