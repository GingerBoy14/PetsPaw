import { VotingAll } from '../routes'
import ROUTE_PATHS from 'app/constants/routePaths'

export default [
  {
    name: 'VotingAll',
    path: ROUTE_PATHS.VOTING_ALL,
    exact: true,
    component: VotingAll
  }
]
