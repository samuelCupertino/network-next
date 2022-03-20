import ImageNext from 'next/image'
import { Container } from './styles'

interface IImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

export const Image: React.FC<IImageProps> = ({ src, alt, ...props }) => {
  return (
    <Container>
      <img src={src} alt={alt} height={200} width={200} />
    </Container>
  )
}
