import { Container } from './styles'

import { Image } from '../../atoms/Image'
import { Card } from '../../molecules'

export const CardGitHub: React.FC = () => {
  return (
    <Container>
      <Card title="GitHub">
        <Image
          src="https://avatars.githubusercontent.com/u/88355379?v=4"
          alt="Foto do perfil"
        />
      </Card>
    </Container>
  )
}
