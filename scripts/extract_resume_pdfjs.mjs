import fs from 'fs'
import path from 'path'
import * as pdfjs from '../node_modules/pdfjs-dist/legacy/build/pdf.mjs'

const filePath = path.join(path.dirname(''), '..', 'public', 'resume.pdf')
const outPath = path.join(new URL('.', import.meta.url).pathname, 'resume_text_pdfjs.txt')

const resolvedFilePath = path.join(process.cwd(), 'public', 'resume.pdf')
if (!fs.existsSync(resolvedFilePath)) {
  console.error('resume.pdf not found at', resolvedFilePath)
  process.exit(1)
}

const data = new Uint8Array(fs.readFileSync(resolvedFilePath))

async function extract() {
  const doc = await pdfjs.getDocument({ data }).promise
  let fullText = ''
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i)
    const content = await page.getTextContent()
    const strings = content.items.map(item => item.str)
    fullText += strings.join(' ') + '\n\n'
  }
  const out = path.join(process.cwd(), 'scripts', 'resume_text_pdfjs.txt')
  fs.writeFileSync(out, fullText, 'utf8')
  console.log('Wrote extracted text to', out)
}

extract().catch(err => { console.error('Extraction error', err); process.exit(1) })
