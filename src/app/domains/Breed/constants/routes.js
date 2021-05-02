import { BreedAll, BreedShow } from '../routes'
import ROUTE_PATHS from 'app/constants/routePaths'

export default [
  {
    name: 'BreedAll',
    path: ROUTE_PATHS.BREEDS_ALL,
    exact: true,
    component: BreedAll
  },
  {
    name: 'BreedShow',
    path: ROUTE_PATHS.BREEDS_SHOW,
    exact: true,
    component: BreedShow
  }
]
