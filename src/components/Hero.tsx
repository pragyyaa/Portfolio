import { motion } from 'framer-motion'
import { siteMeta } from '../data'

export default function Hero(){
  return (
    <section className="pt-28 pb-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.1}}>
            <h1 className="text-4xl md:text-5xl font-bold neon">{siteMeta.name}</h1>
            <p className="mt-4 text-neutral-300">{siteMeta.role} — building beautiful, accessible web experiences.</p>
            <div className="mt-6 flex gap-3">
              <a href="/projects" className="px-4 py-2 bg-primary text-black rounded">View Projects</a>
              <a href={siteMeta.resume} className="px-4 py-2 border border-neutral-700 rounded" download>Download Resume</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
              {/* large soft glow positioned slightly to the right */}
              <div className="absolute -right-8 md:-right-16 top-1/2 transform -translate-y-1/2">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-orange-600 to-amber-400 opacity-20 blur-3xl" />
              </div>

              {/* portrait image */}
              <div className="relative z-20 w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden bg-neutral-900 border border-neutral-700 flex items-center justify-center">
                <img src="/images/profile.jpg" alt={`${siteMeta.name} portrait`} className="w-full h-full object-cover" />
              </div>

              {/* decorative initials to the right (subtle) */}
              <div className="absolute right-6 md:right-12 text-center z-10">
                <div className="hidden md:block text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-orange-600 opacity-90">RS</div>
              </div>

              {/* contact card (keeps same placement) */}
              <div className="absolute bottom-0 translate-y-8 w-56 md:w-64 z-30">
                <div className="glass rounded-lg p-4 text-center">
                  <h4 className="font-semibold">Contact</h4>
                  <p className="text-sm text-neutral-300">{siteMeta.location} • <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a></p>
                  <div className="mt-3 flex justify-center gap-4 text-sm">
                    <a href={siteMeta.github} target="_blank" rel="noreferrer">GitHub</a>
                    <a href={siteMeta.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
