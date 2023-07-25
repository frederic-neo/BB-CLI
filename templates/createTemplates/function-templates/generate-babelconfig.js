const generateBabelConfig = () => `
{
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "node": "current"
          }
        }
      ]
    ]
  }
`
module.exports = { generateFunctionBabelConfig: generateBabelConfig }
