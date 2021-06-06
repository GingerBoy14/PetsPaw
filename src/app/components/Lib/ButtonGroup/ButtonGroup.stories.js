import { FrownOutlined, HeartOutlined, SmileOutlined } from '@ant-design/icons'
import ButtonGroupComponent from './ButtonGroup'
import Button from 'app/components/Lib/Button'

// [CONSTANTS]
const SIZES = ['small', 'middle', 'large', 'gigant']

const metadata = {
  title: 'components/Lib/ButtonGroup',
  component: ButtonGroupComponent,
  argTypes: {
    size: {
      description: `Button size.`,
      table: {
        defaultValue: { summary: 'middle' },
        type: {
          summary: SIZES
        }
      },
      defaultValue: 'gigant',
      control: {
        type: 'select',
        options: SIZES
      }
    }
  }
}

export default metadata

export const ButtonGroup = (args) => (
  <ButtonGroupComponent {...args}>
    <Button type="success" icon={<SmileOutlined />} size="small" />
    <Button type="primary" icon={<HeartOutlined />} />

    <Button type="warning" icon={<FrownOutlined />} size="large" />
  </ButtonGroupComponent>
)
