module.exports = {
  plugins: [
    'tailwindcss',
    process.env.NODE_ENV === 'production'
      ? [
          '@fullhuman/postcss-purgecss',
          {
            content: [
              './src/pages/**/*.{js,jsx,ts,tsx}',
              './src/components/**/*.{js,jsx,ts,tsx}',
              './src/styles/**/*.css',
            ],
            options: {
              whitelist: [],
              whitelistPattern: [/fa/g]
            },
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        ]
      : undefined,
    'postcss-preset-env',
  ],
}
