import { createRoot } from 'react-dom/client'

import Click from './Click.jsx'
import ClickParameter from './ClickParameter.jsx'
import Change from './Change.jsx'





createRoot(document.getElementById('click')).render(<Click />)
createRoot(document.getElementById('click-parameter')).render(<ClickParameter />)
createRoot(document.getElementById('change')).render(<Change />)