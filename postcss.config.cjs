module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '36em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em',

        'mantine-green-color': '#0cd7d7',
        'mantine-purple-color': '#8c22b7',
        'mantine-purple-orange': '#ee710b',

      },
    },
  },
};
