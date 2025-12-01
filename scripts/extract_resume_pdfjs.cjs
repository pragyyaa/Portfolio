const fs = require('fs')
const path = require('path')
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js')

const filePath = path.join(__dirname, '..', 'public', 'resume.pdf')
const outPath = path.join(__dirname, 'resume_text_pdfjs.txt')

if (!fs.existsSync(filePath)) {
  console.error('resume.pdf not found at', filePath)
  process.exit(1)
}

const data = new Uint8Array(fs.readFileSync(filePath))

async function extract() {
  const doc = await pdfjsLib.getDocument({ data }).promise
  let fullText = ''
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i)
    const content = await page.getTextContent()
    const strings = content.items.map(item => item.str)
    fullText += strings.join(' ') + '\n\n'
  }
  fs.writeFileSync(outPath, fullText, 'utf8')
  console.log('Wrote extracted text to', outPath)
}

extract().catch(err => { console.error('Extraction error', err); process.exit(1) })
