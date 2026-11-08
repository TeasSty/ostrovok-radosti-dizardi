import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import './styles/sections.css'
import './styles/motion.css'
import { renderApp } from './app.js'
import { initIslandMap } from './map.js'
import { initMotion } from './motion.js'

renderApp(document.querySelector('#app'))
initIslandMap()
initMotion()
