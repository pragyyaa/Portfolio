// Richer sample data - replace with your real resume details.
export const siteMeta = {
  name: 'Prakhar Shukla',
  role: 'Computer Science Student / Web Developer',
  location: 'Bengaluru, India',
  email: 'prakharshukla2323@gmail.com',
  github: 'https://github.com/dashboard',
  linkedin: 'https://www.linkedin.com/in/prakhar-shukla-833881370',
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
    id: 'spam-sms-classifier',
    title: 'Spam SMS Classifier',
    description: 'A machine learning pipeline that classifies SMS messages as spam or not-spam using NLP preprocessing and a Naive Bayes model. Processed over 5,000 labeled samples and achieved high precision/recall.',
    tech: ['Python', 'scikit-learn', 'NLP', 'TF-IDF'],
    github: '',
    live: '',
    thumb: '/images/projects/spam-sms-classifier.jpg'
  },
  {
    id: 'event-management-platform',
    title: 'Event Management Platform',
    description: 'Full-stack event registration platform with dynamic front-end and MongoDB backend; optimized registration flow and improved performance for large user loads.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MongoDB'],
    github: '',
    live: '',
    thumb: '/images/projects/event-management-platform.jpg'
  },
  {
    id: 'mentorship-platform',
    title: 'Mentorship Platform',
    description: 'A mentorship matchmaking platform enabling mentor discovery, scheduling and responsive UI to connect learners with mentors.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MongoDB'],
    github: '',
    live: '',
    thumb: '/images/projects/mentorship-platform.jpg'
  }
]

// No formal industry experience listed in the resume; keep experience empty or use education instead.
export const experience = []

export const education = [
  {
    institution: 'Jain University, Bengaluru',
    degree: 'B.Tech in Computer Science and Engineering',
    period: 'Aug 2022 - Present',
    details: []
  },
  {
    institution: 'Yugantar Public School',
    degree: '12th Grade - Science Stream',
    period: '2022',
    details: []
  }
]

export const certifications = [
  { id: 'cert-mysql', title: 'MySQL for Data Analytics & Business Intelligence', issuer: 'Coursera', year: 2024, img: '/assets/cert-performance.png' },
  { id: 'cert-ml', title: 'Get Started with Machine Learning', issuer: 'Google', year: 2024, img: '/assets/cert-a11y.png' },
  { id: 'cert-cyber', title: 'Cybersecurity for Everyone', issuer: '', year: 2025, img: '/assets/cert-performance.png' },
  { id: 'cert-problem', title: 'Effective Problem-Solving and Decision-Making', issuer: '', year: 2022, img: '/assets/cert-a11y.png' }
]

