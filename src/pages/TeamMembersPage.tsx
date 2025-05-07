import React from 'react';
import styled from 'styled-components';
import TeamMembersGrid from '../components/TeamMembersGrid';
import teamMembers from '../data/teamMembers';

const TeamMembersPage: React.FC = () => {
  return (
    <PageWrapper>
      <PageHeader>
        <Heading>Team Members</Heading>
        <Underline />
      </PageHeader>
      <TeamMembersGrid members={teamMembers} />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  padding: 4rem 2rem;
  
  @media (max-width: 640px) {
    padding: 2rem 1rem;
  }
`;

const PageHeader = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  
  @media (max-width: 640px) {
    margin-bottom: 2rem;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
  
  @media (max-width: 640px) {
    font-size: 2.25rem;
  }
  
  animation: fadeInDown 0.8s ease-out;
  
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Underline = styled.div`
  height: 4px;
  width: 120px;
  background: linear-gradient(90deg, #6d28d9 0%, #a78bfa 100%);
  margin: 0 auto;
  border-radius: 2px;
  
  animation: expandWidth 1s ease-out forwards;
  
  @keyframes expandWidth {
    from {
      width: 0;
    }
    to {
      width: 120px;
    }
  }
`;

export default TeamMembersPage;