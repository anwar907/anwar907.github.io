import jsyaml from 'js-yaml';


const yamlFiles = `
- alt: Dart
  src: "https://img.shields.io/badge/Dart-25BEFA?logo=dart&logoColor=white"
- alt: Flutter
  src: "https://img.shields.io/badge/Flutter-25BEFA?logo=flutter&logoColor=white"
- alt: Android
  src: "https://img.shields.io/badge/Android-36C89C?logo=android&logoColor=white"
- alt: iOS
  src: "https://img.shields.io/badge/Ios-FFFFFF?logo=apple&logoColor=black"
- alt: Lunar VIM
  src: "https://img.shields.io/badge/NeoVim-2357A143?logo=neovim&logoColor=white"
- alt: Kotlin
  src: "https://img.shields.io/badge/Kotlin-8365E8?logo=kotlin&logoColor=white"
- alt: HTML
  src: "https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=white"
- alt: CSS 
  src: "https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white"
- alt: Golang
  src: "https://img.shields.io/badge/Go-%2300ADD8?logo=go&logoColor=white"
- alt: Markdown
  src: "https://img.shields.io/badge/Markdown-000000?logo=Markdown&logoColor=white"
- alt: Docker
  src: "https://img.shields.io/badge/Docker-white?logo=docker&logoColor=25BEFA"
- alt: Insomnia
  src: "https://img.shields.io/badge/Insomnia-black?logo=insomnia&logoColor=5849BE"
- alt: Jira
  src: "https://img.shields.io/badge/Jira-white?logo=jira&logoColor=0078D4"
- alt: Java
  src: "https://img.shields.io/badge/Java-FC7565?logo=java&logoColor=white"
- alt: Postman
  src: "https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white"
- alt: Stack Overflow
  src: "https://img.shields.io/badge/-Stack%20Overflow-FE7A16?logo=stack-overflow&logoColor=white"
- alt: Visual Studio Code
  src: "https://img.shields.io/badge/Visual_Studio_Code-0078D4?logo=visual%20studio%20code&logoColor=white"
- alt: XCode
  src: "https://img.shields.io/badge/Xcode-0785DF?logo=xcode&logoColor=white"
- alt: Notion
  src: "https://img.shields.io/badge/Notion-010101?logo=notion&logoColor=white"
- alt: Firebase
  src: "https://img.shields.io/badge/Firebase-FFBD46?logo=firebase&logoColor=white"
- alt: Figma
  src: "https://img.shields.io/badge/Figma-121011?logo=figma&logoColor=white"
- alt: Android Studio
  src: "https://img.shields.io/badge/Android%20Studio-008678?logo=android-studio&logoColor=white"
- alt: Cypress
  src: "https://img.shields.io/badge/-cypress-%23E5E5E5?logo=cypress&logoColor=058a5e"
- alt: Git
  src: "https://img.shields.io/badge/Git-F05033?logo=git&logoColor=white"
- alt: GitHub
  src: "https://img.shields.io/badge/GitHub-333333?logo=github&logoColor=white"
- alt: GitLab
  src: "https://img.shields.io/badge/GitLab-EE4700?logo=gitlab&logoColor=white"                                                                                                                                                                                                                                                                                                                       `


export default jsyaml.load(yamlFiles)