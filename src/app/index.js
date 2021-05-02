import { Switch, Redirect, Route } from 'react-router-dom'
import routes from 'domains/allRoutes'
import { ROUTE_PATHS } from 'app/constants'

function App() {
  return (
    <Switch>
      {routes.map((route) => (
        <Route {...route} />
      ))}
      <Redirect to={ROUTE_PATHS.LANDING} />
    </Switch>
  )
}

export default App
