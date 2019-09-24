import React from "react"
import { Link } from "gatsby"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Moon from '../components/moon'
import Sun from '../components/sun'

import Toggle from 'react-toggle'

import { rhythm, scale } from "../utils/typography"
import "../styles/global.css"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          backgroundColor: 'var(--bg)',
          color: 'var(--textNormal)',
          transition: 'color 1s ease-out'
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          Jake Reed © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
        <div>
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <label>
                <Toggle
                  icons={{
                    checked: <Moon/>,
                    unchecked: <Sun/>
                  }}
                  onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                  checked={theme === 'dark'}
                />
                <span style={{position: 'absolute', paddingLeft: 10}}> Enable Dark Mode </span>
              </label>
            )}
          </ThemeToggler>
        </div>
      </div>
    )
  }
}

export default Layout
