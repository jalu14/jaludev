module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
      enabled: true,
      content: [
          'src/**/*.css',
          'src/**/*.tsx',
      ]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
