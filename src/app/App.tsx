
import '../App.css'
import { routes } from './routes/routes'
import { renderRoutes } from './routes/generateroutes';

const AppRoutes = renderRoutes(routes);

function App() {

  return (
    <>
      <AppRoutes isAuthorized={true} />
    </>
  )
}

export default App
