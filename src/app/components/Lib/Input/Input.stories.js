import React from 'react'
import CustomInput from './Input'

// [CONSTANTS]
const SIZES = ['small', 'middle', 'large']

const metadata = {
  title: 'components/Lib/Input',
  component: CustomInput,
  argTypes: {
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
    }
  }
}

export default metadata

export const Input = (args) => <CustomInput placeholder="Input" {...args} />

Input.args = {}

export const InputSearch = (args) => <CustomInput.Search {...args} />

InputSearch.args = {}
