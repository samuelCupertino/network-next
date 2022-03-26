import { GridNetwork } from './styles'

import { ImageRender, TextRender, Button } from '../../atoms'
import { Card } from '../../molecules'

export const CardNetwork: React.FC = () => {
  return (
    <Card title="Samuel Cupertino">
      <GridNetwork>
        <ImageRender
          src="https://avatars.githubusercontent.com/u/88355379?v=4"
          alt="Foto do perfil"
          width="min(150px, calc(150 * 0.230vw))"
        />
        <TextRender>
          Detectado! Desenvolvedor full-stack, apaixonado pela 11ª arte e
          abstrações fora da caixa.
        </TextRender>
        <Button>LinkedIn</Button>
        <Button>GitHub</Button>
        <Button>Instagram</Button>
        <Button>E-mail</Button>
      </GridNetwork>
    </Card>
  )
}
