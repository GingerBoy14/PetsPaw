import ImageComponent from './Image'
import { Row, Col } from '@qonsoll/react-design'
import Button from '../Button'
const metadata = {
  title: 'components/Lib/Image',
  component: ImageComponent,
  argTypes: {}
}

export default metadata

export const Image = (args) => (
  <Row>
    <Col cw={6}>
      <ImageComponent
        src="https://cdn2.thedogapi.com/images/r1f_ll5VX_1280.jpg"
        childrenAlignCenter
        {...args}>
        <Button type="white" size="large" hover="primary">
          Click
        </Button>
      </ImageComponent>
    </Col>
  </Row>
)
