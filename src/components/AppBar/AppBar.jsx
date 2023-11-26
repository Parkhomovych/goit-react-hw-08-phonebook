import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-bottom: 16px;
  background: linear-gradient(blue, yellow);
`;

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      <Navigation />
      <h1>Phone book</h1>
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </Header>
  );
};
