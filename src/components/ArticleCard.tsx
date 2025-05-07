import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Article } from '../types/article';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <CardWrapper>
      <ImageContainer>
        <img src={article.thumbnail} alt={article.title} />
      </ImageContainer>
      <Content>
        <Title>{article.title}</Title>
        <Excerpt>{article.excerpt}</Excerpt>
        <Meta>
          <Author>{article.author}</Author>
          <Date>{article.date}</Date>
        </Meta>
        <ReadMore to={`/articles/${article.slug}`}>Read More</ReadMore>
      </Content>
    </CardWrapper>
  );
};

const CardWrapper = styled.article`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 0.75rem;
`;

const Excerpt = styled.p`
  font-size: 0.875rem;
  color: #000000;
  opacity: 0.8;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.75rem;
  color: #000000;
  opacity: 0.6;
`;

const Author = styled.span``;

const Date = styled.span``;

const ReadMore = styled(Link)`
  display: inline-block;
  color: #6d28d9;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #4c1d95;
  }
`;

export default ArticleCard;