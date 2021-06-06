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
  () => ({
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
        success: {
          color: theme.color.white.default,
          backgroundColor: theme.color.success.default,
          '&:hover': {
            color: theme.color.success.default,
            backgroundColor: theme.color.success.t.lighten3,
            borderColor: 'transparent'
          }
        },
        warning: {
          color: theme.color.white.default,
          backgroundColor: theme.color.warning.default,
          '&:hover': {
            color: theme.color.warning.default,
            backgroundColor: theme.color.warning.t.lighten3,
            borderColor: 'transparent'
          }
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
        middle: { borderRadius: theme.borderRadius.sm },
        gigant: {
          height: 80,
          '&.ant-btn-icon-only': {
            width: 80
          },
          padding: '11px 0',
          fontSize: theme.typography.fontSize.h2,
          '&>*': {
            fontSize: theme.typography.fontSize.h2
          }
        }
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
  hover: PropTypes.oneOf(['primary', 'secondary']),
  danger: PropTypes.bool
}
Button.defaultProps = { size: 'middle' }

export default Button
