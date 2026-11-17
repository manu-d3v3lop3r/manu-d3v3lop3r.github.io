---
title: "Gestión y digitalización documental"
slug: "gestion-documental"
language: "es"
type: "professional"
status: "completed"
order: 1
featured: true
confidential: true
summary: "Aplicación web desarrollada desde cero hasta producción para digitalizar y gestionar documentación administrativa y legal: subida de documentos escaneados, base de datos relacional en MySQL e interfaz con Bootstrap, jQuery y DataTables."
technologies:
  - PHP
  - MySQL
  - JavaScript
  - jQuery
  - Bootstrap
  - DataTables
  - SweetAlert2
  - HTML
  - CSS
  - Google Apps Script
  - Google Drive
  - Apache
  - XAMPP
  - VirtualBox
role: "Desarrollo full stack (PHP, MySQL, JavaScript), diseño de la base de datos y configuración del servidor."
team: "2 personas"
---

## Contexto

El proyecto surgió de una necesidad interna de la empresa relacionada con la
digitalización y gestión de documentación.

Antes de la aplicación, gran parte de la documentación se gestionaba en
formato físico mediante documentos, carpetas y archivadores. Esto dificultaba
la localización de información y aumentaba el riesgo de pérdida o deterioro de
documentos.

El objetivo era disponer de un proceso digital que permitiera almacenar la
documentación y consultar la información asociada de una forma más
estructurada.

## Problema

El proceso anterior dependía en gran medida de documentación física.

Esto generaba varios problemas:

- Dificultad para localizar determinados documentos.
- Dependencia del almacenamiento físico.
- Mayor riesgo de pérdida o deterioro.
- Necesidad de realizar búsquedas manuales.
- Falta de una gestión centralizada de la información asociada a los
  documentos.

También era necesario disponer de un entorno donde la aplicación pudiera
ejecutarse y almacenar la información de forma controlada.

## Objetivos

Los principales objetivos del proyecto eran:

- Digitalizar la documentación.
- Facilitar su almacenamiento y consulta.
- Relacionar los documentos con la información introducida por los usuarios.
- Reducir la dependencia de la documentación física.
- Disponer de una aplicación adaptada al flujo de trabajo real.
- Configurar un entorno donde la aplicación pudiera ejecutarse.

## Solución

Se desarrolló una aplicación web para gestionar el proceso de digitalización
documental.

El flujo general comenzaba cuando una persona accedía a la aplicación y
utilizaba el formulario correspondiente.

El proceso podía resumirse de la siguiente forma:

1. El usuario accedía al formulario.
2. Introducía la información asociada al documento.
3. Seleccionaba y cargaba el documento.
4. El documento se almacenaba en Google Drive.
5. La información del formulario se almacenaba en MySQL.
6. La aplicación mostraba posteriormente la información registrada y la
   referencia correspondiente al documento.

La solución combinaba una interfaz web, procesamiento en el servidor,
almacenamiento estructurado de datos y almacenamiento documental.

## Tecnologías y desarrollo

- **Backend (PHP):** lógica de la aplicación, procesamiento de formularios,
  subida de los documentos escaneados y acceso a la base de datos.
- **Base de datos (MySQL):** diseño del modelo relacional para clasificar,
  almacenar y consultar la documentación y sus datos asociados.
- **Frontend:** HTML, CSS y JavaScript con Bootstrap para el diseño
  responsive, jQuery para la interacción, DataTables para listados con
  búsqueda, ordenación y paginación, y SweetAlert2 para confirmaciones y
  avisos al usuario.
- **Servicios de Google:** Google Apps Script y Google Drive para el
  almacenamiento de los documentos.

## Entorno y servidor

Una parte importante del proyecto fue la preparación del entorno donde debía
ejecutarse la aplicación.

Junto con otro compañero se configuró desde cero un equipo físico con
Windows para utilizarlo como servidor.

Durante este proceso se trabajó con:

- Apache.
- PHP.
- MySQL.
- XAMPP.
- VirtualBox.
- Direcciones IP.
- Puertos.
- Usuarios.
- Permisos.
- Estructura de carpetas.

XAMPP se utilizó para facilitar la ejecución y configuración del entorno con
Apache, PHP y MySQL.

También fue necesario investigar y resolver problemas relacionados con
conexiones y seguridad durante la configuración.

## Mi participación

La aplicación se desarrolló entre dos personas, desde cero hasta su puesta en
producción. Mi participación incluyó:

- Desarrollo de la aplicación y de su flujo de trabajo (frontend y backend).
- Diseño de la estructura de la base de datos relacional.
- Implementación de la subida y almacenamiento de documentos escaneados.
- Configuración y mantenimiento del entorno de desarrollo y del servidor.

También participé en la investigación necesaria para resolver problemas de
configuración, conexión y seguridad.

Una parte importante del trabajo consistió en comprender primero el proceso
que debía resolver la aplicación. Para ello fue necesario analizar el flujo
real de trabajo y contrastarlo con las necesidades de las personas que
utilizarían la solución.

## Retos principales

Uno de los principales retos fue comprender correctamente el flujo de trabajo
que debía representar la aplicación.

No se trataba únicamente de desarrollar formularios, sino de entender cómo se
utilizaba realmente la documentación y qué información debía quedar asociada
a cada documento.

Otro reto importante fue la configuración del servidor.

La preparación del equipo físico, las conexiones, los permisos y los
problemas de seguridad requirieron investigación y pruebas hasta conseguir
un entorno funcional.

## Decisiones y aprendizaje

El proyecto permitió trabajar de forma conjunta con desarrollo web, bases de
datos, almacenamiento documental y configuración de sistemas.

También fue especialmente importante aprender a investigar problemas
técnicos de forma autónoma.

Cuando aparecieron problemas relacionados con el servidor, las conexiones o
la configuración, fue necesario buscar información, probar alternativas y
adaptar la solución al entorno disponible.

Esta experiencia permitió comprender que el desarrollo de una aplicación no
termina en el código: también es necesario tener en cuenta el entorno donde
la solución debe ejecutarse y las necesidades reales de las personas que la
utilizan.

## Resultado

La aplicación se utilizó en un entorno profesional real y permitió gestionar
digitalmente la documentación y la información asociada.

El proyecto ayudó a reducir la dependencia del proceso basado exclusivamente
en documentación física y facilitó la consulta de la información desde la
aplicación.

No se incluyen métricas cuantitativas porque no se dispone de datos fiables
sobre ahorro de tiempo, volumen de documentación u otros indicadores.

## Qué mejoraría actualmente

Si desarrollara actualmente una solución equivalente desde cero, prestaría
especial atención a:

- Una arquitectura de aplicación más estructurada.
- Mejoras de seguridad.
- Una separación más clara de responsabilidades.
- Una interfaz más moderna y cuidada.
- Soporte para diferentes idiomas.
- Una solución técnica más mantenible y preparada para evolucionar.

Estas mejoras se plantean como una valoración actual del proyecto y no como
características que formaran parte de la implementación original.

## Confidencialidad

Este proyecto pertenece a un entorno profesional y contiene información y
procesos internos de la empresa.

Por este motivo, el código fuente no está disponible públicamente y no se
publican datos internos, credenciales, configuraciones sensibles ni
documentación privada.

La información mostrada en este caso de estudio se limita a describir de
forma general mi participación, las tecnologías utilizadas y el problema que
se resolvió.
