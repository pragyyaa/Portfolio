import { motion } from 'framer-motion'

type Props = {
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
  thumb?: string
}

export default function ProjectCard({ title, description, tech, github, live, thumb }: Props){
  return (
    <motion.article whileHover={{ scale: 1.03 }} className="glass rounded-lg shadow-md overflow-hidden">
      {thumb && (
        <div className="h-40 w-full overflow-hidden">
          <motion.img src={thumb} alt={title} className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105" />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-neutral-300 mt-2">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map(t => <span key={t} className="text-xs px-2 py-1 bg-neutral-800 rounded">{t}</span>)}
        </div>
        <div className="mt-4 flex gap-3">
          {github && <a href={github} target="_blank" rel="noreferrer" className="px-3 py-1 bg-neutral-800 rounded">GitHub</a>}
          {live && <a href={live} target="_blank" rel="noreferrer" className="px-3 py-1 bg-primary text-black rounded">Live</a>}
        </div>
      </div>
    </motion.article>
  )
}
