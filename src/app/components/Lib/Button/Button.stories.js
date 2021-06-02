import React from 'react'
import CustomButton from './Button'
import { SearchOutlined } from '@ant-design/icons'

// [CONSTANTS]
const TYPES = [
  'white',
  'primary',
  'secondary',
  'text',
  'default',
  'ghost',
  'dashed'
]
const HOVERS = ['primary', 'secondary']
const SIZES = ['small', 'middle', 'large']

const metadata = {
  title: 'components/Lib/Button',
  component: CustomButton,
  argTypes: {
    type: {
      description: `Button type.`,
      table: {
        defaultValue: { summary: 'default' },
        type: {
          summary: TYPES
        }
      },
      defaultValue: 'default',
      control: {
        type: 'select',
        options: TYPES
      }
    },
    hover: {
      description: `Button hover.`,
      table: {
        type: {
          summary: HOVERS
        }
      },
      control: {
        type: 'select',
        options: [...HOVERS, 'default']
      }
    },
    size: {
      description: `Button size.`,
      table: {
        defaultValue: { summary: 'middle' },
        type: {
          summary: SIZES
        }
      },
      defaultValue: 'middle',
      control: {
        type: 'select',
        options: SIZES
      }
    },
    block: {
      defaultValue: false,
      table: {
        defaultValue: { summary: false }
      }
    },
    isActive: {
      defaultValue: false,
      table: {
        defaultValue: { summary: false }
      }
    }
  }
}
export default metadata

export const Button = (args) => <CustomButton {...args}>Button</CustomButton>

Button.args = { block: false, isActive: false }

export const ButtonWithIcon = (args) => (
  <CustomButton icon={<SearchOutlined />} {...args} />
)

ButtonWithIcon.args = {}
