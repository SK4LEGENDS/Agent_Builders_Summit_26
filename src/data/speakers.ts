export interface Speaker {
  name: string;
  designation: string;
  company: string;
  bio: string;
  session?: string;
  featured?: boolean;
  /** Filename under /public/speakers/ — any common image type (png, jpg, webp, …) */
  image: string;
}

export const speakers: Speaker[] = [
  {
    name: 'Treesa Maria Pius',
    designation: 'Keynote Speaker',
    company: "ABS '26",
    session: "A Day in a Builder's Life",
    featured: true,
    image: 'treesa.jpg',
    bio: "UiPath Certified RPA Professional and Senior Associate Consultant at Infosys, specializing in RPA and Agentic Automation. Passionate about using intelligent automation to improve business performance.",
  },
  {
    name: 'Palaniyappan P',
    designation: 'UiPath MVP',
    company: "ABS '26",
    session: 'Multi-Agent Orchestration is the Future',
    featured: true,
    image: 'palaniyappan.jpg',
    bio: "5x UiPath MVP and Senior Architect at Novo Nordisk, specializing in Enterprise AI, Agentic Automation, and intelligent automation. Experienced in designing scalable AI solutions and leading enterprise automation initiatives.",
  },
  {
    name: 'Nithin Krishna',
    designation: 'UiPath MVP',
    company: "ABS '26",
    session: 'How AI Powers Modern Enterprise',
    featured: true,
    image: 'nithin.jpg',
    bio: "UiPath MVP and Applied AI professional at KLA, specializing in Agentic Automation and real-world AI solutions. Focused on building and deploying AI systems that deliver practical business impact.",
  },
  {
    name: 'Ghanashyam Shankar',
    designation: 'Keynote Speaker',
    company: "ABS '26",
    image: 'ghanashyam.jpg',
    bio: "Design Thinking and Design Sprint facilitator with nearly two decades of IT industry experience. Founder of Edler Hub, he has empowered 2,500+ professionals and students through innovation-focused workshops and programs.",
  },
  {
    name: 'Arjun Mehta',
    designation: 'Systems Architect',
    company: 'Multi-Agent',
    image: 'arjun-mehta.jpg',
    bio: 'Designs autonomous agent orchestration platforms for enterprise workflows. Open-source contributor to leading agent frameworks.',
  },
  {
    name: 'Lakshmi Narayanan',
    designation: 'AI Director',
    company: 'Enterprise AI',
    image: 'lakshmi-narayanan.jpg',
    bio: 'Leads AI transformation initiatives across Fortune 500 companies. Specializes in scaling intelligent automation from prototype to production.',
  },
  {
    name: 'Kavitha Rajan',
    designation: 'Community Lead',
    company: 'Dev Clubs',
    image: 'kavitha-rajan.jpg',
    bio: 'Built and nurtures one of the largest student developer communities in South India. Champion of open-source adoption in academia.',
  },
  {
    name: 'Vikram Singh',
    designation: 'Full Stack Engineer',
    company: 'Platform',
    image: 'vikram-singh.jpg',
    bio: 'Architects end-to-end systems spanning cloud-native backends and modern frontend frameworks. Advocate for developer experience.',
  },
  {
    name: 'Ananya Krishnan',
    designation: 'MLOps Specialist',
    company: 'Data Platform',
    image: 'ananya-krishnan.jpg',
    bio: 'Expert in model deployment pipelines, feature stores, and monitoring. Passionate about bridging the gap between data science and engineering.',
  },
  {
    name: 'Rahul Verma',
    designation: 'Infrastructure Lead',
    company: 'Cloud',
    image: 'rahul-verma.jpg',
    bio: 'Designs resilient, cost-efficient cloud architectures. Kubernetes contributor and infrastructure-as-code evangelist.',
  },
  {
    name: 'Meera Iyer',
    designation: 'UX Engineering Director',
    company: 'Product',
    image: 'meera-iyer.jpg',
    bio: 'Combines design sensibility with engineering rigor to ship beautiful, accessible products at scale.',
  },
  {
    name: 'Nithya Balaji',
    designation: 'Security Engineering Lead',
    company: 'AppSec',
    image: 'nithya-balaji.jpg',
    bio: 'Specializes in application security, threat modeling, and secure-by-design principles for modern software systems.',
  },
];
