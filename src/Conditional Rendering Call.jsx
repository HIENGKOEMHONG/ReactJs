import { createRoot } from 'react-dom/client'
import './khmer.css'
import ColorForTheDay from './Conditional Rendering'
createRoot(document.getElementById('color-container 1')).render(<Color For The Day day='Sunday' />)
createRoot(document.getElementById('color-container2')).render(<Color For The Day day='Monday' />)
createRoot(document.getElementById('color-container3')).render(<Color ForTheDay day='Tuesday' />)
createRoot(document.getElementById('color-container4')).render(<Color ForTheDay day='Wednesday' />)
createRoot(document.getElementById('color-container 5')).render(<Color For The Day day='Thursday' />)
createRoot(document.getElementById('color-container 6')).render(<Color For The Day day='Friday' />)
createRoot(document.getElementById('color-container 7')).render(<Color For The Day day='Saturday' />)