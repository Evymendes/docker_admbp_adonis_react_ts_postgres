import { NavegateFrontendRouter, NavegateBackendRouter } from './routes'
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
    // This is router pages!!!
    <div className="App">
      <RouterProvider router={ NavegateFrontendRouter }/>
      <RouterProvider router={ NavegateBackendRouter }/>
    </div>
  )
}

export default App
