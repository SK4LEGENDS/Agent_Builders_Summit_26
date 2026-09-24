export interface Speaker {
  name: string;
  designation: string;
  company: string;
  bio: string;
  session?: string;
  featured?: boolean;
  /** Filename under /public/speakers/ — any common image type (png, jpg, webp, …) */
  image: string;
  linkedin?: string;
  imagePosition?: string;
}

export const speakers: Speaker[] = [
  {
    name: 'Kirubaharan M S',
    designation: 'Senior Vice President & India Site Lead',
    company: "Cardinality.AI",
    featured: true,
    image: 'Kirubakaran-new.jpg',
    bio: "Leadership experience across AI, product, engineering, GCCs and P&L. Author of the upcoming Artificial Abundance, exploring what it means to remain human in an age of abundant intelligence.",
    linkedin: 'https://www.linkedin.com/in/mskiruba/',
    imagePosition: 'center 18%',
  },
  {

    name: 'Treesa Maria Pius',
    designation: 'Keynote Speaker',
    company: "ABS '26",
    session: "A Day in a Builder's Life",
    featured: true,
    image: 'treesa.jpg',
    bio: "UiPath Certified RPA Professional and Senior Associate Consultant at Infosys, specializing in RPA and Agentic Automation. Passionate about using intelligent automation to improve business performance.",
    linkedin: 'https://www.linkedin.com/in/treesa-maria-pius/',
    imagePosition: 'center 18%',
  },
  {
    name: 'Palaniyappan P',
    designation: 'UiPath MVP',
    company: "Novo Nordisk",
    session: 'Multi-Agent Orchestration is the Future',
    featured: true,
    image: 'palaniyappan.jpg',
    bio: "5x UiPath MVP and Senior Architect at Novo Nordisk, specializing in Enterprise AI, Agentic Automation, and intelligent automation. Experienced in designing scalable AI solutions and leading enterprise automation initiatives.",
    linkedin: 'https://www.linkedin.com/in/palaniyappan-p-uipathmvp',
    imagePosition: 'center 15%',
  },
  {
    name: 'Nithin Krishna',
    designation: 'UiPath MVP',
    company: "ABS '26",
    session: 'How AI Powers Modern Enterprise',
    featured: true,
    image: 'nithin.jpg',
    bio: "UiPath MVP and Applied AI professional at KLA, specializing in Agentic Automation and real-world AI solutions. Focused on building and deploying AI systems that deliver practical business impact.",
    linkedin: 'https://www.linkedin.com/in/nmnithinkrishna/',
    imagePosition: 'center 16%',
  },
  {
    name: 'Ghanashyam Shankar',
    designation: 'Keynote Speaker',
    company: "ABS '26",
    featured: true,
    image: 'ghanashyam.jpg',
    bio: "Design Thinking and Design Sprint facilitator with nearly two decades of IT industry experience. Founder of Edler Hub, he has empowered 2,500+ professionals and students through innovation-focused workshops and programs.",
    linkedin: 'https://www.linkedin.com/in/ghanashyam/',
    imagePosition: 'center 20%',
  },
  {
    name: 'Dhivya Mohanakrishnan',
    designation: 'Solution Architect',
    company: 'Tech Mahindra',
    featured: true,
    image: 'dhivya-new.jpg',
    bio: 'UiPath Chennai Chapter - Community Award Winner',
    linkedin: 'https://www.linkedin.com/in/mdhivya/',
    imagePosition: 'center 12%',
  },
];
