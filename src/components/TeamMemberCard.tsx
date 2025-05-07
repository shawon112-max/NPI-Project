import React from 'react';
import styled from 'styled-components';
import { Facebook, Linkedin, Github } from 'lucide-react';

interface TeamMemberCardProps {
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

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ 
  name, 
  imageUrl, 
  position, 
  companyName,
  idNumber,
  isHead,
  socialLinks 
}) => {
  return (
    <StyledWrapper $isHead={isHead}>
      <div className="card">
        <div className="image_container">
          <img src={imageUrl} alt={name} className="profile-image" />
        </div>
        <div className="title">
          <span>{name}</span>
        </div>
        <div className="company">
          <span>{companyName}</span>
        </div>
        <div className="position">
          <span>{position}</span>
        </div>
        <div className="id-number">
          <span>ID: {idNumber}</span>
        </div>
        <div className="social-links">
          {socialLinks.facebook && (
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={18} />
            </a>
          )}
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          )}
          {socialLinks.github && (
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ $isHead?: boolean }>`
  .card {
    --bg-card: #ffffff;
    --primary: #6d28d9;
    --primary-800: #4c1d95;
    --primary-shadow: #2e1065;
    --text: #000000;
    
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1.5rem;
    width: ${props => props.$isHead ? '20rem' : '16rem'};
    background-color: var(--bg-card);
    border-radius: 1rem;
    box-shadow: ${props => props.$isHead 
      ? '0 8px 16px -2px rgba(109, 40, 217, 0.1), 0 4px 8px -2px rgba(109, 40, 217, 0.06)'
      : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'};
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: ${props => props.$isHead
        ? '0 12px 20px -2px rgba(109, 40, 217, 0.15), 0 8px 12px -2px rgba(109, 40, 217, 0.1)'
        : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'};
    }
  }

  .image_container {
    overflow: hidden;
    position: relative;
    z-index: 5;
    width: 100%;
    height: ${props => props.$isHead ? '12rem' : '10rem'};
    background-color: var(--primary-800);
    border-radius: 50%;
    margin: 0 auto;
    width: ${props => props.$isHead ? '12rem' : '10rem'};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid var(--primary);
    box-shadow: 0 0 0 2px var(--primary-shadow);
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }

  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title {
    width: 100%;
    text-align: center;
    font-size: ${props => props.$isHead ? '1.5rem' : '1.25rem'};
    font-weight: 600;
    color: var(--text);
    margin-top: 0.5rem;
  }

  .company {
    width: 100%;
    text-align: center;
    font-size: 0.875rem;
    color: var(--primary);
    font-weight: 500;
  }

  .position {
    width: 100%;
    text-align: center;
    font-size: 0.875rem;
    color: var(--text);
    opacity: 0.8;
  }

  .id-number {
    width: 100%;
    text-align: center;
    font-size: 0.75rem;
    color: var(--text);
    opacity: 0.6;
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 0.5rem;
    
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.5rem;
      height: 2.5rem;
      background-color: var(--primary-800);
      color: #ffffff;
      border-radius: 50%;
      transition: all 0.2s ease;
      
      &:hover {
        background-color: var(--primary);
        transform: translateY(-2px);
      }
    }
  }
`;

export default TeamMemberCard;