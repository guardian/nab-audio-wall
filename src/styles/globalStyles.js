import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'
import { BP } from './constants'

export const globalStyles = injectGlobal`
${normalize()}

/* FONTS */

@charset "UTF-8";

/* regular */
@font-face {
  font-family:'Guardian Agate Sans';
  src: url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-Regular.eot');
  src: url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-Regular.eot?#iefix') format('embedded-opentype'),
  url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-Regular.woff') format('woff'),
  url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-Regular.woff2') format('woff'),
  url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-Regular.ttf') format('truetype'),
  url('https://interactive.guim.co.uk/fonts/guss-webfonts/GuardianAgateSans1Web/GuardianAgateSans1Web-Regular.svg#GuardianAgateSans1Web-Regular') format('svg');
  font-weight: 400;
}

/* project icon-font */
@font-face {
  font-family: 'audiowallicons';
  src:
    url('${process.env
      .PUBLIC_URL}/fonts/audiowallicons/audiowallicons.ttf?lffyqq') format('truetype'),
    url('${process.env
      .PUBLIC_URL}/fonts/audiowallicons/audiowallicons.woff?lffyqq') format('woff'),
    url('${process.env
      .PUBLIC_URL}/fonts/audiowallicons/audiowallicons.svg?lffyqq#audiowallicons') format('svg');
  font-weight: normal;
  font-style: normal;
}

/* Guardian specific */
  .element-atom,
.interactive-atom {
  margin: 0 !important;
}

/* set REM */
html {
 font-size: 16px;
 background-color: #E8E8E8;
 @media (min-width: ${BP.mobile}px){
  font-size: 18px;
 }
 @media (min-width: ${BP.tablet}px) {
  font-size: 22px;
 }
}

/* immersive atoms */
html, figure, #root, body {
  height: 100% !important;
  margin: 0 !important;
}

body {
  position: relative;
  margin: 0;
}

/* font smoothing */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Georgia, serif;
}

* {
  box-sizing: border-box;
}

a:hover {
  text-decoration: none;
}
`
