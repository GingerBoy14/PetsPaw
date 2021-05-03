import { useReducer } from 'react'
import { AppWrapper } from 'antd-styled'
import { Row, Col } from '@qonsoll/react-design'
import { Sider } from 'domains/App/components'
import rootReducer from './reducer'
import UIContext from './context'
import theme from '~/styles/theme'

const UIProvider = (props) => {
  const { children } = props
  // [COMPONENT_STATE_HOOKS]
  const [state, dispatch] = useReducer(rootReducer, {})

  // [TEMPLATE]
  return (
    <UIContext.Provider value={{ state, dispatch }}>
      <AppWrapper
        background={theme.color.background}
        contentProps={{
          py: 30,
          position: 'sticky'
        }}>
        <Row noGutters height="inherit">
          <Col
            display="block"
            alignSelf="flex-start"
            style={{ position: 'sticky', top: 0 }}>
            <Sider />
          </Col>
          <Col>{children}</Col>
        </Row>
      </AppWrapper>
    </UIContext.Provider>
  )
}

export default UIProvider
