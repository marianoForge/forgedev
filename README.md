# Forge Website

## Get Started

- [Setup](#setup)
  - [Quick setup](#quick-setup)
- [Commands](#commands)
  - [Development](#development)
  - [Production](#production)
- [Project Structure](#project-structure)

## Setup

### Quick setup

Create a directory for your new project, clone this repository, install the required modules and start coding!

```
mkdir forgeWebSite && cd forgeWebSite

clone https://github.com/forgedevco/website.git

npm i

npm run dev
```

### Commands

#### Development

Run **Webpack** in **Development** mode and start coding!

```
npm run dev
```

#### Production

Run **Webpack** in **Production** mode.

```
npm run build
```

## Project Structure

```
Forge (Project)
│
│   README.md
│   package.json
│   webpack.config.js
└───src
│   │   index.html
│   │
│   └───assets
│       └───js
│            └───All Javascripts Files
│       └───scss
│            └───All Scss Files
│       └───img
│            └───All Images Files
│       └───favicon
│            └───All Favicon and Manifest
│       └───fonts
│            └───All Special Fonts Files
│
└───dist (Production)
│   │   index.html
│   │
│   └───assets
│       └───js
│            └───All Javascripts Files
│       └───scss
│            └───All Scss Files
│       └───img
│            └───All Images Files
│       └───favicon
│            └───All Favicon and Manifest
│       └───fonts
│            └───All Special Fonts Files
```
