import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-nav');
      const button = document.getElementById('menu-button');
      if (isOpen && nav && !nav.contains(event.target as Node) && button && !button.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <NavWrapper>
      <NavContainer>
        <Logo to="/">NGPI</Logo>
        
        {/* Desktop Navigation */}
        <DesktopNav>
          <NavLink to="/" $isActive={location.pathname === "/"}>Home</NavLink>
          <NavLink to="/about" $isActive={location.pathname === "/about"}>About</NavLink>
          <NavLink to="/team-members" $isActive={location.pathname === "/team-members"}>Team Members</NavLink>
          <NavLink to="/contact-us" $isActive={location.pathname === "/contact-us"}>Contact Us</NavLink>
        </DesktopNav>

        {/* Mobile Menu Button */}
        <MenuButton 
          id="menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </MenuButton>

        {/* Mobile Navigation */}
        <MobileNav id="mobile-nav" $isOpen={isOpen}>
          <MobileNavLink to="/" $isActive={location.pathname === "/"}>Home</MobileNavLink>
          <MobileNavLink to="/about" $isActive={location.pathname === "/about"}>About</MobileNavLink>
          <MobileNavLink to="/team-members" $isActive={location.pathname === "/team-members"}>Team Members</MobileNavLink>
          <MobileNavLink to="/contact-us" $isActive={location.pathname === "/contact-us"}>Contact Us</MobileNavLink>
        </MobileNav>
      </NavContainer>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  background-color: #ffffff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #000000;
  text-decoration: none;
  letter-spacing: -0.025em;
`;

const DesktopNav = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  color: #000000;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  opacity: ${props => props.$isActive ? 1 : 0.7};
  
  &::after {
    content: '';
    position: absolute;
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #6d28d9;
    transition: width 0.3s ease;
  }
  
  &:hover {
    opacity: 1;
    &::after {
      width: 100%;
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #000000;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #6d28d9;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNav = styled.div<{ $isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #ffffff;
    padding: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 0.5rem 0.5rem;
    opacity: ${props => props.$isOpen ? 1 : 0};
    transform: translateY(${props => props.$isOpen ? '0' : '-1rem'});
    pointer-events: ${props => props.$isOpen ? 'auto' : 'none'};
    transition: all 0.3s ease;
  }
`;

const MobileNavLink = styled(NavLink)`
  padding: 0.75rem 1rem;
  width: 100%;
  text-align: left;
  
  &:hover {
    background-color: rgba(109, 40, 217, 0.05);
  }
`;

export default Navbar;