module.exports = (toolbox) => {
  const { filesystem, template, print: { success, error } } = toolbox

  async function isReactNative () {
    const packageFile = await filesystem.read('package.json', 'json')

    return !!packageFile.dependencies['react-native']
  }

  async function createComponent (folder, name) {
    if (!name) {
      error('Name must be specified')
      return
    }

    await template.generate({
      template: 'component.tsx.ejs',
      target: `${folder}/${name}/${name}.tsx`,
      props: { name }
    })

    const storiesTemplate = (await isReactNative())
      ? 'component-rn.stories.tsx.ejs'
      : 'component.stories.tsx.ejs'

    await template.generate({
      template: storiesTemplate,
      target: `${folder}/${name}/${name}.stories.tsx`,
      props: { name }
    })

    success(`Generated ${folder}/${name}.`)
  }

  toolbox.createComponent = createComponent
}
