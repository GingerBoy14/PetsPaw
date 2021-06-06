import { cloneElement } from 'react'
import styled from 'styled-components'
import { Box } from '@qonsoll/react-design'
import { variant } from 'styled-system'

let ButtonGroup = (props) => (
  <Box {...props}>
    {Array.isArray(props.children)
      ? props.children.map((item) => cloneElement(item, { size: props.size }))
      : cloneElement(props.children, { size: props.size })}
  </Box>
)

ButtonGroup = styled(ButtonGroup)(
  ({ theme }) => ({
    '&>button': {
      margin: `${theme.space[1]} 2px`
    },
    '&>button:not(:last-child):not(:first-child)': {
      borderRadius: 0
    },
    '&>button:first-child': {
      marginLeft: theme.space[1],
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    },
    '&>button:last-child': {
      marginRight: theme.space[1],
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    },

    background: theme.color.white.default,
    width: 'fit-content'
  }),
  ({ theme }) =>
    variant({
      prop: 'size',
      variants: {
        small: { borderRadius: theme.borderRadius.sm },
        middle: { borderRadius: theme.borderRadius.sm },
        large: {
          borderRadius: Number.parseInt(theme.borderRadius.lg) + 4 + 'px'
        },
        gigant: {
          borderRadius: Number.parseInt(theme.borderRadius.lg) + 4 + 'px'
        }
      }
    })
)

ButtonGroup.defaultProps = { size: 'middle' }

export default ButtonGroup
