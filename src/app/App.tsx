
import '../App.css'
import { routes } from '@/app/routes/routes';
import { renderRoutes } from '@/app/routes/generateroutes';

const AppRoutes = renderRoutes(routes);

function App() {
  return (

    <AppRoutes isAuthorized={true} />

  )
}

export default App
