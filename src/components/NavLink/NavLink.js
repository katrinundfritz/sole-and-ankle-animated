/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { WEIGHTS } from '../../constants';


const NavLink = ({ children, ...delegated }) => {
  return <Wrapper {...delegated}>
    <LinkText>{children}</LinkText>
    <Line />
  </Wrapper>
}

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  position: relative;
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Line = styled.div`
  border-top: 1px solid;
  border-color: inherit;
  width:100%;
  transform: translateY(4px);
  transition: transform 500ms;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover & {
      transform: translateY(0);
      transition: transform 300ms;
    }
  }
`

const LinkText = styled.span`
  display: block;
  transform: translateY(0);
  transition: transform 500ms;

  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover & {
      transform: translateY(-4px);
      transition: transform 300ms;
    }
  }
`
export default NavLink;
