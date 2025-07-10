
import '../App.css'
import { routes } from '@/app/routes/routes';
import { renderRoutes } from '@/app/routes/generateroutes';
import { AppProvider } from './provider';
const AppRoutes = renderRoutes(routes);

function App() {
  return (
    <AppProvider>
      <AppRoutes isAuthorized={true} />
    </AppProvider>


  )
}

export default App
