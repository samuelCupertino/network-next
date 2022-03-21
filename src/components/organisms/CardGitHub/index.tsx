import { Container } from './styles'

import { ImageRender } from '../../atoms/ImageRender'
import { Card } from '../../molecules'

export const CardGitHub: React.FC = () => {
  return (
    <Container>
      <Card title="GitHub">
        <ImageRender
          src="https://avatars.githubusercontent.com/u/88355379?v=4"
          alt="Foto do perfil"
        />
      </Card>
    </Container>
  )
}
