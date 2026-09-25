# Zelda API – Hyrule Compendium

A web application built as a learning project using Zelda-related data from the Hyrule Compendium API.

This project started as a simple HTML and CSS project and has gradually evolved into a React application with Redux Toolkit, React Router, CSS Modules and a structured Git/GitHub workflow.

The project is still under development, and new features and improvements will be added over time.

---

## Project Development

The application has been developed step by step, with each stage introducing new technologies and concepts.

### 1. HTML & CSS

The project originally started with plain HTML and CSS.

The first goal was to learn the fundamentals of building a webpage, including:

- HTML structure
- CSS styling
- Layout
- Images
- Buttons
- Basic user interface design

This provided the foundation for the rest of the project.

### 2. JavaScript

JavaScript was then introduced to make the application more interactive.

This stage focused on:

- JavaScript fundamentals
- DOM manipulation
- Events
- Working with data
- Fetching data from an external API

### 3. Hyrule Compendium API

The project was then connected to the Hyrule Compendium API.

The API provides Zelda-related information such as:

- Items
- Creatures
- Monsters
- Equipment
- Materials
- Treasure

The application fetches this data and uses it to populate the Compendium.

API: https://hyrule-compendium.com/#/

### 4. React

The project was later rebuilt using React.

React introduced a component-based structure and made it easier to divide the application into reusable parts.

The project now uses components for things such as:

- Cards
- Pages
- API data
- User interface elements

### 5. React Router

React Router was introduced to allow the application to have multiple pages.

The current application includes:

- Home
- Compendium
- About

This also introduced the concept of navigating between different views without reloading the entire application.

### 6. Redux Toolkit

Redux Toolkit was then introduced to manage global application state.

Redux is currently used for:

- API data
- Loading state
- Error state
- Favorite items

Users can add items to their favorites and remove them again.

### 7. Search & Filtering

The Compendium was expanded with search and filtering functionality.

Users can:

- Search for items by name
- Filter items by category
- Browse the filtered results

### 8. CSS Modules

The project's styling was later refactored to use CSS Modules.

This keeps styles scoped to individual components and pages and helps keep the project's CSS organized as the application grows.

### 9. Git & GitHub

Git and GitHub were introduced to manage the project's version history and development workflow.

The project now uses branches to separate development from the stable version.

The current workflow is:

feature branch → dev → testing → main

`main` contains the stable version of the application.

`dev` is the default development branch where new features are integrated and tested.

Feature branches are created from `dev` and merged back into `dev` through Pull Requests.

Once changes have been tested and are ready, `dev` can be merged into `main`.

---

## Current Status

The project is currently under development.

The main focus is to continue improving the application while learning and practicing modern web development concepts.

The current application includes:

- Home page
- Compendium page
- About page
- API integration
- Item search
- Category filtering
- Favorite items
- Redux state management
- React Router navigation
- CSS Modules
- Git/GitHub workflow

More features, improvements and assets will be added as the project continues to grow.

---

## Technologies

- HTML
- CSS
- JavaScript
- React
- Redux Toolkit
- React Router
- CSS Modules
- Vite
- Git
- GitHub

---

## Development Workflow

The project uses a branch-based Git workflow.

The development process currently follows:

feature branch → dev → main

`dev` is used for ongoing development and testing.

New features are developed in separate feature branches. Once a feature is ready, a Pull Request is created and merged into `dev`.

After changes have been tested and the development version is considered ready, `dev` can be merged into `main`.

`main` is kept as the stable version of the project.

---

## API

This project uses the Hyrule Compendium API to retrieve Zelda-related data.

A big thank you to the creators and maintainers of the Hyrule Compendium API for making this data available for developers and learning projects.

Hyrule Compendium API:
https://hyrule-compendium.com/#/

---

## Assets & Credits

This project uses various Zelda-related images and graphical assets.

### Logo

The Zelda logo used in the project was created by **BrochachoTheBro** and is available through SteamGridDB.

Thank you for making the logo available to the community.

Zelda Logo – SteamGridDB:
https://www.steamgriddb.com/logo/110106

### Link Background Image

The Link background image used on the Home page comes from an article by **Jordan Boyd** on SB Press.

Thank you for the original image and article.

The Legend of Zelda: Breath of the Wild Review – SB Press:
https://sbpress.com/2017/03/the-legend-of-zelda-breath-of-the-wild-review/

Additional image and asset credits will be added here as the project develops.

---

## Disclaimer

This is a personal learning project and is not affiliated with, endorsed by, or sponsored by Nintendo or The Legend of Zelda.

All Zelda-related trademarks, characters and original assets belong to their respective owners.

---

## Purpose

The purpose of this project is to learn web development by building a real application from the ground up.

Rather than building everything at once, the application has been developed step by step, starting with basic HTML and CSS and gradually introducing JavaScript, API integration, React, React Router, Redux Toolkit, CSS Modules and Git/GitHub.

The project will continue to evolve as new concepts and features are learned.
