const fs = require('fs')
const path = require('path')
const pdf = require('pdf-parse')

const filePath = path.join(__dirname, '..', 'public', 'resume.pdf')
const outPath = path.join(__dirname, 'resume_text.txt')

if (!fs.existsSync(filePath)) {
  console.error('resume.pdf not found at', filePath)
  process.exit(1)
}

const dataBuffer = fs.readFileSync(filePath)

pdf(dataBuffer).then(function(data) {
  // data.text contains the text
  fs.writeFileSync(outPath, data.text, 'utf8')
  console.log('Wrote text to', outPath)
}).catch(err => {
  console.error('pdf parse error', err)
  process.exit(1)
})
