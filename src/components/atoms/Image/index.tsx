import ImageNext from 'next/image'
import { Container } from './styles'

interface IImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

export const Image: React.FC<IImageProps> = ({
  src,
  alt,
  height = 100,
  width = height
}) => {
  return (
    <Container>
      <ImageNext {...{ src, alt, height, width }} />
    </Container>
  )
}
