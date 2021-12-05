/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { WEIGHTS } from '../../constants';


const NavLink = ({ children, ...delegated }) => {
  return <Wrapper {...delegated}>
    <InitialNavLinkText>{children}</InitialNavLinkText>
    <HighlightedNavLinkText>{children}</HighlightedNavLinkText>
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

const LinkText = styled.span`
  display: block;
  backface-visibility: hidden;
  transform: translateY(var(--translate-from));
  transition: transform 500ms;

  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover & {
      transform: translateY(var(--translate-to));
      transition: transform 250ms;
    }
  }
`

const InitialNavLinkText = styled(LinkText)`
  --translate-from: 0%;
  --translate-to: -100%;
`

const HighlightedNavLinkText = styled(LinkText)`
  --translate-from: 100%;
  --translate-to: 0%;
  position: absolute;
  font-weight: bold;
  top: 0;
  left: 0;
`
export default NavLink;
