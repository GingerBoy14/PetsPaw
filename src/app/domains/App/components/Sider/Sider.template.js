import { useHistory } from 'react-router-dom'
import { Space } from 'antd'
import { Title, Text, Img } from 'antd-styled'
import { Row, Col, Box } from '@qonsoll/react-design'
import { Navigation } from 'domains/App/components'
import { ROUTE_PATHS } from 'app/constants'
import theme from '~/styles/theme'

const Sider = () => {
  // [ADDITIONAL_HOOKS]
  const history = useHistory()

  // [HELPER_FUNCTIONS]
  const goToLanding = () => {
    history.push(ROUTE_PATHS.LANDING)
  }

  // [TEMPLATE]
  return (
    <Row px={72}>
      <Col cw={12} pb={80}>
        <Space style={{ cursor: 'pointer' }} onClick={goToLanding}>
          <Img src="/logo/logo.svg" alt="PetsPaw logo" />
          <Title level={5}>PetsPaw</Title>
        </Space>
      </Col>
      <Col cw={12} pb={60}>
        <Box>
          <Title>Hi intern!</Title>
          <Text
            fontSize={theme.typography.fontSize.h4}
            color={theme.color.text.dark.disabled}>
            Welcome to MSI 2021 Front-end test
          </Text>
        </Box>
      </Col>
      <Col cw={12} pb={20}>
        <Title level={4}>Lets start using The Dogs API</Title>
      </Col>
      <Col cw={12}>
        <Navigation />
      </Col>
    </Row>
  )
}

export default Sider
