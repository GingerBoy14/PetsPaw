import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Input } from 'app/components/Lib'
import { Row, Col, Box } from '@qonsoll/react-design'
import {
  FrownOutlined,
  HeartOutlined,
  SmileOutlined,
  LeftOutlined
} from '@ant-design/icons'
import { ROUTE_PATHS } from 'app/constants'
import theme from '~/styles/theme'

const BUTTON_MAP = [
  { route: ROUTE_PATHS.LIKED_ALL, icon: <SmileOutlined /> },
  { route: ROUTE_PATHS.FAVOURITES_ALL, icon: <HeartOutlined /> },
  { route: ROUTE_PATHS.DISLIKED_ALL, icon: <FrownOutlined /> }
]

const ContentWrapper = (props) => {
  // [INTERFACES]
  const { children, title, onBack = true } = props

  // [ADDITIONAL_HOOKS]
  const history = useHistory()

  // [COMPONENT_STATE_HOOKS]
  const [currentPage, setCurrentPage] = useState(BUTTON_MAP[0].route)

  // [HELPER_FUNCTIONS]
  const goToPage = (path) => {
    history.push(path)
  }

  // [USE_EFFECTS]
  useEffect(() => {
    setCurrentPage(history.location.pathname)
  }, [history.location.pathname])

  // [TEMPLATE]
  return (
    <>
      <Box pb={10}>
        <Row noGutters width="inherit">
          <Col>
            <Input.Search
              placeholder="Search for breeds by name"
              size="large"
            />
          </Col>
          {BUTTON_MAP.map((button) => (
            <Col cw="auto" style={{ paddingLeft: 10 }}>
              <Button
                size="large"
                type="white"
                icon={button.icon}
                isActive={button.route === currentPage}
                onClick={() => goToPage(button.route)}
              />
            </Col>
          ))}
        </Row>
      </Box>
      <Box
        flex={1}
        borderRadius={theme.borderRadius.lg}
        bg={theme.color.white.default}
        display="block"
        style={{ padding: '20px' }}>
        <Row noGutters>
          <Col cw="auto" mr={2}>
            <Button
              size="middle"
              type="secondary"
              icon={<LeftOutlined />}
              color={theme.color.primary.default}
            />
          </Col>
          <Col cw="auto">
            <Button size="middle" type="primary" hover="primary">
              {title}
            </Button>
          </Col>
        </Row>

        {children}
      </Box>
    </>
  )
}

ContentWrapper.propTypes = {
  title: PropTypes.string,
  onBack: PropTypes.func
}

export default ContentWrapper
