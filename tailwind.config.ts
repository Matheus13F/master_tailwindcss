import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'min-content 1fr min-content',
        form: 'minmax(7.5rem, 17.5rem) minmax(20rem, 1fr) minmax(0, 15rem)', // minmax - no minimo 7rem e no maximo 17rem. quando ha 0, vai ocupar o espaco todo, 1fr e flexiviel dentro do seu espaco
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderWidth: {
        6: '6px',
      },
    },
  },
  plugins: [],
}
export default config
