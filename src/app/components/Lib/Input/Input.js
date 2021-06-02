import { SearchOutlined } from '@ant-design/icons'
import { Button } from 'app/components/Lib'
import PropTypes from 'prop-types'
import { Input as AntdInput } from 'antd-styled'
import styled from 'styled-components'
import { variant } from 'styled-system'

const Input = styled(AntdInput)(
  ({ theme }) => ({
    borderWidth: theme.borderWidths.sm,
    boxShadow: 'none',
    paddingLeft: theme.space[3],
    paddingRight: theme.space[2],
    color: theme.color.text.dark.secondary,
    '&::placeholder': {
      color: theme.color.text.dark.secondary,
      transition: theme.transition.default
    },
    '&:focus': {
      borderRightWidth: `${theme.borderWidths.sm} !important`,
      borderColor: theme.color.primary.default,
      color: theme.color.text.dark.primary,
      boxShadow: 'none',
      '&::placeholder': {
        color: theme.color.text.dark.primary,
        transition: theme.transition.default
      }
    },
    '&:hover': {
      borderRightWidth: `${theme.borderWidths.sm} !important`,
      borderColor: theme.color.primary.t.lighten3,
      '&::placeholder': {
        color: theme.color.white.default,
        transition: theme.transition.default
      }
    }
  }),
  ({ theme }) =>
    variant({
      prop: 'size',
      variants: {
        large: { height: '60px' },
        middle: { borderRadius: theme.borderRadius.sm },
        small: { borderRadius: theme.borderRadius.sm }
      }
    })
)

Input.Search = (props) => (
  <Input
    placeholder="Search..."
    suffix={
      <Button
        type="secondary"
        icon={<SearchOutlined />}
        onClick={props.onSearch}
      />
    }
    {...props}
  />
)

Input.Search = styled(Input.Search)(({ theme }) => ({
  '>.ant-input': {
    borderRadius: 0,
    color: theme.color.text.dark.secondary,
    '&::placeholder': {
      color: theme.color.text.dark.secondary,
      transition: theme.transition.default
    }
  },
  '&.ant-input-affix-wrapper': {
    borderRightWidth: `${theme.borderWidths.sm} !important`,
    boxShadow: 'none',
    '&:hover': {
      borderRightWidth: `${theme.borderWidths.sm} !important`,
      borderColor: theme.color.primary.t.lighten3,
      '>.ant-input::placeholder': {
        transition: theme.transition.default,
        color: theme.color.white.default
      }
    }
  },
  '&.ant-input-affix-wrapper-focused': {
    borderRightWidth: `${theme.borderWidths.sm} !important`,
    borderColor: theme.color.primary.default,
    '>.ant-input': {
      color: theme.color.text.dark.primary,
      '&::placeholder': {
        color: theme.color.text.dark.primary,
        transition: theme.transition.default
      }
    }
  }
}))

Input.propTypes = {
  size: PropTypes.oneOf(['small', 'middle', 'large'])
}

export default Input
