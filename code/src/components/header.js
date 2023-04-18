import React from 'react';
import styled from 'styled-components'

const Title = styled.div`
font-size: 32px;
font-weight: bold;
color: #333;
text-align: center;
margin: 40px;
`;

export const Header = () => {
  return (
    <div className="header">
      <Title> My to do list </Title>
    </div>
  );
}