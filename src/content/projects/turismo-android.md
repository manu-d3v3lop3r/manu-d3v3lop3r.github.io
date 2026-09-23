---
title: "Aplicación Android de turismo"
slug: "turismo-android"
language: "es"
type: "academic"
status: "completed"
featured: true
confidential: false
summary: "Aplicación Android para crear rutas turísticas personalizadas en Madrid a partir de lugares seleccionados y del tiempo disponible."
technologies:
  - Kotlin
  - Android
  - Google Maps
  - Firebase
  - APIs REST
role: "Participación en las diferentes áreas del proyecto, con especial dedicación a la programación y a la integración técnica."
team: "3 personas"
---

## Contexto

El proyecto se desarrolló como Trabajo de Fin de Grado dentro de un equipo
formado por tres personas.

La idea era crear una aplicación móvil orientada al turismo en Madrid que
ayudara al usuario a organizar visitas y crear rutas personalizadas a partir
de sus preferencias.

El usuario podía seleccionar diferentes lugares que quería visitar y definir
el tiempo disponible para realizar la ruta.

## Problema

Planificar una visita turística puede requerir consultar diferentes lugares,
organizar su orden y adaptar la visita al tiempo disponible.

El proyecto buscaba centralizar este proceso en una aplicación móvil capaz de
utilizar la información seleccionada por el usuario para generar una ruta
turística.

## Objetivos

Los principales objetivos eran:

- Permitir al usuario crear un perfil.
- Seleccionar lugares que quisiera visitar.
- Generar rutas a partir de los lugares seleccionados.
- Tener en cuenta el tiempo disponible del usuario.
- Mostrar los lugares y las rutas sobre un mapa.
- Permitir consultar información meteorológica.
- Guardar información relevante del usuario y sus rutas.
- Facilitar la gestión de rutas completadas y lugares favoritos.

## Solución

Se desarrolló una aplicación Android en la que el usuario podía crear su
perfil y seleccionar los lugares que quería visitar.

A partir de estas preferencias y del tiempo disponible, la aplicación
generaba una ruta turística.

Google Maps se utilizó para mostrar el mapa, buscar lugares y trabajar con la
representación de las rutas.

La aplicación también mostraba información meteorológica en la parte superior
de la interfaz, incluyendo una previsión de hasta tres días.

Firebase se utilizó para almacenar información relacionada con los perfiles,
las rutas completadas, los favoritos y otros datos de la aplicación.

## Funcionalidades principales

### Perfil de usuario

El usuario podía crear y gestionar un perfil dentro de la aplicación.

La autenticación utilizaba las opciones disponibles mediante Firebase,
incluyendo:

- Cuenta de Google.
- Cuenta de Facebook.
- Usuario y contraseña.

### Creación de rutas

El usuario podía seleccionar los lugares de Madrid que quería visitar y
establecer el tiempo disponible.

La aplicación utilizaba esta información para generar una ruta adaptada a
las preferencias introducidas.

### Mapas

Google Maps era una parte fundamental de la aplicación.

Se utilizó para:

- Mostrar el mapa.
- Buscar lugares.
- Representar los lugares seleccionados.
- Crear y mostrar las rutas.

### Meteorología

La aplicación mostraba información meteorológica en la parte superior de la
interfaz.

La previsión disponible llegaba hasta tres días.

### Datos y favoritos

Firebase se utilizó para almacenar diferentes datos de la aplicación,
incluyendo:

- Información de perfiles.
- Rutas completadas.
- Lugares favoritos.
- Otros datos relacionados con el funcionamiento de la aplicación.

## Mi participación

El proyecto fue desarrollado por tres personas y participé en diferentes
áreas del desarrollo.

Mi participación fue especialmente importante en la parte técnica y de
programación, aunque el proyecto se realizó como trabajo conjunto.

También participé en el análisis del funcionamiento que debía tener la
aplicación y en la integración de diferentes elementos necesarios para
conseguir el comportamiento esperado.

## Principal reto técnico

Uno de los principales retos fue la integración de Google Maps.

Fue necesario comprender cómo utilizar la API y cómo adaptar sus
funcionalidades al comportamiento que necesitaba la aplicación.

Esto implicaba trabajar con la representación de mapas, búsqueda de lugares
y creación de rutas.

La solución requirió estudiar la documentación disponible, probar diferentes
posibilidades y adaptar la implementación al funcionamiento de la aplicación.

## Otro reto: definir el flujo

Además de la parte técnica, otro reto importante fue definir correctamente el
flujo de funcionamiento de la aplicación.

Antes de implementar determinadas funcionalidades era necesario entender qué
debía ocurrir desde la perspectiva del usuario y cómo debían relacionarse las
diferentes partes de la aplicación.

Esto permitió transformar las necesidades del proyecto en comportamientos
concretos dentro de la aplicación.

## Pruebas

La aplicación fue probada durante el desarrollo utilizando tanto el emulador
de Android Studio como un dispositivo móvil físico.

Esto permitió comprobar el comportamiento de las funcionalidades en diferentes
entornos.

## Resultado

El resultado fue una aplicación Android funcional capaz de gestionar perfiles,
seleccionar lugares, generar rutas turísticas, mostrar mapas y consultar
información meteorológica.

También permitía almacenar información relacionada con las rutas y los
lugares favoritos mediante Firebase.

## Aprendizajes

El proyecto permitió profundizar especialmente en:

- Desarrollo de aplicaciones Android.
- Kotlin.
- Integración de APIs externas.
- Google Maps.
- Firebase.
- Gestión de datos de usuario.
- Diseño de flujos de aplicación.
- Pruebas en emulador y dispositivo físico.
- Trabajo en equipo.

La integración de Google Maps fue especialmente útil para comprender las
dificultades que pueden aparecer al trabajar con servicios externos y APIs.

## Qué mejoraría actualmente

Actualmente revisaría principalmente la estructura interna de la aplicación y
la interfaz de usuario.

Con los conocimientos actuales buscaría una organización más clara del
código y una experiencia visual más moderna y consistente.

Estas mejoras representan una valoración actual del proyecto y no forman parte
de la implementación original.
