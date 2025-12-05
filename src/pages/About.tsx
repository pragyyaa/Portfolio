import { siteMeta } from '../data'

export default function About(){
  return (
    <div className="container pt-28">
      <h1 className="text-3xl font-bold">About</h1>
      <div className="mt-6 glass p-6 rounded">
        <p className="text-neutral-300">I am {siteMeta.name}, a {siteMeta.role} based in {siteMeta.location}. I am a Computer Science Engineering student passionate about building scalable, meaningful, and user-centric software. I work across full-stack development and machine learning, with hands-on experience in Node.js, Express, MongoDB, and real-time systems.

I recently developed an offline Speech-to-Text (STT) solution using Vosk/Kaldi for an edge device, where I worked on data preprocessing, fine-tuning, and model deployment. I enjoy solving technical challenges, designing efficient backend architectures, and creating tools that enhance real-world workflows.

I’m currently looking for opportunities in Software Development, Backend Engineering, and AI/ML roles where I can learn, contribute, and grow. </p>
      </div>
    </div>
  )
}
