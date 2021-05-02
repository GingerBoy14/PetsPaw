import { Landing, Favourites, Liked, Disliked } from '../routes'
import ROUTE_PATHS from 'app/constants/routePaths'

export default [
  {
    name: 'Landing',
    path: ROUTE_PATHS.LANDING,
    exact: true,
    component: Landing
  },
  {
    name: 'Liked',
    path: ROUTE_PATHS.LIKED_ALL,
    exact: true,
    component: Liked
  },
  {
    name: 'Disliked',
    path: ROUTE_PATHS.DISLIKED_ALL,
    exact: true,
    component: Disliked
  },
  {
    name: 'Favourites',
    path: ROUTE_PATHS.FAVOURITES_ALL,
    exact: true,
    component: Favourites
  }
]
