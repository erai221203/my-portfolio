import { Project, Skill, SocialLink, NavItem, Experience, Education, Service, Certificate, Client } from '../types'

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Cert', href: '/certificates' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/erai221203', icon: 'FaGithub' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/eraianbu-rajkumar/', icon: 'FaLinkedin' },
  { name: 'Instagram', url: 'https://www.instagram.com/erai22_official/', icon: 'FaInstagram' },
  { name: 'Email', url: 'mailto:eraianbu872@gmail.com', icon: 'FaEnvelope' },
]

// Tech Skills
export const techSkills: Skill[] = [
  { name: 'Machine Learning', icon: 'SiTensorflow', level: 85, category: 'tech' },
  { name: 'Computer Vision', icon: 'SiOpencv', level: 80, category: 'tech' },
  { name: 'UIPath Studio', icon: 'SiUipath', level: 80, category: 'tech' },
  { name: 'Data Analysis', icon: 'SiPandas', level: 70, category: 'tech' },
  { name: 'Data Visualization', icon: 'SiPlotly', level: 80, category: 'tech' },
  { name: 'Linux-RPi', icon: 'FaLinux', level: 90, category: 'tech' },
  { name: 'ROS2', icon: 'SiRos', level: 65, category: 'tech' },
  { name: 'UI/UX Design - Figma', icon: 'FaFigma', level: 75, category: 'tech' },
  { name: 'Prompt Engineering', icon: 'SiOpenai', level: 75, category: 'tech' },
  { name: 'AutoCAD', icon: 'SiAutodesk', level: 90, category: 'tech' },
  { name: 'Fusion 360', icon: 'SiAutodesk', level: 60, category: 'tech' },
  { name: 'Front End Web Development', icon: 'FaHtml5', level: 85, category: 'tech' },
  { name: 'MongoDB Atlas', icon: 'SiMongodb', level: 65, category: 'tech' },
  { name: 'Streamlit', icon: 'SiStreamlit', level: 30, category: 'tech' },
  { name: 'API', icon: 'SiFastapi', level: 40, category: 'tech' },
  { name: 'GCP', icon: 'SiGooglecloud', level: 45, category: 'tech' },
]

// Programming Languages
export const programmingSkills: Skill[] = [
  { name: 'Python', icon: 'FaPython', level: 90, category: 'programming' },
  { name: 'MySQL', icon: 'SiMysql', level: 60, category: 'programming' },
  { name: 'HTML, CSS', icon: 'FaHtml5', level: 85, category: 'programming' },
  { name: 'R', icon: 'SiR', level: 60, category: 'programming' },
]

// Soft Skills
export const softSkills: Skill[] = [
  { name: 'Event Management', icon: 'FaCalendarAlt', level: 70, category: 'soft' },
  { name: 'DJing', icon: 'FaMusic', level: 75, category: 'soft' },
  { name: 'Problem Solving', icon: 'FaPuzzlePiece', level: 75, category: 'soft' },
  { name: 'Teamwork', icon: 'FaUsers', level: 80, category: 'soft' },
  { name: 'Leadership', icon: 'FaCrown', level: 75, category: 'soft' },
  { name: 'Critical Thinking', icon: 'FaBrain', level: 80, category: 'soft' },
]

// Hard Skills
export const hardSkills: Skill[] = [
  { name: 'Problem Solving', icon: 'FaPuzzlePiece', level: 75, category: 'hard' },
  { name: 'Chess', icon: 'FaChess', level: 90, category: 'hard' },
  { name: 'AutoCAD', icon: 'SiAutodesk', level: 90, category: 'hard' },
  { name: 'Fusion 360', icon: 'SiAutodesk', level: 60, category: 'hard' },
  { name: 'Data Analysis', icon: 'SiPandas', level: 70, category: 'hard' },
  { name: 'Data Visualization', icon: 'SiPlotly', level: 80, category: 'hard' },
  { name: 'PPT/Slides', icon: 'FaFilePowerpoint', level: 70, category: 'hard' },
  { name: 'Excel/Sheets', icon: 'SiMicrosoftexcel', level: 50, category: 'hard' },
  { name: 'Event Management', icon: 'FaCalendarAlt', level: 70, category: 'hard' },
]

// Combined skills
export const skills: Skill[] = [...techSkills, ...programmingSkills]

export const projects: Project[] = [
  {
    id: '1',
    title: 'FaceIQ',
    description: 'FaceIQ is an advanced face recognition web application that utilizes a live webcam feed to detect and identify faces in real-time. It draws bounding boxes and displays names on recognized faces. The platform also features integration with a real-time AI Q&A system powered by Retrieval-Augmented Generation (RAG).',
    image: '/assets/images/generated/faceiq.svg',
    technologies: ['Python', 'OpenCV', 'RAG', 'AI', 'Computer Vision'],
    liveUrl: 'https://www.linkedin.com/posts/eraianbu-rajkumar_faceiq-katomarantechnologies-aihackathon-activity-7340262623453618176-pqkm',
    featured: true,
    date: 'June 2025',
    tag: 'AI / Computer Vision',
  },
  {
    id: '2',
    title: 'E.D.I.O.N',
    description: 'A voice-controlled AI assistant inspired by JARVIS, built using Python, PyQt, and GPT4All for human-like interaction. Features include voice authentication, wake word detection, real-time OS control, and natural conversation via local LLMs.',
    image: '/assets/images/generated/edion.svg',
    technologies: ['Python', 'PyQt', 'GPT4All', 'Speech Recognition', 'NLP'],
    featured: true,
    date: 'May 2025 - Dec 2025',
    tag: 'AI Assistant',
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'Designed and deployed a responsive personal portfolio website using React (frontend) and Node.js (backend) in Cloudflare. Focused on delivering a smooth user experience with clean UI and optimized performance.',
    image: '/assets/images/generated/portfolio.svg',
    technologies: ['React', 'TypeScript', 'CSS', 'Vite', 'Cloudflare'],
    liveUrl: 'https://eraianbu.pages.dev/',
    featured: true,
    date: 'May 2025',
    tag: 'Web Development',
  },
  {
    id: '4',
    title: 'Cloud Radar System',
    description: 'Developed an AI-powered dual-axis solar tracker using Raspberry Pi and OpenCV for real-time sun and cloud detection, optimizing panel orientation and boosting energy capture by 15-20% in cloudy conditions.',
    image: '/assets/images/generated/crs.svg',
    technologies: ['Raspberry Pi', 'OpenCV', 'Python', 'IoT', 'AI'],
    liveUrl: 'https://ieeexplore.ieee.org/document/11183242',
    featured: true,
    date: 'Apr 2024 - Mar 2025',
    tag: 'IoT / AI',
  },
  {
    id: '5',
    title: 'Autonomous Mobile Robot',
    description: 'Developed a ROS2-based AI navigation system with smart path planning, sensor fusion, and real-time obstacle avoidance for intelligent material handling. Designed the robot chassis using Fusion 360 and AutoCAD.',
    image: '/assets/images/generated/amr.svg',
    technologies: ['ROS2', 'Python', 'Fusion 360', 'AutoCAD', 'AI Navigation'],
    liveUrl: 'https://www.linkedin.com/posts/eraianbu-rajkumar_protosem-forgeprotosem-autonomoussystems-activity-7292043590397005825-f7-Y',
    featured: true,
    date: 'Aug 2024 - Jan 2025',
    tag: 'Robotics / ROS 2',
  },
  {
    id: '6',
    title: 'Urban Layout Generation - Hackathon',
    description: 'Developed an AI-based urban planning tool using a hybrid VAE-CGAN to create urban layouts optimized for environmental constraints and sustainability.',
    image: '/assets/images/generated/urban.svg',
    technologies: ['Deep Learning', 'VAE', 'CGAN', 'Python', 'AI'],
    liveUrl: 'https://www.linkedin.com/posts/eraianbu-rajkumar_hackathon-innovation-generativeai-activity-7247322206567858176-2MVP',
    featured: false,
    date: '11 Sep 2024',
    tag: 'AI / Deep Learning',
  },
  {
    id: '7',
    title: 'IEEE Research Paper',
    description: 'Published research paper on AI-powered artistic techniques for automated storyboard generation. Presented at the 4th International Conference on Sustainable Expert Systems.',
    image: '/assets/images/generated/ieee.svg',
    technologies: ['AI', 'Research', 'Machine Learning', 'Computer Vision'],
    liveUrl: 'https://ieeexplore.ieee.org/abstract/document/10763187',
    featured: false,
    date: 'Apr 2024 - Oct 2024',
    tag: 'Research / Publication',
  },
  {
    id: '8',
    title: 'Codsoft - ML Internship Projects',
    description: 'Developed machine learning models in Python for real-world classification tasks including spam detection, movie genre classification, and churn prediction using NLP and feature engineering techniques.',
    image: '/assets/images/generated/codsoft.svg',
    technologies: ['Python', 'Machine Learning', 'NLP', 'Scikit-learn'],
    githubUrl: 'https://github.com/erai221203/Codsoft',
    featured: false,
    date: 'May 2024 - Jun 2024',
    tag: 'Machine Learning',
  },
]

export const personalInfo = {
  name: 'Eraianbu Rajkumar',
  title: 'Quality Assurance Intelligence Intern | AIML Engineer | Data Analyst',
  email: ' eraianbu872@gmail.com',
  phone: ' +91 63824 84009',
  dob: 'Dec 22, 2003',
  location: ' Coimbatore, Tamil Nadu, India',
  bio: "I'm passionate about building AI-driven solutions that address real-world challenges, with hands-on experience in computer vision, machine learning, and robotics. My journey includes innovative projects such as a solar tracking system and an AI-powered storyboard generator.",
  bio2: "Currently pursuing a B.Tech in Artificial Intelligence and Data Science at Kumaraguru College of Technology (KCT), I'm specializing in Data Analytics and continuously exploring ways to turn data into impactful insights.",
  bio3: "In addition to my AI expertise, I'm also a Front-End Web Developer who enjoys crafting user-friendly, visually engaging websites. I strive to blend functionality with creative design to deliver meaningful and intuitive digital experiences.",
  resumeUrl: '/assets/Eraianbu R.pdf',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125535.24431530797!2d77.49757500624157!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0db49a1c7c5b%3A0xd56d8a70a9b3d337!2sCoimbatore%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1647608789441!5m2!1sen!2sin',
  contactFormUrl: 'https://forms.gle/t1jQAbFXAj43Yd3B6',
}

export const services: Service[] = [
  { title: 'ML Model & CV', description: 'Developing the Machine learning model for the testimonials and also the CV models.', icon: 'cv' },
  { title: 'RPA Automation', description: 'Automate the softwares using UIPath Studio.', icon: 'automate' },
  { title: 'UI/UX Design', description: 'The most modern and high-quality design made at a intermediate level on figma as required.', icon: 'uiux' },
  { title: 'Front End Web Development', description: 'Best development of websites at the intermediate level.', icon: 'dev' },
  { title: 'CAD Model Designing', description: 'I have professional expertise in 2D CAD design using AutoCAD and intermediate proficiency in 3D design using Fusion 360.', icon: 'cad' },
  { title: 'Photography', description: 'Passionate about photography and videography, with hands-on experience in digital and social media marketing for my college department.', icon: 'camera' },
]

export const experience: Experience[] = [
  { title: 'Quality Assurance Intelligence Intern', company: 'Stats Perform, Bengaluru, India', period: 'Oct 2025 — Present', description: 'Quality Assurance Team.' },
  { title: 'Vice President', company: 'Department of AI & Data Science, KCT', period: 'Aug 2025 — Present', description: 'Leading department association initiatives and activities.' },
  { title: 'Alumni Ambassador', company: 'Department of AI & Data Science, KCT', period: 'Oct 2024 — Present', description: 'Connecting alumni with current students and department activities.' },
  { title: 'CRS-Paper Presentation - IEEE', company: 'IEEE', period: 'Apr 2024 — Mar 2025', description: 'AI-Driven Solar Panel Optimization during Cloudy times Using Real-Time Image Processing.', link: 'https://ieeexplore.ieee.org/document/11183242' },
  { title: 'Treasurer', company: 'Department Association of AI & Data Science, KCT', period: 'Aug 2024 — Aug 2025', description: 'Managing department association finances and budget.' },
  { title: 'Technical Lead', company: 'Ezon Energy Solutions (P) Ltd', period: 'Apr 2024 — Mar 2025', description: 'CRS Project with the company Ezon Energy Solutions (P) Ltd.' },
  { title: 'Innovation Engineer - Intern', company: 'Forge Innovation and Ventures', period: 'Aug 2024 — Dec 2024', description: 'Working on innovative engineering projects and robotics.' },
  { title: 'Paper Presentation - IEEE', company: 'IEEE - 4th International Conference on Sustainable Expert Systems', period: 'Apr 2024 — Oct 2024', description: 'Artistic Fusion: AI Powered Artistry for Story Boarding.', link: 'https://ieeexplore.ieee.org/document/10763187' },
  { title: 'ML Engineer - Intern', company: 'Codsoft (Virtual)', period: 'May 2024 — Jun 2024', description: 'Virtual Internship @Codsoft. Developed ML models for classification tasks.' },
  { title: 'Executive Member', company: 'Department Association of AI & Data Science, KCT', period: 'Oct 2023 — Aug 2024', description: 'Supporting department association activities and events.' },
]

export const education: Education[] = [
  { institution: 'Kumaraguru College of Technology, Coimbatore', degree: 'B.Tech Artificial Intelligence and Data Science', period: '2022 — Present', grade: 'CGPA: 7.63 Credits: 132 (Till 6th semester)' },
  { institution: 'The Vijay Millennium SR Sec School, Krishnagiri', degree: 'Higher Secondary (Class 11 & 12)', period: '2020 — 2022', grade: 'Secured 74.5% in 12th standard' },
  { institution: 'Sri Vijay Vidyalaya Boys HR Sec School, Dharmapuri', degree: 'Class 10', period: '2019 — 2020', grade: 'Secured 96.4% in 10th standard' },
]

export const clients: Client[] = [
  { name: 'KCIRI', url: 'https://kciri.kct.ac.in/', logo: '/assets/images/clients/KCIRI.png' },
  { name: 'Ezon', url: 'https://ezon.in/', logo: '/assets/images/clients/Ezon.png' },
  { name: 'Forge Innovation', url: 'https://in.linkedin.com/company/forge-innovation-ventures', logo: '/assets/images/clients/forge.svg' },
  { name: 'Kal-M Robotics', url: 'https://in.linkedin.com/company/kal-m-robotics-and-innovations', logo: '/assets/images/clients/kalm.png' },
]

export const certificates: Certificate[] = [
  { title: 'Leadership and Volunteerism Award - Yugam', issuer: 'KI', date: 'March, 2026', url: '/assets/images/Cert/LVA-Yug.jpg', image: '/assets/images/Cert/LVA-Yug.jpg' },
  { title: 'AI-Driven Solar Panel Optimization during Cloudy times Using Real-Time Image Processing', issuer: 'IEEE', date: 'Aug 21 & 22, 2026', url: '/assets/images/Cert/RP-CRS.jpg', image: '/assets/images/Cert/RP-CRS.jpg' },
  { title: 'HappyFox Hackathon', issuer: 'HappyFox', date: 'July 24 & 25, 2025', url: '/assets/images/Cert/HappyFox.jpg', image: '/assets/images/Cert/HappyFox.jpg' },
  { title: 'Cloud Radar System', issuer: 'KCT-KCIRI-Ezon', date: 'Apr, 2025', url: '/assets/images/Cert/PC-CRS.jpg', image: '/assets/images/Cert/PC-CRS.jpg' },
  { title: 'Sustainathon - 25', issuer: 'KSI', date: 'Jan 23 & 24, 2025', url: '/assets/images/Cert/Sustainathon-25.jpg', image: '/assets/images/Cert/Sustainathon-25.jpg' },
  { title: 'Autonomous Mobile Robot', issuer: 'Forge Innovation & Ventures', date: 'Jan, 2025', url: '/assets/images/Cert/Protosem.jpg', image: '/assets/images/Cert/Protosem.jpg' },
  { title: 'Dept Recognition Award - Best Volunteer', issuer: 'KI-Dept of AI & DS', date: 'Apr, 2026', url: '/assets/images/Cert/DRA-BV.jpg', image: '/assets/images/Cert/DRA-BV.jpg' },
  { title: 'Web Development', issuer: 'Udemy', date: 'May 31, 2024', url: 'https://www.udemy.com/certificate/UC-15189e34-4140-4159-b9b7-7cae09ffb38a/', image: '/assets/images/Cert/Web-dev.jpeg' },
  { title: 'Data Science with Python', issuer: 'Great Learning', date: 'Apr, 2023', url: 'https://olympus.mygreatlearning.com/courses/11265/certificate?pb_id=581', image: '/assets/images/Cert/GL-DS.jpg' },
  { title: 'ROS2 For Beginners', issuer: 'Udemy', date: 'Mar 26, 2024', url: 'https://www.udemy.com/certificate/UC-f4085bee-232c-4f12-b8a8-1d3e5ad43201/', image: '/assets/images/Cert/ROS2.jpeg' },
  { title: 'Wise-AI-Thon-2024', issuer: 'KSI', date: 'Sep 10 & 11, 2024', url: '/assets/images/Cert/WiseAiThon-24.jpg', image: '/assets/images/Cert/WiseAiThon-24.jpg' },
  { title: 'Terra Nova Hackathon', issuer: 'KCT-IEEE', date: 'May 24, 2024', url: '/assets/images/Cert/Terra-Nova.jpeg', image: '/assets/images/Cert/Terra-Nova.jpeg' },
  { title: 'SIHH-2023 Volunteering', issuer: 'Forge Innovation & Ventures-SIH', date: 'Dec, 2023', url: '/assets/images/Cert/SIH-2023.jpg', image: '/assets/images/Cert/SIH-2023.jpg' },
  { title: 'SIHH-2024 Volunteering', issuer: 'Forge Innovation & Ventures-SIH', date: 'Dec, 2024', url: '/assets/images/Cert/SIH-2024.jpg', image: '/assets/images/Cert/SIH-2024.jpg' },
  { title: 'Artistic Fusion : AI Powered Artisty for Story Boarding', issuer: 'IEEE', date: 'Oct 15 to 17, 2024', url: '/assets/images/Cert/RP-Story.jpg', image: '/assets/images/Cert/RP-Story.jpg' },
  { title: 'Robotics and Drones Workshop', issuer: 'KSI-Entudio', date: 'Apr 4 to 6, 2024', url: '/assets/images/Cert/Robotics&Drones.jpg', image: '/assets/images/Cert/Robotics&Drones.jpg' },
  { title: 'ML Engineer Intern', issuer: 'Codsoft', date: 'May 5 to June 5, 2024', url: '/assets/images/Cert/Codsoft.png', image: '/assets/images/Cert/Codsoft.png' },
  { title: 'Gen AI - Hands on with Transformers', issuer: 'KCT-Dept of AI & DS', date: 'May 7, 2024', url: '/assets/images/Cert/Gen-AI.jpeg', image: '/assets/images/Cert/Gen-AI.jpeg' },
  { title: 'Python Programming Advanced', issuer: 'Infosys', date: 'Nov 27, 2023', url: '/assets/images/Cert/Infosys.jpg', image: '/assets/images/Cert/Infosys.jpg' },
]

// ============================================
// IMAGE PLACEHOLDERS - Replace these paths with actual images
// ============================================

// Profile Images (place in /public/assets/images/me/)
export const profileImages = {
  avatar: '/assets/images/me/new.jpg',      // Main profile photo (sidebar)
  about: '/assets/images/me/me.svg',        // About section image
  favicon: '/assets/images/me/me.png',      // Browser favicon
}

// Project Images (place in /public/images/)
export const projectImages = {
  faceiq: '/assets/images/generated/faceiq.svg',
  edion: '/assets/images/generated/edion.svg',
  portfolio: '/assets/images/generated/portfolio.svg',
  crs: '/assets/images/generated/crs.svg',
  amr: '/assets/images/generated/amr.svg',
  urban: '/assets/images/generated/urban.svg',
  ieee: '/assets/images/generated/ieee.svg',
  codsoft: '/assets/images/generated/codsoft.svg',
}

// Certificate Images (place in /public/assets/images/Cert/)
export const certificateImages = {
  lvaYug: '/assets/images/Cert/LVA-Yug.jpg',
  rpCrs: '/assets/images/Cert/RP-CRS.jpg',
  happyFox: '/assets/images/Cert/HappyFox.jpg',
  sustainathon25: '/assets/images/Cert/Sustainathon-25.jpg',
  crs: '/assets/images/Cert/PC-CRS.jpg',
  protosem: '/assets/images/Cert/Protosem.jpg',
  award: '/assets/images/Cert/DRA-BV.jpg',
  webDev: '/assets/images/Cert/Web-dev.jpeg',
  dataScience: '/assets/images/Cert/GL-DS.jpg',
  ros2: '/assets/images/Cert/ROS2.jpeg',
  wiseaithon: '/assets/images/Cert/WiseAiThon-24.jpg',
  terraNova: '/assets/images/Cert/Terra-Nova.jpeg',
  sih2023: '/assets/images/Cert/SIH-2023.jpg',
  sih2024: '/assets/images/Cert/SIH-2024.jpg',
  rpStory: '/assets/images/Cert/RP-Story.jpg',
  roboticsWorkshop: '/assets/images/Cert/Robotics&Drones.jpg',
  codsoft: '/assets/images/Cert/Codsoft.png',
  genAi: '/assets/images/Cert/Gen-AI.jpeg',
  infosys: '/assets/images/Cert/Infosys.jpg',
}

// Client Logos (place in /public/assets/images/clients/)
export const clientImages = {
  kciri: '/assets/images/clients/KCIRI.png',
  ezon: '/assets/images/clients/Ezon.png',
  forge: '/assets/images/clients/forge.svg',
  kalm: '/assets/images/clients/kalm.png',
}

// Service Icons (place in /public/assets/images/logo/)
export const serviceIcons = {
  cv: '/assets/images/logo/CV.svg',
  automate: '/assets/images/logo/automate.svg',
  uiux: '/assets/images/logo/UIUX.svg',
  dev: '/assets/images/logo/dev.svg',
  cad: '/assets/images/logo/cad.svg',
  camera: '/assets/images/logo/camera.svg',
}
