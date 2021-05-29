import PropTypes from 'prop-types'
import { Button as AntButton } from 'antd-styled'
import styled from 'styled-components'
import { variant } from 'styled-system'

const getPrimaryStyles = (theme) => ({
  color: theme.color.white.default,
  backgroundColor: theme.color.primary.default,
  borderColor: 'transparent'
})
const getSecondaryStyles = (theme) => ({
  color: theme.color.primary.default,
  backgroundColor: theme.color.primary.t.lighten3,
  borderColor: 'transparent'
})

const Button = styled(AntButton)(
  ({ block }) => ({
    width: !block && 'fit-content',
    textTransform: 'uppercase'
  }),
  ({ theme }) =>
    variant({
      prop: 'type',
      variants: {
        white: {
          color: theme.color.primary.default,
          backgroundColor: theme.color.white.default,
          '&:hover': getSecondaryStyles(theme)
        },
        primary: {
          ...getPrimaryStyles(theme),
          '&:hover': getSecondaryStyles(theme)
        },
        secondary: {
          ...getSecondaryStyles(theme),
          '&:hover': getPrimaryStyles(theme)
        }
      }
    }),
  ({ theme }) =>
    variant({
      prop: 'hover',
      variants: {
        primary: { '&:hover': getPrimaryStyles(theme) },
        secondary: {
          '&:hover': getSecondaryStyles(theme)
        }
      }
    }),

  ({ theme }) =>
    variant({
      prop: 'isActive',
      variants: {
        true: getPrimaryStyles(theme)
      }
    }),
  ({ theme }) =>
    variant({
      prop: 'size',
      variants: {
        middle: { borderRadius: theme.borderRadius.sm }
      }
    })
)

Button.propTypes = {
  block: PropTypes.bool,
  isActive: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'middle', 'large']),
  type: PropTypes.oneOf([
    'white',
    'primary',
    'secondary',
    'text',
    'default',
    'ghost',
    'dashed'
  ]),
  hover: PropTypes.oneOf(['primary', 'secondary'])
}

export default Button
