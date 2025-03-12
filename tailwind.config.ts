import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-condensed': ['var(--font-roboto-condensed)'],
      },
      fontSize: {
        '32': '32px',
      },
      lineHeight: {
        'none': '100%',
      },
    },
  },
  plugins: [],
};

export default config;
