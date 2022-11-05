---
categories: ["Frontend"]
date: "2021-03-25T16:22:19+00:00"
slug: "comparando-frameworks"
tags: ["Angular", "React", "Svelte", "Sapper", "NextJS", "Gatsby"]
title: "Uno de Angular usa otros frameworks y le gustan"
description: "He estado dando muchos saltos este último año con varios frameworks, con la tontearía he hecho varias apps con ellos y quiero apuntar que me han parecido"
weight: 1

---

## Comparando varios frameworks de front

Pues eso, desde que empecé hace unos 4 años en el desarrollo de SPA **he utilizado siempre Angular**, entrar fue complicado pero a medida que avanzas se ven más y más posibilidades, por lo que no veía necesario tocar nada más en materia de front... Hasta que me recomendaron Gatsby para hacer un blog, esa fue mi perdición.

Esto no es una descripción de pros y contras de cada tecnología, aquí dejo mi evolución y percepción a lo largo de un año, para ver que es cada cosa ya hay mil artículos copia pega en google

## Gatsby

Es una variante de react y mi introducción a este framework, se utiliza mucho para hacer blogs, 'landing pages' o hasta alguna aplicación, pero es una pasada, viniendo de Angular, sin saber nada de react, aprender Gatsby fue algo que ojala repitiera con cada nueva tecnología. 

Si tocaba mirar GraphQL, para hacer la lista de entradas en el blog, todo era intuitivo, cada duda que tuviese estaba respuesta con mil explicaciones y TODO funcionaba, es esto lo que me engancho al entorno react, **una comunidad enorme** con soluciones para mil problemas.

Al final 'acabe' este blog que antes funcionaba con Hugo y daba miedo mirar el código después de 3 meses, aquí empecé a hacer otras herramientas ya que era muy sencillo, pero me encontré con una de sus limitaciones, al hacer una web con muchas páginas que se tenían que actualizar cada 10 minutos si un usuario entraba, y es una limitación entendible ya que este no es el propósito de Gatsby, sino de Next.

## Next

Aquí entré con más conocimiento y algunas librerías bajo el brazo, quería hacer una web para hacer seguimiento de los precios de items en un juego, tenía un robot que cada 10 minutos escaneaba actualizaciones y todo quedaba en un MongoDB.

Así que por la parte de front lo único que tenía que hacer era un listado de los objetos y el detalle de cada uno con más información, aprendí a usar bien algunos conceptos de react y librería como react-table (este es una pasada) y fue todo tan sencillo que acabé extendiendo la web, aprender como optimizar peticiones y renderizado, hacer cosas extra en el cliente, incluso añadir muuuucha más funcionalidad de lo fácil que es todo, esta web la acabé publicando a principios de 2021 y cada vez que entro la usa más gente y todo sigue funcionando que es algo nuevo para mí.

Después de llevar tantas buenas experiencias con estos dos hermanos de react ya me metí de lleno.

## React

Aquí no entré con un proyecto en cabeza, así que replique un proyecto que tengo en angular para comparar esfuerzo, librerías, comunicación con api, facilidad de desarrollo. Y una vez más sorprendido-

La aplicación que tenía con Angular era una pequeña-mediana, añadir nuevos apartados era sencillo, pero con react todo era rápido, la cantidad de librerías y documentación que tienen es brutal, los componentes funcionales por si quieres hacer algo rápido para ver como queda, es igual de fácil de debuggar que Angular pero todos los errores que aparecen son fáciles de buscar y resolver.

Está aplicación la sigo desarrollando, es algo que no necesita nada de SEO por lo que React/Angular viene perfecto y al ser una app que apunta a tener mucho código poder usar TS me ayuda a organizar todo, ya escribiré explicando que es en un futuro.

## Svelte/Sapper

Estos últimos los añado sin mucha experiencia, apenas llevo unas semanas, si que los había usado hace tiempo, antes de empezar a tocar todo lo de React pero no tener proyectos claros para aplicarlos hizo que no entrase con ganas.

Pero ahora he vuelto con ideas y necesidades, para empezar Svelte y Sapper serían como React y Next, el primero hace SPAs, aplicaciones que se cargan en el cliente y las ejecuta, el segundo renderiza en servidor.

De primeras estoy usando mucho Svelte, hacer cualquier prueba es muy rápido, levantar un proyecto, instalar todo y arrancar puede ser literalmente menos de 1 minuto, cuando con Angular/React me podía ir a los 5, añadiendo cientos de megas en librerías. Tengo que decir que viniendo de react me ha sido más familiar todo en Svelte, la documentación que tienen es una pasada y voy muy rodado.

Hay bastante comunidad, ya que lleva un tiempo, pero le faltan algunas librerías que, viniendo de React, son cruciales ej. react-table. A pesar de todo es una gozada desarrollar con esto y espero encontrarle aplicaciones para aprender más.

## Conclusión

Para acabar he de decir que me han sorprendido todas las tecnologías que he usado, no era bueno encerrarse en Angular, ahora tengo más herramientas para atacar diferentes problemas que me puedan surgir. He visto la importancia de unas librerías bien y una comunidad que hace que tus problemas se resuelvan en poco tiempo, haciendo más fácil el desarrollo de lo que quieres hacer.

Seguiré utilizando Angular para cosas grandes que requieren organización, estructura y trabajo en equipo, pero para otras ideas locas que se me antojen, puedo escoger comodamente.

