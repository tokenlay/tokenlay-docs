import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Tokenlay</span>,
  project: {
    link: 'https://github.com/tokenlay/tokenlay',
  },
  docsRepositoryBase: 'https://github.com/tokenlay/tokenlay-docs/tree/main',
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} © <a href="https://github.com/tokenlay/tokenlay" target="_blank" rel="noopener noreferrer">Tokenlay</a>
      </span>
    ),
  },
  navigation: true,
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    float: true,
    backToTop: true,
  },
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
  search: {
    placeholder: 'Search documentation...'
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Tokenlay'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Tokenlay Documentation" />
      <meta property="og:description" content="Documentation for Tokenlay" />
    </>
  ),
  nextThemes: {
    defaultTheme: 'system',
  }
}

export default config