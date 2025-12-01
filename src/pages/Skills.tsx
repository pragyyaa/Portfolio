import { skills } from '../data'
import SkillBar from '../components/SkillBar'

export default function Skills(){
  return (
    <div className="container pt-28">
      <h1 className="text-3xl font-bold">Skills</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map(s => (
          <div key={s.name} className="p-4 glass rounded">
            <SkillBar name={s.name} level={s.level} />
          </div>
        ))}
      </div>
    </div>
  )
}
