import React from 'react';
import styled from 'styled-components';
import TeamMemberCard from './TeamMemberCard';
import { TeamMember } from '../types/teamMember';

interface TeamMembersGridProps {
  members: TeamMember[];
}

const TeamMembersGrid: React.FC<TeamMembersGridProps> = ({ members }) => {
  const headMembers = members.filter(member => member.isHead);
  const regularMembers = members.filter(member => !member.isHead);

  return (
    <>
      <HeadMembersGrid>
        {headMembers.map((member, index) => (
          <GridItem key={index} $isHead>
            <TeamMemberCard
              name={member.name}
              imageUrl={member.imageUrl}
              position={member.position}
              companyName={member.companyName}
              idNumber={member.idNumber}
              isHead={member.isHead}
              socialLinks={member.socialLinks}
            />
          </GridItem>
        ))}
      </HeadMembersGrid>

      <RegularMembersGrid>
        {regularMembers.map((member, index) => (
          <GridItem key={index}>
            <TeamMemberCard
              name={member.name}
              imageUrl={member.imageUrl}
              position={member.position}
              companyName={member.companyName}
              idNumber={member.idNumber}
              socialLinks={member.socialLinks}
            />
          </GridItem>
        ))}
      </RegularMembersGrid>
    </>
  );
};

const HeadMembersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto 4rem;
  padding: 0 1rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 1024px) {
    & > *:last-child {
      grid-column: 1 / -1;
      justify-self: center;
      max-width: 400px;
    }
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const RegularMembersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div<{ $isHead?: boolean }>`
  display: flex;
  justify-content: center;
  animation: fadeIn 0.5s ease-in-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default TeamMembersGrid;