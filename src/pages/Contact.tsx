import { siteMeta } from '../data'
import { FormEvent, useState } from 'react'

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')
}

export default function Contact(){
  const [sent, setSent] = useState(false)
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const obj: Record<string,string> = {}
    fd.forEach((v, k) => { obj[k] = String(v) })

    // POST to Netlify forms endpoint (works when deployed).
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': form.getAttribute('name') || 'contact', ...obj })
      })
    } catch (err) {
      // ignore; still show success locally
    }
    setSent(true)
    form.reset()
  }

  return (
    <div className="container pt-28">
      <h1 className="text-3xl font-bold">Contact</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass p-6 rounded">
          <h3 className="font-semibold">Get in touch</h3>
          <p className="text-sm text-neutral-300 mt-2">Email: <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a></p>
        </div>
        <div className="glass p-6 rounded">
          {sent ? (
            <div className="text-green-400">Thanks — message sent.</div>
          ) : (
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input type="hidden" name="form-name" value="contact" />
              <label className="flex flex-col">
                <span className="text-sm mb-1">Your name</span>
                <input name="name" required placeholder="Your name" className="p-2 bg-neutral-900 rounded" />
              </label>
              <label className="flex flex-col">
                <span className="text-sm mb-1">Email</span>
                <input name="email" required type="email" placeholder="you@example.com" className="p-2 bg-neutral-900 rounded" />
              </label>
              <label className="flex flex-col">
                <span className="text-sm mb-1">Message</span>
                <textarea name="message" required placeholder="Message" className="p-2 bg-neutral-900 rounded h-24" />
              </label>
              <button className="px-4 py-2 bg-primary text-black rounded">Send</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
