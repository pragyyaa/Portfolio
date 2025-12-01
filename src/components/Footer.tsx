import { siteMeta } from '../data'

export default function Footer(){
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <div className="text-neutral-400">© {new Date().getFullYear()} {siteMeta.name}. All rights reserved.</div>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href={siteMeta.github} target="_blank" rel="noreferrer" className="text-neutral-300">GitHub</a>
          <a href={siteMeta.linkedin} target="_blank" rel="noreferrer" className="text-neutral-300">LinkedIn</a>
          <a href={`mailto:${siteMeta.email}`} className="text-neutral-300">Contact</a>
        </div>
      </div>
    </footer>
  )
}
