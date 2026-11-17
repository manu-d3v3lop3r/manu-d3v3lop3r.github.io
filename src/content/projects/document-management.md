---
title: "Document Management and Digitization"
slug: "document-management"
language: "en"
type: "professional"
status: "completed"
order: 1
featured: true
confidential: true
summary: "Web application built from scratch to production to digitise and manage administrative and legal documentation: scanned-document uploads, a relational MySQL database and a Bootstrap, jQuery and DataTables interface."
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
role: "Full stack development (PHP, MySQL, JavaScript), database design and server configuration."
team: "2 people"
---

## Context

The project arose from an internal company need related to document
digitization and management.

Before the application was introduced, a significant part of the
documentation was managed in physical form using documents, folders and
filing cabinets. This made information harder to locate and increased the
risk of documents being lost or damaged.

The goal was to provide a digital process that could store the documentation
and make the associated information easier to manage and consult.

## Problem

The previous process relied heavily on physical documentation.

This created several problems:

- Difficulty locating specific documents.
- Dependence on physical storage.
- Increased risk of loss or deterioration.
- Need for manual searches.
- Lack of centralized management for information associated with documents.

A controlled environment was also required where the application could run
and store its information.

## Objectives

The main objectives were:

- Digitize the documentation.
- Make document storage and retrieval easier.
- Associate documents with information entered by users.
- Reduce dependence on physical documentation.
- Provide an application adapted to the real workflow.
- Configure an environment where the application could run.

## Solution

A web application was developed to manage the document digitization process.

The general workflow started when a person accessed the application and used
the corresponding form.

The process could be summarized as follows:

1. The user accessed the form.
2. The user entered the information associated with the document.
3. The user selected and uploaded the document.
4. The document was stored in Google Drive.
5. Form information was stored in MySQL.
6. The application subsequently displayed the registered information and the
   corresponding document reference.

The solution combined a web interface, server-side processing, structured
data storage and document storage.

## Technologies and development

- **Backend (PHP):** application logic, form processing, scanned-document
  uploads and database access.
- **Database (MySQL):** design of the relational model used to classify,
  store and query documents and their associated data.
- **Frontend:** HTML, CSS and JavaScript with Bootstrap for the responsive
  layout, jQuery for interaction, DataTables for searchable, sortable and
  paginated listings, and SweetAlert2 for confirmations and user feedback.
- **Google services:** Google Apps Script and Google Drive for document
  storage.

## Environment and server

An important part of the project was preparing the environment where the
application would run.

Together with another colleague, a physical Windows computer was configured
from scratch to be used as a server.

The work included:

- Apache.
- PHP.
- MySQL.
- XAMPP.
- VirtualBox.
- IP addresses.
- Ports.
- Users.
- Permissions.
- Folder structures.

XAMPP was used to facilitate the execution and configuration of the
environment with Apache, PHP and MySQL.

It was also necessary to research and solve connection and security-related
problems during the configuration process.

## My contribution

The application was built by two people, from scratch to production. My
contribution included:

- Developing the application and its workflow (frontend and backend).
- Designing the relational database structure.
- Implementing the upload and storage of scanned documents.
- Setting up and maintaining the development environment and the server.

I also participated in the research required to solve configuration,
connection and security problems.

An important part of the work was first understanding the process that the
application needed to solve. This required analysing the real workflow and
discussing it with the people who would use the solution.

## Main challenges

One of the main challenges was correctly understanding the workflow that the
application needed to represent.

The task was not simply to develop forms, but to understand how documentation
was actually handled and what information needed to remain associated with
each document.

Another important challenge was server configuration.

Preparing the physical machine, connections, permissions and security
required research and testing until a functional environment was achieved.

## Decisions and learning

The project provided practical experience combining web development,
databases, document storage and systems configuration.

It was also particularly valuable for developing the ability to investigate
technical problems independently.

When server, connection or configuration problems appeared, it was necessary
to research the issue, test alternatives and adapt the solution to the
available environment.

This experience also reinforced the importance of considering not only the
application code, but also the environment where the solution must run and
the real needs of the people using it.

## Result

The application was used in a real professional environment and enabled
documentation and associated information to be managed digitally.

The project helped reduce dependence on a process based exclusively on
physical documentation and made the associated information easier to consult
through the application.

No quantitative metrics are included because reliable data about time
savings, document volume or other indicators are not available.

## What I would improve today

If I were developing an equivalent solution from scratch today, I would pay
particular attention to:

- A more structured application architecture.
- Security improvements.
- Clearer separation of responsibilities.
- A more modern and refined user interface.
- Support for multiple languages.
- A more maintainable technical solution prepared for future evolution.

These improvements are a current assessment of the project and were not part
of the original implementation.

## Confidentiality

This project belongs to a professional environment and contains internal
company information and processes.

For this reason, the source code is not publicly available, and internal
data, credentials, sensitive configurations and private documentation are not
published.

The information presented in this case study is limited to describing my
general contribution, the technologies used and the problem that was
addressed.
