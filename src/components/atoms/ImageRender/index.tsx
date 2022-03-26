import { Container } from './styles'

interface IImageRenderProps {
  src: string
  alt: string
  width?: string
  height?: string
}

export const ImageRender: React.FC<IImageRenderProps> = ({
  src,
  alt,
  width = '100px',
  height = width
}) => {
  return (
    <Container width={width} height={height}>
      <img className="image" src={src} alt={alt} />
    </Container>
  )
}
