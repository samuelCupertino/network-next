import { GridNetwork } from './styles'

import { ImageRender, ContainerRender } from '../../atoms'
import { Card, UserDescription } from '../../molecules'

export const CardNetwork: React.FC = () => {
  return (
    // <Container>
    <Card title="Samuel Cupertino">
      <GridNetwork>
        <ImageRender
          src="https://avatars.githubusercontent.com/u/88355379?v=4"
          alt="Foto do perfil"
          width={150}
        />
        <ContainerRender dirTo="right">
          Desenvolvedor full-stack, apaixonado pela 11ª arte e abstrações fora
          da caixa.
        </ContainerRender>
      </GridNetwork>
    </Card>
    // </Container>
  )
}
