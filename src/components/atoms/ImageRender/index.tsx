import ImageNext from 'next/image'
import { Container } from './styles'

interface IImageRenderProps {
  src: string
  alt: string
  width?: number
  height?: number
}

export const ImageRender: React.FC<IImageRenderProps> = ({
  src,
  alt,
  width = 100,
  height = width
}) => {
  return (
    <Container height={height}>
      <ImageNext {...{ src, alt, height, width }} />
    </Container>
  )
}
