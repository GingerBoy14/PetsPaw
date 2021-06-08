import { Box } from '@qonsoll/react-design'
import PropTypes from 'prop-types'
import { Img as AntdImage } from 'antd-styled'
import styled from 'styled-components'

let Image = (props) => {
  const {
    src,
    alt = 'image',
    children,
    wrapperProps,
    childrenAlignCenter,
    childrenAlignBottom,
    ...rest
  } = props

  const styles = {}
  if (childrenAlignCenter) {
    styles.display = 'flex'
    styles.justifyContent = 'center'
    styles.alignItems = 'center'
  }
  if (childrenAlignBottom) {
    styles.display = 'flex'
    styles.justifyContent = 'center'
    styles.alignItems = 'flex-end'
  }

  return (
    <Box {...rest}>
      <AntdImage src={src} alt={alt} />
      <Box {...styles} {...wrapperProps} className="image-mask">
        {children}
      </Box>
    </Box>
  )
}

Image = styled(Image)`
  width: 100%;
  position: relative;
  & > img {
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
  }
  .image-mask {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    top: 0;
    width: 100%;
    height: 100%;
    transition: ${({ theme }) => theme.transition.default};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
  }
  &:hover .image-mask {
    opacity: 1;
    transition: ${({ theme }) => theme.transition.default};
    background-color: ${({ theme }) => theme.color.primary.t.lighten2};
  }
`

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  wrapperProps: PropTypes.object,
  childrenAlignCenter: PropTypes.bool,
  childrenAlignBottom: PropTypes.bool,
  children: PropTypes.node
}

export default Image
