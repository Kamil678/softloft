import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        header: 'var(--color-header)',
        footer: 'var(--color-footer)',
        'footer-text': 'var(--color-footer-text)',
        accent: 'var(--color-accent)',
        'accent-text': 'var(--color-accent-text)'
      }
    }
  }
}
