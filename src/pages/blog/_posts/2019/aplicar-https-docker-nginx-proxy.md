---
categories: ["Docker"]
date: "2019-09-18T16:22:19+00:00"
description: "Como usar nginx proxy para poder desplegar facilmente aplicaciones o webs dotando de HTTPS sin esfuerzo"
image: "/uploads/chrome_2019-10-18_01-58-56.png"
slug: "https-contenedores-facil"
tags: ["Contenedores", "Nginx", "Portainer"]
title: "Añadir HTTPS a contenedores de forma fácil"
weight: 1
---

Últimamente me pasa que desarrollo algo en NodeJS, hago un docker de esa aplicación (una API, una web, etc) y al lanzar el docker en el servidor final o de prueba me encuentro que ahora necesito hacer cosas extra para añadir la S al HTTP, pues he encontrado una forma para no preocuparme por esto.

## ¿Qué vamos a conseguir?

Añadir el HTTPS de forma automática a los docker sin añadir mucho más que 2 variables a cada contenedor que despleguemos, solo con eso nos podemos olvidar de todo, las herramientas se encargarán de proveer, crear y mantener los certificados a las aplicaciones que lancemos.

## Listado de cosas que necesitamos

* [Docker](https://www.docker.com/)
* Un contenedor que asegurar
* Un nombre de dominio
* Un servidor para correr docker
* Contenedor [nginx-proxy](https://github.com/jwilder/nginx-proxy)
* Contenedor [nginx-proxy-letsencrypt-companion](https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion)

## (Opcional) Instalar portainer para agilizar todo

Últimamente soy muy fan de instalar portainer (gestor visual web de contenedores), voy a poner los comandos de consola pero dejo esta recomendación aquí por si acaso.

* [Portainer](https://www.portainer.io/)

## Lanzando nginx-proxy

Ahora queremos lanzar el contenedor de nginx de esta forma

```bash
    docker run --detach \
        --name nginx-proxy \
        --publish 80:80 \
        --publish 443:443 \
        --volume /etc/nginx/certs \
        --volume /etc/nginx/vhost.d \
        --volume /usr/share/nginx/html \
        --volume /var/run/docker.sock:/tmp/docker.sock:ro \
        jwilder/nginx-proxy

```

Lo que hace es añadir 3 volúmenes extra a nginx-proxy y lo lanza usando los puertos 80 y 443.

## Lanzando letsencrypt-nginx-proxy-companion

Un comando, parecido al anterior

Poner nuestro mail en la variable de entorno hace que se nos notifique si algo ha fallado y van a caducar los certificados.

```bash
    docker run --detach \
        --name nginx-proxy-letsencrypt \
        --volumes-from nginx-proxy \
        --volume /var/run/docker.sock:/var/run/docker.sock:ro \
        --env "DEFAULT_EMAIL=TU@MAIL.COM" \
        jrcs/letsencrypt-nginx-proxy-companion

```

## Añadir todas las aplicaciones que queremos

Ahora cuando lancemos una aplicación le tenemos que añadir 2 variables de entorno extras, que le dirán a nginx-proxy y al letsencrypt-companion que dominio o subdominio va a que contenedor.

Yo, por ejemplo he desarrollado una API y la lanzo en otro contenedor con un subdominio que he creado (en este caso en cloudflare) **api.jaludev.com** **apuntando a la dirección IP** **del contenedor**.

```bash
    docker run --detach \
        --name your-proxyed-app \
        --env "VIRTUAL_HOST=api.jaludev.com" \
        --env "LETSENCRYPT_HOST=api.jaludev.com" \
        nginx
```

En unos minutos ya reconocerá la dirección y habrá generado los certificados, lo mejor de todo es que se renuevan automáticamente.