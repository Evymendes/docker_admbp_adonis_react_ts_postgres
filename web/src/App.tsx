import { useState } from 'react'

import { NavegateFrontendRouter, NavegateBackendRouter } from './routes'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { NotFound } from './fragments'

function App() {
  const [count, setCount] = useState(0)

  return (
    // This is router pages!!!
    <div className="App">
      <RouterProvider router={ NavegateFrontendRouter } />
    </div>
  )
}

export default App
