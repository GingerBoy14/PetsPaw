import { Img } from 'antd-styled'
import { Box } from '@qonsoll/react-design'
import pet from '~/assets/girl-and-pet.png'
import theme from '~/styles/theme'

const Landing = () => {
  return (
    <>
      <Box
        ml="72px"
        bg={theme.color.primary.t.lighten4}
        borderRadius={theme.borderRadius.lg}
        width="100%"
      />
      <Img src={pet} alt="Girl and pet" position="absolute" right={0} />
    </>
  )
}

export default Landing
