/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
const { writeFileSync, mkdirSync } = require('fs')
const {
  generateIndex,
  generateGitIgnore,
  generateFunctionReadme,
  generateFunctionEsLintRc,
  generateFunctionPrettierRc,
  generateFunctionCommitlintRc,
  generatePackageJson,
  generateFunctionBabelConfig,
  generateFunctionIndexTest,
} = require('../../../templates/createTemplates/function-templates')

// eslint-disable-next-line no-unused-vars
const CreateCore = require('../createCore')

class handleFunction {
  /**
   *
   * @param {CreateCore} createCore
   */
  apply(createCore) {
    createCore.hooks.beforeConfigUpdate.tapPromise(
      'handleFunction',
      async (
        /**
         * @type {CreateCore}
         */
        core
      ) => {
        const { type } = core.cmdOpts
        if (type !== 4) return

        const { blockName } = core.cmdArgs

        core.blockDetails.language = core.blockDetails.language || 'nodejs'
        core.blockDetails.start = core.blockDetails.start || 'node index.js'

        const indexString = generateIndex(blockName)
        const gitIgnoreString = generateGitIgnore()
        const readmeString = generateFunctionReadme(blockName)
        const packageJsonString = generatePackageJson(blockName)
        const eslintrcString = generateFunctionEsLintRc()
        const prettierrcString = generateFunctionPrettierRc()
        const commitlintRcString = generateFunctionCommitlintRc()
        const babelConfigString = generateFunctionBabelConfig()
        const indexTestString = generateFunctionIndexTest()

        writeFileSync(`${core.blockFolderPath}/index.js`, indexString)
        writeFileSync(`${core.blockFolderPath}/package.json`, packageJsonString)
        writeFileSync(`${core.blockFolderPath}/.gitignore`, gitIgnoreString)
        writeFileSync(`${core.blockFolderPath}/README.md`, readmeString)
        writeFileSync(`${core.blockFolderPath}/.eslintrc.json`, eslintrcString)
        writeFileSync(`${core.blockFolderPath}/.prettierrc.json`, prettierrcString)
        writeFileSync(`${core.blockFolderPath}/.commitlintrc.json`, commitlintRcString)
        writeFileSync(`${core.blockFolderPath}/babel.config.json`, babelConfigString)
        mkdirSync(`${core.blockFolderPath}/tests`)
        writeFileSync(`${core.blockFolderPath}/tests/index.test.js`, indexTestString)
      }
    )
  }
}
module.exports = handleFunction
