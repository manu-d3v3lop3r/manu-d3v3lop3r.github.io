---
title: "Android Tourism Application"
slug: "android-tourism"
language: "en"
type: "academic"
status: "completed"
featured: true
confidential: false
summary: "Android application for creating personalized tourist routes in Madrid based on selected places and available time."
technologies:
  - Kotlin
  - Android
  - Google Maps
  - Firebase
  - REST APIs
role: "Participation across different areas of the project, with particular focus on programming and technical integration."
team: "3 people"
---

## Context

The project was developed as a Final Degree Project within a team of three
people.

The idea was to create a mobile application focused on tourism in Madrid that
would help users organize visits and create personalized routes based on
their preferences.

Users could select different places they wanted to visit and define the time
available for the route.

## Problem

Planning a tourist visit can require consulting different places, organizing
their order and adapting the visit to the available time.

The project aimed to centralize this process in a mobile application capable
of using the user's selected information to generate a tourist route.

## Objectives

The main objectives were:

- Allow users to create a profile.
- Select places they wanted to visit.
- Generate routes based on the selected places.
- Take the user's available time into account.
- Display places and routes on a map.
- Provide weather information.
- Store relevant user and route information.
- Support the management of completed routes and favorite places.

## Solution

An Android application was developed in which users could create their
profile and select the places they wanted to visit.

Based on these preferences and the available time, the application generated
a tourist route.

Google Maps was used to display the map, search for places and work with route
visualization.

The application also displayed weather information at the top of the
interface, including a forecast of up to three days.

Firebase was used to store information related to profiles, completed routes,
favorites and other application data.

## Main features

### User profile

Users could create and manage a profile within the application.

Authentication used the options available through Firebase, including:

- Google account.
- Facebook account.
- Username and password.

### Route creation

Users could select the places in Madrid they wanted to visit and define the
available time.

The application used this information to generate a route adapted to the
entered preferences.

### Maps

Google Maps was a fundamental part of the application.

It was used to:

- Display the map.
- Search for places.
- Represent selected places.
- Create and display routes.

### Weather

The application displayed weather information at the top of the interface.

The available forecast covered up to three days.

### Data and favorites

Firebase was used to store different types of application data, including:

- Profile information.
- Completed routes.
- Favorite places.
- Other data related to the application's operation.

## My contribution

The project was developed by three people, and I participated in different
areas of the development.

My contribution was particularly focused on the technical and programming
side, although the project was developed collaboratively.

I also participated in analysing the application's required behaviour and in
integrating different elements needed to achieve the expected functionality.

## Main technical challenge

One of the main challenges was integrating Google Maps.

It was necessary to understand how to use the API and adapt its functionality
to the behaviour required by the application.

This involved working with map representation, place search and route
creation.

The solution required studying the available documentation, testing different
possibilities and adapting the implementation to the application's
requirements.

## Another challenge: defining the workflow

In addition to the technical aspects, another important challenge was
correctly defining the application's workflow.

Before implementing certain features, it was necessary to understand what
should happen from the user's perspective and how the different parts of the
application should interact.

This helped transform the project's requirements into concrete application
behaviour.

## Testing

The application was tested during development using both the Android Studio
emulator and a physical mobile device.

This made it possible to verify the behaviour of the features in different
environments.

## Result

The result was a functional Android application capable of managing profiles,
selecting places, generating tourist routes, displaying maps and providing
weather information.

It also stored information related to completed routes and favorite places
using Firebase.

## Learnings

The project provided practical experience in:

- Android application development.
- Kotlin.
- External API integration.
- Google Maps.
- Firebase.
- User data management.
- Application workflow design.
- Emulator and physical-device testing.
- Teamwork.

The Google Maps integration was particularly valuable for understanding the
challenges that can arise when working with external services and APIs.

## What I would improve today

Today I would mainly review the application's internal structure and user
interface.

With my current knowledge, I would aim for a clearer code organization and a
more modern and consistent visual experience.

These improvements are a current assessment of the project and were not part
of the original implementation.
