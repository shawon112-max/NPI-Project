import React from 'react';
import styled from 'styled-components';
import ArticleCard from './ArticleCard';
import articles from '../data/articles';

const UpdatesSection: React.FC = () => {
  return (
    <Section>
      <HeaderContainer>
        <SectionTitle>Updates</SectionTitle>
        <Underline />
      </HeaderContainer>
      <ArticlesGrid>
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </ArticlesGrid>
    </Section>
  );
};

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 1rem;
  text-align: center;
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

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export default UpdatesSection;