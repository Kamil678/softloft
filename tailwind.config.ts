import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        header: 'var(--color-header)',
        'header-text': 'var(--color-header-text)',
        footer: 'var(--color-footer)',
        'footer-text': 'var(--color-footer-text)',
        accent: 'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
        'accent-strong': 'var(--color-accent-strong)',
        'accent-text': 'var(--color-accent-text)',
        text: 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)'
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)']
      }
    }
  }
}
