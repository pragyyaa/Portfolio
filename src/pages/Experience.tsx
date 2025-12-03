import { experience } from '../data'
import { motion } from 'framer-motion'

export default function Experience(){
  return (
    <div className="container pt-28">
      <h1 className="text-3xl font-bold">Experience</h1>
      <div className="mt-6 space-y-6">
  {experience.map((e: any, idx: number) => (
          <motion.div
            key={e.company ?? idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.08 }}
            className="glass p-6 rounded"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">
                  {e.role} <span className="text-neutral-400">@ {e.company}</span>
                </h3>
                <div className="text-sm text-neutral-400">{e.period}</div>
              </div>
            </div>
            <ul className="mt-3 list-disc list-inside text-neutral-300">
              {e.bullets?.map((b: any, i: number) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
