import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterText>© 2025 NGPI. All rights reserved.</FooterText>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: #ffffff;
  padding: 2rem;
  text-align: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const FooterText = styled.p`
  color: #000000;
  font-size: 0.875rem;
`;

export default Footer;