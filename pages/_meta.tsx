const meta = {
  index: 'Home',
  introduction: 'Introduction',
  'quick-start': 'Quick Start',
  guides: 'Guides',
  'api-reference': 'API Reference',
  website: {
    title: 'Landing',
    type: 'page' as const,
    href: 'https://tokenlay.com',
    newWindow: false
  },
  dashboard: {
    title: 'Dashboard ↗',
    type: 'page' as const,
    href: 'https://dashboard.tokenlay.com',
    newWindow: true
  }
}

export default meta