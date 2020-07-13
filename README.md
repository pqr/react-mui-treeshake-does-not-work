Minimum example of React Material-UI with the only TextField component imported - result bundle size is 250Kb!

webpack-bundle-analyzer shows everything is imported, nothing is tree shaked:

![webpack-bundle-analyzer](react-mui-treeshake.png)

How to reproduce:
```
npm install
npm run build
npm run analyze
```

According to documentation https://material-ui.com/guides/minimizing-bundle-size/ tree-shaking should work, quote:

> Tree-shaking of Material-UI works out of the box in modern frameworks. Material-UI exposes its full API on the top-level material-ui import. If you're using ES6 modules and a bundler that supports tree-shaking (webpack >= 2.x, parcel with a flag) you can safely use named imports and still get an optimised bundle size automatically:
```
import { Button, TextField } from '@material-ui/core';
```

But as shown in this minimum example it does not work out of the box.
I did several experiments, read through issues and StackOverflow and failed to find a solution.

If you know how to enable tree shaking in React Material-UI please send a Pull Request to this repository with neede changes.

- Webpack 4.43
- Material-UI 4.11

https://material-ui.com 
