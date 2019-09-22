module.exports = {
  name: 'create-react-component',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Welcome to CLI')
    print.info(
      'Run `create-react-component --help` for view available commands.'
    )
  }
}
