export interface TeamMember {
  name: string;
  imageUrl: string;
  position: string;
  companyName: string;
  idNumber: string;
  isHead?: boolean;
  socialLinks: {
    facebook?: string;
    linkedin?: string;
    github?: string;
  };
}