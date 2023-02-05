import { NavegateRouter,  } from './routes'
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
    // This is router pages!!!
    <div className="App">
      <RouterProvider router={ NavegateRouter }/>
    </div>
  )
}

export default App
