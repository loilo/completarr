// NPM SCRIPT

// Take binaries from argv or from package.json
module.exports = process.argv.length > 2
  ? process.argv.slice(2)
  : Object.keys(require(process.cwd() + '/package.json').bin || {})
