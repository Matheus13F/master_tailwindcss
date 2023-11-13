/* eslint-disable prettier/prettier */
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
      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-4px)' },
          to: { opacity: '1', transform: 'translateY(0px)'  },
        },
        // slideUpAndFade: {
        //   from: { opacity: '1' },
        //   to: { opacity: '0' },
        // },
      },
      animation: {
        'slideDownAndFade': 'slideDownAndFade 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slideUpAndFade': 'slideUpAndFade 1s linear',
      },
    },
  },
  plugins: [],
}
export default config
