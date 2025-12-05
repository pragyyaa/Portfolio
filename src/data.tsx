
export const siteMeta = {
  name: 'Pragya Sood',
  role: 'Computer Science Student / Web Developer',
  location: 'Bengaluru, India',
  email: '22btrcn209@jainuniversity.ac.in',
  github: 'https://github.com/pragyyaa',
  linkedin: 'https://www.linkedin.com/in/pragya-sood2004/',
  resume: '/resume.pdf',
  about: `Final-year B.Tech Computer Science student at Jain University with a strong foundation in software development, data structures, and backend engineering. Experienced in building scalable web platforms and automation tools using technologies like Node.js, Express.js, and MongoDB. Throughout my academic journey, I’ve consistently combined strong theoretical knowledge with hands-on experience in full-stack development, backend systems, and machine learning integration. I enjoy collaborating on technical challenges, building optimized backend systems, and improving user experience through robust application logic. Currently, I’m seeking full-time roles in Software Development, Backend Engineering, or ML/AI domains where I can contribute, grow, and help drive meaningful impact within innovative teams.`
}

export const skills = [
  { name: 'Python', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'HTML & CSS', level: 85 },
  { name: 'MongoDB', level: 75 },
  { name: 'Machine Learning (basics)', level: 70 },
  { name: 'RESTful APIs', level: 75 },
  { name: 'Git & GitHub', level: 80 },
  { name: 'Data Structures & Algorithms', level: 75 }
]

export const projects = [
  {
    id: 'p-stt-edge',
    title: 'Real-time Speech-to-Text (STT) — Edge (Vosk/Kaldi)',
    description: 'Fine-tuned Vosk (Kaldi-based) STT model for Indian English, deployed for offline edge inference. Worked with audio preprocessing, model fine-tuning, and on-device integration for a BRYCK AI edge device.',
    tech: ['Vosk / Kaldi', 'Python', 'FFmpeg', 'Google Colab', 'Edge deployment'],
    github: 'https://github.com/pragyaruchisood/stt-edge', // update or remove
    live: '',
    thumb: '/images/projects/speech_to_text.png'
  },
  {
    id: 'p-product-pricing',
    title: 'Product Pricing System',
    description: 'A MySQL-backed pricing system that calculates final product prices based on BOM, manufacturing value-add, yields, warranty, and market segment factors; role-based access for Superadmin.',
    tech: ['MySQL', 'Node.js', 'Express', 'JS', 'REST APIs'],
    github: 'https://github.com/pragyaruchisood/product-pricing-system',
    live: '',
    thumb: '/images/projects/product_pricing system.png'
  },
  {
    id: 'p-virtual-canvas',
    title: 'Virtual Canvas — Air-Writing System (Computer Vision)',
    description: 'Webcam-based air-writing/drawing application using computer vision to track finger motion, convert gestures into drawing/strokes, and export artwork — built as an HCI/interaction demo.',
    tech: ['JavaScript', 'WebRTC', 'OpenCV / TensorFlow.js (optional)'],
    github: 'https://github.com/pragyaruchisood/virtual-canvas',
    live: '',
    thumb: '/images/projects/virtual_canva.png'
  },
]


export const experience = [
  {
    Company: 'Tsecond, Bengaluru',
    Role: 'Software Trainee',
    period: 'Feb 2025 - July 2025',
    details: 'Fine-tuned Vosk (Kaldi-based) STT model for Indian English, deployed for offline edge inference. Worked with audio preprocessing, model fine-tuning, and on-device integration for a BRYCK AI edge device.'
  },
]

export const education = [
  {
    institution: 'Jain University, Bengaluru',
    degree: 'B.Tech in Computer Science and Engineering',
    period: 'Aug 2022 - Present',
    details: []
  },
  {
    institution: 'Deeksha College For Leaning, Bengaluru',
    degree: '12th Grade - Science Stream',
    period: '2020-2022',
    details: []
  }
]

export const certifications = [
  { id: 'cert-mysql', title: 'Linux Fundamentals', issuer: 'Coursera', year: 2024, img: '/images/projects/linux_certi.png' },
  { id: 'cert-ml', title: 'Machine Learning with Python', issuer: 'Google', year: 2024, img: '/images/projects/ml_certi.png' },
  { id: 'cert-cyber', title: 'Cybersecurity for Everyone', issuer: '', year: 2025, img: '/images/projects/cyber_certi.png' },
  { id: 'cert-problem', title: 'GenAI for Everyone', issuer: '', year: 2022, img: '/images/projects/gen_certi.png' }
]

