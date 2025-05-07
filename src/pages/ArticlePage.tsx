import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import articles from '../data/articles';
import { ArrowLeft } from 'lucide-react';

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <PageWrapper>
        <Container>
          <BackLink to="/">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </BackLink>
          <ErrorMessage>Article not found</ErrorMessage>
        </Container>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Container>
        <BackLink to="/">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </BackLink>
        
        <ArticleHeader>
          <Title>{article.title}</Title>
          <Meta>
            <Author>{article.author}</Author>
            <Date>{article.date}</Date>
          </Meta>
        </ArticleHeader>

        <ImageContainer>
          <img src={article.thumbnail} alt={article.title} />
        </ImageContainer>

        <Content>
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Content>
      </Container>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  padding: 8rem 2rem 4rem;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #6d28d9;
  text-decoration: none;
  margin-bottom: 2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #4c1d95;
  }
`;

const ArticleHeader = styled.header`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

const Meta = styled.div`
  display: flex;
  gap: 1rem;
  color: #666666;
  font-size: 0.875rem;
`;

const Author = styled.span``;

const Date = styled.span`
  &::before {
    content: "•";
    margin-right: 1rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 640px) {
    height: 300px;
  }
`;

const Content = styled.div`
  color: #000000;
  line-height: 1.8;
  font-size: 1.125rem;

  p {
    margin-bottom: 1.5rem;
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #666666;
  margin-top: 2rem;
`;

export default ArticlePage;