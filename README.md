# Route Free Finder

Route Free Finder is a React single-page app for exploring routes and contributing
route information and images. The home view includes route search, an about
section, and a contribution call to action. The contribution view has tabs for
creating a route and uploading an image.

> **Current limitation:** Route search and contribution forms are front-end only.
> They do not send or save data because no backend is connected.

## Requirements

- Node.js and npm

## Getting started

Install the project dependencies:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available commands

| Command            | Description                                                 |
| ------------------ | ----------------------------------------------------------- |
| `npm run dev`      | Start the Vite development server                           |
| `npm run build`    | Type-check the app and create a production build in `dist/` |
| `npm run preview`  | Serve the production build locally                          |
| `npm run lint`     | Run ESLint                                                  |
| `npm run test`     | Run Vitest in watch mode                                    |
| `npm run test:run` | Run Vitest once                                             |

## Technology

- React and TypeScript
- Vite
- Tailwind CSS v4 via the Vite plugin
- ESLint, Prettier, and Vitest

## Project structure

- `src/App.tsx` — switches between the home and contribution views.
- `src/components/` — reusable page sections and forms.
- `src/pages/AddPage.tsx` — route creation and image upload tabs.
- `src/App.css` and `src/index.css` — application and global styles.
- `public/` — static files served from the site root.
