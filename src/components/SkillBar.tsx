import { motion } from 'framer-motion'

export default function SkillBar({name, level}:{name:string, level:number}){
  return (
    <div>
      <div className="flex justify-between text-sm">
        <span>{name}</span>
        <span className="text-neutral-400">{level}%</span>
      </div>
      <div className="w-full bg-neutral-800 h-2 rounded mt-2">
        <motion.div initial={{width:0}} animate={{width: `${level}%`}} className="h-2 bg-primary rounded" />
      </div>
    </div>
  )
}
