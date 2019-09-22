# Create React Component CLI

A CLI for generate react and react-native components based on styled-components.

## How to install

Since I have not yet found a name for this package that is available in the npm repository, you will need to clone the repository on your computer and make the `link` for the command to be made available globally.

Follow the steps below to do this:

1. Clone this repository

```
$ git clone https://github.com/vitorleonel/create-react-component-cli
```

2. Navigate to the cloned path and install the dependencies:

```
$ cd create-react-component-cli
$ yarn install
```

3. In the cloned path, link the package to have the command available globally:

```
$ yarn link
```

_Warning: This package uses `yarn`, if you use npm, change the syntax to execute the commands._

## How to use

In the example below I create a component called `Component`:

```
$ create-react-component g Component
```

By default the command generates a component for reactjs and without the `styled-components` based styles file.

So that you can switch from reactjs to react-native or still want to create the styles file, see the examples:

1. Change reactjs to react-native:

```
$ create-react-component g Component --rn
```

2. Generate component with styles file:

```
$ create-react-component g Component --styles
```

3. You may also want to combine both options:

```
$ create-react-component g Component --rn --styles
```

## License

MIT - see LICENSE
