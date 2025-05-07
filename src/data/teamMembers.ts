import { TeamMember } from '../types/teamMember';

const teamMembers: TeamMember[] = [
  {
    name: "Emma Johnson",
    position: "Chief Executive Officer",
    companyName: "Naogaon Polytechnic Institute",
    idNumber: "NPI-001",
    imageUrl: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=800",
    isHead: true,
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    name: "Michael Chen",
    position: "Chief Technology Officer",
    companyName: "Naogaon Polytechnic Institute",
    idNumber: "NPI-002",
    imageUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
    isHead: true,
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    name: "Sophia Williams",
    position: "Head of Design",
    companyName: "Naogaon Polytechnic Institute",
    idNumber: "NPI-003",
    imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
    isHead: true,
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    name: "David Rodriguez",
    position: "Senior Developer",
    companyName: "Naogaon Polytechnic Institute",
    idNumber: "NPI-004",
    imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
    socialLinks: {
      facebook: "https://facebook.com",
      github: "https://github.com"
    }
  },
  {
    name: "Olivia Taylor",
    position: "UI Designer",
    companyName: "Naogaon Polytechnic Institute",
    idNumber: "NPI-005",
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    name: "James Wilson",
    position: "Data Analyst",
    companyName: "Naogaon Polytechnic Institute",
    idNumber: "NPI-006",
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    }
  },
  // Additional team members (7-23)
  {
    name: "Sarah Miller",
    position: "Frontend Developer",
    companyName: "Naogaon Polytechnic Institute",
    idNumber: "NPI-007",
    imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Alex Thompson",
    position: "Backend Developer",
    companyName: "Naogaon Polytechnic Institute",
    idNumber: "NPI-008",
    imageUrl: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800",
    socialLinks: {
      github: "https://github.com"
    }
  },
  {
    name: "Emily Davis",
    position: "UX Researcher",
    companyName: "Naogaon Polytechnic Institute",
    idNumber: "NPI-009",
    imageUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800",
    socialLinks: {
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Daniel Lee",
    position: "DevOps Engineer",
    companyName: "Naogaon Polytechnic Institute",
    idNumber: "NPI-010",
    imageUrl: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Isabella Martinez",
    position: "Product Designer",
    companyName: "Naogaon Polytechnic Institute",
    idNumber: "NPI-011",
    imageUrl: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=800",
    socialLinks: {
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "William Turner",
    position: "System Analyst",
    companyName: "Naogaon Polytechnic Institute",
    idNumber: "NPI-012",
    imageUrl: "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
    socialLinks: {
      github: "https://github.com"
    }
  },
  {
    name: "Sophie Anderson",
    position: "Quality Assurance",
    companyName: "Naogaon Polytechnic Institute",
    idNumber: "NPI-013",
    imageUrl: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=800",
    socialLinks: {
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Lucas Garcia",
    position: "Mobile Developer",
    companyName: "Naogaon Polytechnic Institute",
    idNumber: "NPI-014",
    imageUrl: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    socialLinks: {
      github: "https://github.com"
    }
  },
  {
    name: "Ava White",
    position: "Content Strategist",
    companyName: "Naogaon Polytechnic Institute",
    idNumber: "NPI-015",
    imageUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800",
    socialLinks: {
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Ethan Brown",
    position: "Security Engineer",
    companyName: "Naogaon Polytechnic Institute",
    idNumber: "NPI-016",
    imageUrl: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    socialLinks: {
      github: "https://github.com"
    }
  },
  {
    name: "Mia Johnson",
    position: "Data Scientist",
    companyName: "Naogaon Polytechnic Institute",
    idNumber: "NPI-017",
    imageUrl: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=800",
    socialLinks: {
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Noah Wilson",
    position: "Cloud Architect",
    companyName: "Naogaon Polytechnic Institute",
    idNumber: "NPI-018",
    imageUrl: "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
    socialLinks: {
      github: "https://github.com"
    }
  },
  {
    name: "Emma Davis",
    position: "UI Developer",
    companyName: "Naogaon Polytechnic Institute",
    idNumber: "NPI-019",
    imageUrl: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=800",
    socialLinks: {
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Oliver Martinez",
    position: "Backend Engineer",
    companyName: "Naogaon Polytechnic Institute",
    idNumber: "NPI-020",
    imageUrl: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800",
    socialLinks: {
      github: "https://github.com"
    }
  },
  {
    name: "Charlotte Thompson",
    position: "Product Manager",
    companyName: "Naogaon Polytechnic Institute",
    idNumber: "NPI-021",
    imageUrl: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=800",
    socialLinks: {
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Liam Anderson",
    position: "DevOps Specialist",
    companyName: "Naogaon Polytechnic Institute",
    idNumber: "NPI-022",
    imageUrl: "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
    socialLinks: {
      github: "https://github.com"
    }
  },
  {
    name: "Sophia Garcia",
    position: "UX Designer",
    companyName: "Naogaon Polytechnic Institute",
    idNumber: "NPI-023",
    imageUrl: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=800",
    socialLinks: {
      linkedin: "https://linkedin.com"
    }
  }
];

export default teamMembers;