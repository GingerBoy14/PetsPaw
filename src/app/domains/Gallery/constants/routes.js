import { GalleryAll } from '../routes'
import ROUTE_PATHS from 'app/constants/routePaths'

export default [
  {
    name: 'GalleryAll',
    path: ROUTE_PATHS.GALLERY_ALL,
    exact: true,
    component: GalleryAll
  }
]
