import { GridNetwork } from './styles'

import { ImageRender, TextRender, Link } from '../../atoms'
import { Card } from '../../molecules'

export const CardNetwork: React.FC = () => (
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
      <Link
        href="https://www.linkedin.com/in/samuel-cupertino-618ba3218/"
        target="_blank"
      >
        LinkedIn
      </Link>
      <Link href="https://github.com/samuelCupertino" target="_blank">
        GitHub
      </Link>
      <Link href="http://instagram.com/_u/samuelcupertino.dev" target="_blank">
        Instagram
      </Link>
      <Link href="mailto:contato.samuelcupertino@gmail.com" target="_blank">
        E-mail
      </Link>
    </GridNetwork>
  </Card>
)
