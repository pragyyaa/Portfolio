import Hero from '../components/Hero'
import { projects } from '../data'
import ProjectCard from '../components/ProjectCard'
import CertCarousel from '../components/CertCarousel'

export default function Home(){
  return (
    <div className="container pt-28">
      <Hero />
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(p => (
            <ProjectCard key={p.id} title={p.title} description={p.description} tech={p.tech} github={p.github} live={p.live} thumb={p.thumb} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <CertCarousel />
      </section>
    </div>
  )
}
