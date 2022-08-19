exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: '/*',
    toPath: '/maintenance',
  })
}
