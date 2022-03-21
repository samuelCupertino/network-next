import { Container } from './styles'

import { ImageRender, ContainerRender } from '../../atoms'
import { Card } from '../../molecules'

interface IUserDescriptionProps {
  avatar: string
}

export const UserDescription: React.FC<IUserDescriptionProps> = ({
  avatar,
  children
}) => {
  return (
    <Container>
      <ImageRender src={avatar} alt="Foto do perfil" width={150} />
      <ContainerRender dirTo="right">{children}</ContainerRender>
    </Container>
  )
}
