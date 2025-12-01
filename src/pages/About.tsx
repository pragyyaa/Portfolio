import { siteMeta } from '../data'

export default function About(){
  return (
    <div className="container pt-28">
      <h1 className="text-3xl font-bold">About</h1>
      <div className="mt-6 glass p-6 rounded">
        <p className="text-neutral-300">I am {siteMeta.name}, a {siteMeta.role} based in {siteMeta.location}. I build web applications with a focus on performance and accessibility. (Replace this with your full about/resume text.)</p>
      </div>
    </div>
  )
}
