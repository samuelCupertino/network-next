import { Container } from './styles'

interface IImageRenderProps {
  src: string
  alt: string
  width?: string
  height?: string
  gridArea?: string
  onClick: () => void
}

export const ImageRender: React.FC<IImageRenderProps> = ({
  src,
  alt,
  width = '100px',
  height = width,
  gridArea,
  onClick
}) => (
  <Container {...{ width, height, gridArea, onClick }}>
    <img className="image" src={src} alt={alt} />
  </Container>
)
