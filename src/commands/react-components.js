module.exports = {
  name: 'react-components',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Welcome to React Components CLI')
    print.info('Run `react-components --help` for view available commands.')
  }
}
