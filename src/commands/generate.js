module.exports = {
  name: 'generate',
  alias: ['g'],
  description:
    'Generate a new component with specified name. Ex: `react-components g components/App`.',
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print
    } = toolbox

    let name = parameters.first

    // If the user does not provide the name, dispatch error message.
    if (!name) {
      print.error('No component name specified!')
      return
    }

    // Set values to generate component.
    const componentName = name.includes('/') ? name.split('/').pop() : name
    const platform = parameters.options.hasOwnProperty('rn') ? 'rn' : 'rjs'
    const withStyles = parameters.options.hasOwnProperty('styles')

    // Generate the component based on variable values.
    await generate({
      template: `component.${platform}.ejs`,
      target: `${name}/index.js`,
      props: { name: componentName }
    })

    if (withStyles) {
      await generate({
        template: `styles.${platform}.ejs`,
        target: `${name}/styles.js`
      })
    }

    print.success(`Component generated with success!`)
  }
}
