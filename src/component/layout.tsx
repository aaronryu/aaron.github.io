
import { css, jsx } from '@emotion/react'
import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { createStyles, makeStyles } from '@mui/styles'
import { spacing, Theme } from '@mui/system'
import { colors } from '@mui/material'
import styled from '@emotion/styled'
import clsx from 'clsx'

const ContainerDiv = styled('div')((({ theme: Theme }) => ({
  margin: 'auto',
  maxWidth: 500,
  fontFamily: 'sans-serif',
})))

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    siteTitle: {
      fontSize: '3rem',
      color: 'gray',
      fontWeight: 700,
      margin: '3rem 0'
    },
    heading: {
      color: 'rebeccapurple'
    },
    navLinks: {
      display: 'flex',
      listStyle: 'none',
      paddingLeft: 0,
    },
    navLinkItem: {
      paddingRight: '2rem'
    },
    navLinkText: {
      color: 'black'
    },
  }),
)

// destructuring
export default function Layout({ pageTitle, children }) {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <ContainerDiv>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={classes.siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={clsx(classes.navLinks)}>
          <li className={classes.navLinkItem}>
            <Link to="/" className={classes.navLinkText}>
              Home
            </Link>
          </li>
          <li className={classes.navLinkItem}>
            <Link to="/about" className={classes.navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={classes.heading}>{pageTitle}</h1>
        {children}
      </main>
    </ContainerDiv>
  )
}
