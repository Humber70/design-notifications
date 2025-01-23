/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    extend:{
      boxShadow: {
        custom: '0px 0px 5rem var(--main-shadow)',
      }
    }
  }
}