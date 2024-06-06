// lint-staged.config.js
module.exports = {
  '*.{js,jsx,ts,tsx}': ['pnpm run eslint', 'pnpm run prettier', 'git add .'],
  '*.{scss,less,css,stylus,styl}': ['pnpm run stylelint', 'git add .']
}
