import { certifications } from '../data'

export default function CertCarousel(){
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold">Certifications</h3>
      <div className="mt-3 flex gap-4 overflow-x-auto py-4">
        {certifications.map(c => (
          <div key={c.id} className="min-w-[220px] glass p-4 rounded">
            <img src={c.img} alt={c.title} className="h-20 w-full object-contain" />
            <div className="mt-2 text-sm">
              <div className="font-medium">{c.title}</div>
              <div className="text-neutral-400">{c.issuer} • {c.year}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
