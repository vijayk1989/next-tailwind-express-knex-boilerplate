# A next js - express - tailwind - knex - sqlite3 boilerplate

- clone repo
- yarn add or npm install
- npm start

## Components

Location: /components

- Header
  - A simple logo and nav
- Footer
  - A basic footer
- Layout
  - A very basic single column layout with a sticky footer

## DB

Location: /api

A simple sqlite3 setup. Using knex as a query builder.
Seeds and migrations generated using knex cli. http://knexjs.org/#Migrations-CLI

## CSS

Location: /css

Using tailwind css to quickly prototype components. Added a custom main css file for further customization.
Nothing complex here, everything has already been setup to work with next js. You can use tailwindcss
classes in all components.

## ESLINT

ESLINT using base airbnb and react:recommended settings. Just modify .eslintrc.js file to remove and add rules.

## Backend API

Location: /api

Using express for the backend API. It's a very barebones express setup, no additional libraries included.
Express is setup to work with next seamelessly. For live reload of backend need to use nodemon as the
live reload of nextjs does not hot reload backend api.

## To do

Finish CRUD with Knex. Add authentication.
