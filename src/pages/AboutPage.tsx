import React from 'react';
import styled from 'styled-components';

const AboutPage: React.FC = () => {
  return (
    <PageWrapper>
      <PageHeader>
        <Heading>About Us</Heading>
        <Underline />
      </PageHeader>

      <IntroSection>
        <IntroContent>
          <MissionText>
            At TechCorp, we're passionate about creating innovative solutions that transform the way people interact with technology. Our mission is to build software that not only meets the highest standards of quality but also makes a meaningful impact on users' lives. With a team of dedicated professionals, we're committed to pushing the boundaries of what's possible.
          </MissionText>
        </IntroContent>
        <ImageContainer>
          <img 
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Team collaboration" 
          />
        </ImageContainer>
      </IntroSection>

      <StorySection>
        <SectionHeading>Our Story</SectionHeading>
        <Timeline>
          <TimelineItem>
            <Year>2020</Year>
            <Description>Founded with a vision to revolutionize software development</Description>
          </TimelineItem>
          <TimelineItem>
            <Year>2021</Year>
            <Description>Launched our first enterprise solution and expanded to 50+ team members</Description>
          </TimelineItem>
          <TimelineItem>
            <Year>2022</Year>
            <Description>Opened international offices and achieved ISO certification</Description>
          </TimelineItem>
          <TimelineItem>
            <Year>2023</Year>
            <Description>Recognized as industry leader with multiple innovation awards</Description>
          </TimelineItem>
        </Timeline>
      </StorySection>
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
  margin-bottom: 4rem;
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

const IntroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto 6rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 4rem;
  }
`;

const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MissionText = styled.p`
  font-size: 1.125rem;
  line-height: 1.75;
  color: #000000;
  margin: 0;
`;

const ImageContainer = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StorySection = styled.section`
  background-color: #f9fafb;
  padding: 4rem 2rem;
  margin: 0 -2rem;
  
  @media (max-width: 640px) {
    padding: 3rem 1rem;
    margin: 0 -1rem;
  }
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #000000;
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 640px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
`;

const Timeline = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1.5rem;
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const Year = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #6d28d9;
`;

const Description = styled.div`
  font-size: 1rem;
  color: #000000;
  line-height: 1.5;
`;

export default AboutPage;