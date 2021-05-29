import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { Input, Space, Select } from 'antd'
import { Button } from 'app/components/Lib'
import { Row, Col, Box } from '@qonsoll/react-design'
import {
  FrownOutlined,
  HeartOutlined,
  SmileOutlined,
  SearchOutlined,
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

  // [HELPER_FUNCTIONS]
  const goToPage = (path) => {
    history.push(path)
  }

  // [TEMPLATE]
  return (
    <>
      <Box pb={10}>
        <Row noGutters width="inherit">
          <Col>
            <Input
              placeholder="Search for breeds by name"
              size="large"
              suffix={
                <Button
                  borderRadius={theme.borderRadius.sm}
                  color={theme.color.primary.default}
                  bg={theme.color.primary.t.lighten4}
                  icon={<SearchOutlined />}
                />
              }
              style={{ padding: '0 15px' }}
            />
          </Col>
          {BUTTON_MAP.map((button) => (
            <Col cw="auto" style={{ paddingLeft: 10 }}>
              <Button
                size="large"
                type="secondary"
                icon={button.icon}
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
        <Box>
          <Button icon={<LeftOutlined />} color={theme.color.primary.default} />
        </Box>

        {children}
      </Box>
    </>
  )
}

ContentWrapper.propTypes = {}

export default ContentWrapper
