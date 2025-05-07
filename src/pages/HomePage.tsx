import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UpdatesSection from '../components/UpdatesSection';

const HomePage: React.FC = () => {
  return (
    <PageWrapper>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Welcome to NGPI</HeroTitle>
          <HeroSubtitle>
            Empowering innovation through collaborative excellence and cutting-edge solutions.
          </HeroSubtitle>
          <GetStartedButton to="/about">Get Started</GetStartedButton>
        </HeroContent>
        <LogoContainer>
          <img
            src="https://i.ibb.co/VxKN3Rj/ngpi-logo.png"
            alt="NGPI Logo"
          />
        </LogoContainer>
      </HeroSection>
      <UpdatesSection />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
`;

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 4rem 1rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #000000;
  line-height: 1.2;
  letter-spacing: -0.025em;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #000000;
  opacity: 0.8;
  line-height: 1.6;
`;

const GetStartedButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background-color: #6d28d9;
  color: #ffffff;
  font-weight: 500;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  width: fit-content;
  
  &:hover {
    background-color: #4c1d95;
    transform: translateY(-2px);
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  
  img {
    width: 400px;
    height: 400px;
    object-fit: contain;
    border-radius: 50%;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
  
  @media (max-width: 1024px) {
    img {
      width: 300px;
      height: 300px;
    }
  }
  
  @media (max-width: 768px) {
    img {
      width: 250px;
      height: 250px;
    }
  }
`;

export default HomePage;