import { Article } from '../types/article';

const articles: Article[] = [
  // Existing articles (1-6)
  {
    id: '1',
    title: 'The Future of Technology in 2025',
    excerpt: 'Exploring upcoming trends and innovations that will shape our digital landscape.',
    content: `The technological landscape of 2025 promises to be more exciting and transformative than ever before. As we stand at the intersection of artificial intelligence, quantum computing, and sustainable technology, we're witnessing unprecedented innovations that are reshaping our world.

    Artificial Intelligence continues to evolve at a remarkable pace, with new applications emerging in healthcare, finance, and environmental protection. Machine learning algorithms are becoming more sophisticated, enabling more accurate predictions and better decision-making processes across industries.

    Quantum computing is making significant strides, with major breakthroughs in quantum error correction and stability. These advancements are bringing us closer to practical quantum computers that could revolutionize drug discovery, climate modeling, and cryptography.

    Sustainable technology is taking center stage as the world focuses on combating climate change. New developments in renewable energy storage, carbon capture, and eco-friendly manufacturing are paving the way for a greener future.`,
    thumbnail: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Emma Johnson',
    date: 'March 15, 2025',
    slug: 'future-of-technology-2025'
  },
  // ... (existing articles 2-6)

  // New articles (7-16)
  {
    id: '7',
    title: 'The Impact of 5G Technology',
    excerpt: 'How 5G is revolutionizing connectivity and enabling new possibilities.',
    content: `The rollout of 5G technology is transforming how we connect and communicate. With unprecedented speeds and lower latency, 5G is enabling new applications in IoT, autonomous vehicles, and smart cities.`,
    thumbnail: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'James Wilson',
    date: 'March 1, 2025',
    slug: 'impact-of-5g-technology'
  },
  {
    id: '8',
    title: 'Blockchain in Healthcare',
    excerpt: 'Exploring the potential of blockchain technology in healthcare systems.',
    content: `Blockchain technology is revolutionizing healthcare data management, ensuring security and transparency in medical records while enabling better coordination between healthcare providers.`,
    thumbnail: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Sarah Miller',
    date: 'February 28, 2025',
    slug: 'blockchain-in-healthcare'
  },
  {
    id: '9',
    title: 'The Rise of Edge Computing',
    excerpt: 'Understanding the shift towards edge computing and its benefits.',
    content: `Edge computing is becoming increasingly important as IoT devices proliferate. By processing data closer to the source, edge computing reduces latency and bandwidth usage while improving privacy.`,
    thumbnail: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Michael Chen',
    date: 'February 25, 2025',
    slug: 'rise-of-edge-computing'
  },
  {
    id: '10',
    title: 'Green Technology Innovations',
    excerpt: 'Latest developments in sustainable technology and renewable energy.',
    content: `Green technology is advancing rapidly, with new innovations in solar power, wind energy, and energy storage. These developments are crucial for addressing climate change and creating a sustainable future.`,
    thumbnail: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Emily Davis',
    date: 'February 22, 2025',
    slug: 'green-technology-innovations'
  },
  {
    id: '11',
    title: 'The Future of Work',
    excerpt: 'How technology is reshaping the workplace and career opportunities.',
    content: `The workplace is evolving rapidly with remote work, AI automation, and digital collaboration tools becoming the norm. Understanding these changes is crucial for future career success.`,
    thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Alex Thompson',
    date: 'February 20, 2025',
    slug: 'future-of-work'
  },
  {
    id: '12',
    title: 'Quantum Computing Breakthroughs',
    excerpt: 'Recent advances in quantum computing and their implications.',
    content: `Quantum computing is making significant progress, with new breakthroughs in quantum error correction and stability. These advances bring us closer to practical quantum computers.`,
    thumbnail: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Daniel Lee',
    date: 'February 18, 2025',
    slug: 'quantum-computing-breakthroughs'
  },
  {
    id: '13',
    title: 'AI in Education',
    excerpt: 'How artificial intelligence is transforming learning and teaching.',
    content: `AI is revolutionizing education through personalized learning experiences, automated grading, and intelligent tutoring systems. These technologies are making education more accessible and effective.`,
    thumbnail: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Isabella Martinez',
    date: 'February 15, 2025',
    slug: 'ai-in-education'
  },
  {
    id: '14',
    title: 'Cybersecurity Trends',
    excerpt: 'Latest developments in cybersecurity and threat protection.',
    content: `As cyber threats evolve, new security technologies and practices are emerging. Understanding these trends is crucial for protecting digital assets and maintaining privacy.`,
    thumbnail: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'William Turner',
    date: 'February 12, 2025',
    slug: 'cybersecurity-trends'
  },
  {
    id: '15',
    title: 'The Metaverse Revolution',
    excerpt: 'Understanding the potential of the metaverse and virtual reality.',
    content: `The metaverse is emerging as a new frontier for digital interaction, commerce, and entertainment. This technology could fundamentally change how we work, play, and connect.`,
    thumbnail: 'https://images.pexels.com/photos/7887800/pexels-photo-7887800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Sophie Anderson',
    date: 'February 10, 2025',
    slug: 'metaverse-revolution'
  },
  {
    id: '16',
    title: 'IoT and Smart Cities',
    excerpt: 'How IoT is enabling the development of smart cities.',
    content: `Smart cities are becoming a reality through IoT technology, enabling better resource management, improved public services, and enhanced quality of life for citizens.`,
    thumbnail: 'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Lucas Garcia',
    date: 'February 8, 2025',
    slug: 'iot-and-smart-cities'
  }
];

export default articles;