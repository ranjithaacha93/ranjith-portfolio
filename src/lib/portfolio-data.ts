export const profile = {
  name: "Ranjith",
  role: "Full Stack Developer & AI Specialist",
  location: "Chennai, India",
  company: "Shine Nexa Technology",
  currently: "Building a WordPress platform",
  email: "aacharanjith55@gmail.com",
  phone: "+91 93613 67593",
  socials: {
    linkedin: "https://www.linkedin.com/in/ranjith55/",
    github: "https://github.com/ranjithaacha93",
    email: "mailto:aacharanjith55@gmail.com",
  },
  intro:
    "I build production-grade web apps, AI-powered chatbots, and end-to-end systems that turn rough ideas into impactful digital products.",
  about:
    "I'm a Full Stack Developer at Shine Nexa Technology, based in Chennai, India. I build web applications, AI-powered chatbots, and scalable backend systems — turning ideas into digital products that work well and look good doing it.",
  about2:
    "My work spans React and Node.js backends, WordPress solutions, and Generative AI integrations, with a strong focus on clean code, performance, and SEO-friendly builds.",
};

export const socials = [
  {
    name: "LinkedIn",
    label: "LinkedIn Profile",
    url: "https://www.linkedin.com/in/ranjith55/",
    handle: "in/ranjith55",
  },
  {
    name: "GitHub",
    label: "GitHub Profile",
    url: "https://github.com/ranjithaacha93",
    handle: "ranjithaacha93",
  },
  {
    name: "Gmail",
    label: "Send an Email",
    url: "mailto:aacharanjith55@gmail.com",
    handle: "aacharanjith55@gmail.com",
  },
];

export const stats = [
  { value: "1+", label: "Years of experience" },
  { value: "20+", label: "Projects completed" },
  { value: "15+", label: "Tech stack" },
  { value: "100%", label: "Client satisfaction" },
];

export const capabilities = [
  {
    no: "01",
    title: "Full Stack Engineering",
    body: "React front ends wired to Node and REST services, with MongoDB and MySQL data layers. Clean architecture, typed contracts, and builds that stay fast as they grow.",
  },
  {
    no: "02",
    title: "AI & Automation",
    body: "Chatbots, prompt engineering, and Generative AI integrations that actually ship — plugged into real products, real data, and real support workflows.",
  },
  {
    no: "03",
    title: "CMS, SEO & Growth",
    body: "WordPress and WooCommerce platforms with custom plugins, on-page SEO, technical audits, and Core Web Vitals work that moves rankings, not just reports.",
  },
];

export const skillGroups = [
  {
    name: "Frontend",
    blurb:
      "Building engaging, accessible interfaces with modern React patterns, semantic markup, and pixel-accurate design handoffs.",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Bootstrap", "Responsive Web Design", "Figma"],
  },
  {
    name: "Backend",
    blurb:
      "Developing robust server-side logic and APIs that power dynamic, scalable products with clean contracts.",
    items: ["Node.js", "Express.js", "PHP", "REST API Integration", "File Upload Microservices"],
  },
  {
    name: "Database",
    blurb: "Designing schemas and queries for secure, reliable, and efficient data storage and retrieval.",
    items: ["MongoDB", "MySQL"],
  },
  {
    name: "CMS & Platforms",
    blurb: "Shipping WordPress and WooCommerce platforms with custom plugins, themes, and editor-friendly builds.",
    items: ["WordPress", "WooCommerce", "Elementor"],
  },
  {
    name: "SEO & Marketing",
    blurb: "On-page and technical SEO, Core Web Vitals, and keyword strategy that moves real rankings.",
    items: ["On-page SEO", "Technical SEO", "Google Search Console", "Semrush"],
  },
  {
    name: "AI & Automation",
    blurb: "Generative AI features, chatbots, and prompt workflows wired into production products.",
    items: ["Generative AI", "AI Chatbot Development", "Prompt Engineering", "LLM APIs"],
  },
  {
    name: "Tools",
    blurb: "The daily workflow: version control, API testing, design files, and a fast editor setup.",
    items: ["Git & GitHub", "VS Code", "Figma", "Postman"],
  },
];


export const education = [
  {
    period: "2021 — 2024",
    title: "Bachelor of Commerce in Computer Applications",
    org: "Tamil Nadu, India",
    body: "Built a foundation in commerce, web technologies, databases, and business programming principles.",
  },
  {
    period: "2024",
    title: "Full Stack Web Development",
    org: "Certification course",
    body: "Completed intensive hands-on training covering React.js, Node.js, Express.js, and MongoDB.",
  },
  {
    period: "2025",
    title: "AI & Generative AI Certification",
    org: "Online certification",
    body: "Advanced prompt engineering, LLM APIs, AI chatbot development, and automation workflows.",
  },
];

export const experience = [
  {
    period: "2025",
    title: "Full Stack Developer",
    org: "Shine Nexa Technology",
    body: "Building full stack web apps, WordPress platforms with custom plugins, and AI chatbot features — owning delivery from the database to the last pixel.",
  },
  {
    period: "2024",
    title: "Web Developer Intern",
    org: "Freelance & agency work",
    body: "Developed WordPress websites, PHP backends, and responsive front ends for local businesses and startups.",
  },
];

import sriChakraImg from "@/assets/sri-chakara.jpg";
import synapseImg from "@/assets/synapse.webp";
import edisonImg from "@/assets/edison.jpg";
import vasanthamImg from "@/assets/vasantham.jpg";
import iSolarImg from "@/assets/i solar.jpg";
import manaNarayananImg from "@/assets/mana narayanan.jpg";
import karthikayanImg from "@/assets/karthikayan.jpg";
import novaImg from "@/assets/nova.jpg";
import ahssphImg from "@/assets/ahssph.jpg";
import smotImg from "@/assets/smot.jpg";
import avivImg from "@/assets/aviv.jpg";
import bemaxImg from "@/assets/bemax.jpg";
import shineeduxImg from "@/assets/shineedux.webp";
import zynsysImg from "@/assets/zynsys .jpg";
import saiImg from "@/assets/sai.jpg";
import sbajImg from "@/assets/sbaj.jpg";
import nriqImg from "@/assets/nriq.webp";
import shinenexaImg from "@/assets/shinenexa.webp";
import slgImg from "@/assets/slg.webp";
import zyloxImg from "@/assets/zylox.webp";

export type Project = {
  n: string;
  title: string;
  category: string;
  body: string;
  tags: string[];
  image?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    n: "01",
    title: "NRIQ Global Services",
    category: "WordPress",
    body: "Premier NRI advisory platform for real estate management, investment portfolios, legal documentation, and banking assistance in India.",
    tags: ["WordPress", "PHP", "Elementor", "SEO"],
    image: nriqImg,
    link: "https://www.nriqservices.com/",
  },
  {
    n: "02",
    title: "Shine Nexa Technology",
    category: "WordPress",
    body: "Premier digital engineering and IT consultancy agency delivering cutting-edge software, AI chatbots, and custom web applications.",
    tags: ["WordPress", "PHP", "Elementor", "SEO"],
    image: shinenexaImg,
    link: "https://shinenexa.com/",
  },
  {
    n: "03",
    title: "Zensys Tech Solutions",
    category: "WordPress",
    body: "Enterprise software architecture and cloud solutions site offering scalable microservices, API integrations, and digital transformation.",
    tags: ["WordPress", "PHP", "CMS", "SEO"],
    image: zynsysImg,
    link: "https://www.zensys.in/",
  },
  {
    n: "04",
    title: "SLG Gold & Bullion",
    category: "HTML / CSS / JS",
    body: "High-end jewelry and bullion trading platform featuring live daily gold & silver rates, product showcases, and customer inquiry workflows.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    image: slgImg,
    link: "https://slggold.com/",
  },
  {
    n: "05",
    title: "Sri Chakra Hospital",
    category: "HTML / CSS / JS",
    body: "Multi-speciality hospital portal featuring comprehensive department directories, doctor profiles, online appointment booking, and emergency healthcare services.",
    tags: ["HTML5", "CSS3", "JavaScript", "Healthcare UI"],
    image: sriChakraImg,
    link: "https://srichakrahospital.in/",
  },
  {
    n: "06",
    title: "Zylox Electronics & Appliances",
    category: "HTML / CSS / JS",
    body: "Modern consumer electronics and smart home appliances catalog store with dynamic product filtering, warranty support, and dealer locator.",
    tags: ["HTML5", "CSS3", "JavaScript", "E-Commerce UI"],
    image: zyloxImg,
    link: "https://zyloxelectronics.com/",
  },
  {
    n: "07",
    title: "Synapse Innovation",
    category: "WordPress",
    body: "Digital transformation and enterprise solutions platform delivering innovative software architecture, cloud systems, and automated workflows.",
    tags: ["WordPress", "PHP", "Elementor", "SEO"],
    image: synapseImg,
    link: "https://synapse.co.tz/",
  },
  {
    n: "08",
    title: "Shine Edux Digital Learning",
    category: "WordPress",
    body: "Interactive digital learning portal with structured certificate courses, online student registrations, and live mentor support.",
    tags: ["WordPress", "PHP", "EdTech", "SEO"],
    image: shineeduxImg,
    link: "https://shineedux.com/",
  },
  {
    n: "09",
    title: "iSolar Energy Solutions",
    category: "WordPress",
    body: "Clean green energy solutions platform featuring solar savings calculators, commercial installation galleries, and instant quotation pipelines.",
    tags: ["WordPress", "PHP", "Green Energy", "SEO"],
    image: iSolarImg,
    link: "https://isolarenergy.in/",
  },
  {
    n: "10",
    title: "AuthenticHire Solution & Services",
    category: "HTML / CSS / JS",
    body: "HR recruitment and staffing portal offering candidate onboarding, background verification management, and enterprise talent pipelines.",
    tags: ["HTML5", "CSS3", "JavaScript", "Staffing UI"],
    image: ahssphImg,
    link: "https://authhires.com/",
  },
  {
    n: "11",
    title: "Aviv MCPL Interiors & Infra",
    category: "HTML / CSS / JS",
    body: "Luxury modular interior design and commercial infrastructure portfolio with high-resolution visual project showcases.",
    tags: ["HTML5", "CSS3", "JavaScript", "Interior UI"],
    image: avivImg,
    link: "https://avivmcpl.com/",
  },
  {
    n: "12",
    title: "Bemaxx Academy",
    category: "WordPress",
    body: "Professional coaching and competitive exam training portal featuring online test booking, lecture schedules, and student portals.",
    tags: ["WordPress", "PHP", "Academy CMS", "SEO"],
    image: bemaxImg,
    link: "https://bemaxx.in/",
  },
  {
    n: "13",
    title: "Novatura Healthcare",
    category: "WordPress",
    body: "Pharmaceutical and healthcare solutions platform highlighting clinical products, global export compliance, and healthcare partner networks.",
    tags: ["WordPress", "PHP", "Healthcare", "SEO"],
    image: novaImg,
    link: "https://novaturahealthcare.com/",
  },
  {
    n: "14",
    title: "SBAJ Sangam Bone & Joint Hospital",
    category: "WordPress",
    body: "Orthopedic and multi-care hospital website optimized for top local healthcare search rankings, doctor consultations, and emergency care.",
    tags: ["WordPress", "PHP", "Healthcare SEO", "Schema"],
    image: sbajImg,
    link: "https://sangambonehospital.com/",
  },
  {
    n: "15",
    title: "SMOT Career Promotions",
    category: "HTML / CSS / JS",
    body: "Professional career advancement and skill development academy with program schedules, student reviews, and lead generation.",
    tags: ["HTML5", "CSS3", "JavaScript", "Career Portal"],
    image: smotImg,
    link: "https://smotcareerpromotions.com/",
  },
  {
    n: "16",
    title: "Mannai Narayanasamy Educational Trust",
    category: "HTML / CSS / JS",
    body: "Comprehensive academic and trust portal featuring faculty listings, online admission registration, and modern responsive layouts.",
    tags: ["HTML5", "CSS3", "JavaScript", "Educational Trust"],
    image: manaNarayananImg,
    link: "https://mannainarayanasamy.com/",
  },
  {
    n: "17",
    title: "Karthikeyan Groups",
    category: "HTML / CSS / JS",
    body: "Multi-disciplinary business enterprise website showcasing corporate services, infrastructure projects, and client testimonials.",
    tags: ["HTML5", "CSS3", "JavaScript", "Corporate UI"],
    image: karthikayanImg,
    link: "https://karthikeyangroups.in/",
  },
  {
    n: "18",
    title: "Sai Madhura Enterprises",
    category: "HTML / CSS / JS",
    body: "Industrial distribution and supply chain portal with order tracking, product specifications, and direct client support.",
    tags: ["HTML5", "CSS3", "JavaScript", "Supply Chain UI"],
    image: saiImg,
    link: "https://saimadhuraenterprises.com/",
  },
  {
    n: "19",
    title: "Vasantham Institution",
    category: "HTML / CSS / JS",
    body: "Educational institution website offering detailed course curriculums, student admission workflows, dynamic announcements, and fast response times.",
    tags: ["HTML5", "CSS3", "JavaScript", "Education UI"],
    image: vasanthamImg,
    link: "https://vasanthaminstitution.in/",
  },
  {
    n: "20",
    title: "Edison Web Solution",
    category: "React.js",
    body: "Next-gen web agency portal showcasing enterprise IT solutions, digital marketing strategies, and custom web application delivery.",
    tags: ["React.js", "JavaScript", "CSS3", "Web Solution"],
    image: edisonImg,
    link: "https://buvanwedsgirija.in/",
  },
];


