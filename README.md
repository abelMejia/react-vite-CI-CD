# React + TypeScript + Vite + DOCKER
To configure your system to access http://app.local/ via Traefik, you'll need to modify the hosts file on your local machine. This will map app.local to 127.0.0.1, which points to your local machine's network interface.

1. Open the terminal.
2. Run the following command to open the hosts file using a text editor (you may need to use sudo to get administrative access)
```
  sudo nano /etc/hosts
```
3. Add the following line at the end of the file:
```
  127.0.0.1   app.local
```
4. Save and close the file:
  - If you're using nano, press Ctrl+X, then Y, and Enter to save and exit.
5. To rebuild the containers and start them
```
  docker-compose build --no-cache
  docker-compose up
```

Once you've updated your hosts file, you should be able to access your app by navigating to http://app.local in your web browser

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
