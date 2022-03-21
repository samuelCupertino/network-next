import ImageNext from 'next/image'
import { Container } from './styles'

interface IContainerRenderProps {
  dirTo: 'right' | 'left' | 'top' | 'bottom'
}

export const ContainerRender: React.FC<IContainerRenderProps> = ({
  dirTo,
  children
}) => {
  return (
    <Container dirTo={dirTo} className={dirTo}>
      {children}
    </Container>
  )
}
