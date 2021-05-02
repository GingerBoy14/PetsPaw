import { default as AppRoutes } from './App/constants/routes'
import { default as BreedRoutes } from './Breed/constants/routes'
import { default as GalleryRoutes } from './Gallery/constants/routes'
import { default as VotingRoutes } from './Voting/constants/routes'

export default [...AppRoutes, ...BreedRoutes, ...GalleryRoutes, ...VotingRoutes]
