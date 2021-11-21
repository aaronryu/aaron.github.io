/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import * as React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@mui/styles';
import { spacing, Theme } from '@mui/system';
import { createStyles } from '@mui/material/styles';
import { colors } from '@mui/material';
import styled from '@emotion/styled';

const ContainerDiv = styled('div')((({ theme: Theme }) => ({
  margin: 'auto',
  maxWidth: 500,
  fontFamily: 'sans-serif',
})))

const useStyles = makeStyles(( theme: Theme ) =>
  createStyles({
    userProfile: {
      color: theme.palette.primary,
      '&:hover': {
        color: colors.common.white,
        textDecoration: 'none',
      },
    },
  }),
)

// destructuring
export default function Layout({ pageTitle, children }) {
  return (
    <ContainerDiv css={[]} >
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </ContainerDiv>
  )
}
