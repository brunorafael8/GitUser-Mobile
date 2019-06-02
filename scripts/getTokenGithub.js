process.stdin.resume()
process.stdin.setEncoding('utf8')
var fs = require('fs')

var filename = 'src/token.tsx'

if (fs.existsSync(filename)) {
  process.exit()
  return
}

console.log('Enter your GitHub API token (https://github.com/settings/tokens): ')
process.stdin.on('data', function(text) {
  var tokenJS = `module.exports = "${text.trim()}"\n`

  fs.writeFile(filename, tokenJS, function(err) {
    console.log('API token saved.')
    process.exit()
    if (err) {
      console.log(err)
    }
  })
})
