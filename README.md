# react-sass
Created with CodeSandbox

DRY and modular css with sass
- component level class names
- nested rules
- for main component add class name to specific elements instead
- else the style will permeate all nested components
- 1 component => 1 scss (css) file
- watch and compile scss into css
- import modular css into each component
- import global scss style into each scss file with @use for global styling
  
`npm init, npx create-react-app <name>`    
`npm i -g sass`    
`package.json: "scripts":{"scss": "sass --watch src/scss:src/css"}`    
`npm run start, npm run scss`  

