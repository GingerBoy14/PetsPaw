import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withRouter, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Text, Img } from 'antd-styled'
import { Row, Col, Box } from '@qonsoll/react-design'
import { ROUTE_PATHS } from 'app/constants'
import vote from '~/assets/vote-table.png'
import pet from '~/assets/pet-breeds.png'
import search from '~/assets/images-search.png'
import theme from '~/styles/theme'

const NAV_CARD_MAP = [
  {
    route: ROUTE_PATHS.VOTING_ALL,
    color: theme.color.info.default,
    borderColor: theme.color.info.t.lighten3,
    text: 'voting',
    image: vote
  },
  {
    route: ROUTE_PATHS.BREEDS_ALL,
    color: theme.color.success.default,
    borderColor: theme.color.success.t.lighten3,
    text: 'breeds',
    image: pet
  },
  {
    route: ROUTE_PATHS.GALLERY_ALL,
    color: theme.color.warning.default,
    borderColor: theme.color.warning.t.lighten3,
    text: 'gallery',
    image: search
  }
]

const Navigation = (props) => {
  // [INTERFACES]
  const { history } = props

  // [COMPONENT_STATE_HOOKS]
  const [currentPage, setCurrentPage] = useState(NAV_CARD_MAP[0].route)

  // [USE_EFFECTS]
  useEffect(() => {
    setCurrentPage(history.location.pathname)
  }, [history.location.pathname])

  // [TEMPLATE]
  return (
    <Row noOuterGutters>
      {NAV_CARD_MAP.map((card) => (
        <Col style={{ alignItems: 'center' }}>
          <NavCard active={card.route === currentPage} {...card} />
        </Col>
      ))}
    </Row>
  )
}

const ImageCart = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${({ color }) => color};
  border: 4px solid ${({ borderColor }) => borderColor};
  border-radius: ${theme.borderRadius.lg};
  background-clip: padding-box;
  width: 140px;
  &:hover {
    border-color: ${theme.color.primary.t.lighten3};
    cursor: pointer;
  }
`
const TextCart = styled(Box)`
  display: flex;
  justify-content: center;
  background-color: ${({ active }) =>
    active ? theme.color.primary.default : theme.color.white.default};
  padding: 10px 0;
  border-radius: ${theme.borderRadius.sm};
  &:hover {
    cursor: pointer;
  }
`

const NavCard = (props) => {
  // [INTERFACES]
  const { active, route, text, image } = props

  // [ADDITIONAL_HOOKS]
  const history = useHistory()

  // [HELPER_FUNCTIONS]
  const goToPage = () => {
    history.push(route)
  }
  return (
    <Box height="100%" display="flex" flexDirection="column" onClick={goToPage}>
      <ImageCart {...props} mb={10}>
        <Img src={image} alt={`image-${text}`} />
      </ImageCart>

      <TextCart active={active}>
        <Text
          color={
            active ? theme.color.white.default : theme.color.primary.default
          }
          textTransform="uppercase">
          {text}
        </Text>
      </TextCart>
    </Box>
  )
}
NavCard.propTypes = {
  active: PropTypes.bool,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

Navigation.propTypes = {}

export default withRouter(Navigation)
