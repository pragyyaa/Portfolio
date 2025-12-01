import { projects } from '../data'
import ProjectCard from '../components/ProjectCard'

export default function Projects(){
  return (
    <div className="container pt-28">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(p => (
          <ProjectCard key={p.id} title={p.title} description={p.description} tech={p.tech} github={p.github} live={p.live} />
        ))}
      </div>
    </div>
  )
}
