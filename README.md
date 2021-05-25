# component_vuejs
A VueJS plugin for the [Component module](https://www.drupal.org/project/component) in Drupal.

## Installation

Enable the module normally. Doing so will provide the `Example VueJS component` as a block.

## Usage

The module enables VueJS v3 as a library, using the `vuejs_v3` component. To create a new VueJS component, include that library in your definition. The provided `vuejs_v3_example` component shows how.

### VueJS versions

This release is pinned to VueJS 3.0.11, using the production build. You can change this value by creating your own library component or including the version you want directly in a component. Using a pinned release in production is recommended.

See the Component module documentation for details.

## Development

Note that the example component is built in es6 and compiled with Babel and Gulp. The compiler code is not provided as part of the module.

If using Webpack or similar in your project, be sure to define the `components` directory. For example:

```
// ES6 JS in our custom Drupal modules.
const modulePath = path.resolve(__dirname, 'web/modules/custom');
const matchesInModules = glob.sync(`${modulePath}/**/js/**/*.es6.js`);
const matchesInComponents = glob.sync(`${modulePath}/**/components/**/*.es6.js`);

// ES6 JS in our custom theme.
const themePath = path.resolve(__dirname, 'web/themes/custom');
const matchesInTheme = glob.sync(`${themePath}/**/*.es6.js`);

const entry = {};

const allMatches = matchesInModules.concat(matchesInTheme, matchesInComponents);

allMatches.forEach((match) => {
  entry[match] = match;
});
```
