module.exports = {
  plugins: [
    require('@poi/plugin-typescript')(),
    require('@poi/plugin-eslint')({ command: '' }),
    require('./plugin-tslint')({ command: '' }),
  ],
}
