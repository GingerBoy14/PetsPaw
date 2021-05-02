import { Landing } from '../routes'
import ROUTE_PATHS from 'app/constants/routePaths'

export default [
  {
    name: 'Landing',
    path: ROUTE_PATHS.LANDING,
    exact: true,
    component: Landing
  }
]
