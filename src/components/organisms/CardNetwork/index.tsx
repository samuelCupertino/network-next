import { GridNetwork } from './styles'

import { ImageRender, TextRender, Link } from '../../atoms'
import { Card } from '../../molecules'

const divergentDetected = () => {
  const speech = new SpeechSynthesisUtterance(`
    Divergente detectado! 
    Alerta erro, alerta erro, alerta erro! 
    Iniciando o protocolo de segurança.
    Auto destruição em 3, 2, 1.
  `)
  const voices = window.speechSynthesis.getVoices()
  const voice = voices.filter(({ lang }) => lang === 'pt-BR')[0]

  speech.voice = voice
  speech.lang = 'pt-BR'
  speech.rate = 0.75
  speech.pitch = 0.75

  window.speechSynthesis.speak(speech)

  document.body.classList.add('anim-error')
  setTimeout(() => location.reload(), 14000)
}

export const CardNetwork: React.FC = () => (
  <Card title="Samuel Cupertino">
    <GridNetwork>
      <ImageRender
        gridArea="avatar"
        src="https://avatars.githubusercontent.com/u/88355379?v=4"
        alt="Foto do perfil"
        width="min(150px, calc(150 * 0.228vw))"
        onClick={divergentDetected}
      />
      <TextRender
        gridArea="description"
        margin="min(5px, calc(5 * 0.228vw)) 0 0"
        text={[
          'Desenvolvedor full-stack, apaixonado pela 11ª arte e abstrações fora da caixa. Desafios e inovação são sua força motriz.',
          'Cativado pelo ecossistema da linguagem JavaScript, adora se aventurar em suas novidades.',
          'Entende evolução e aprendizado como processos continuos. Então, busca aprofundar seus conhecimentos constantemente.'
        ]}
      />
      <Link
        gridArea="link1"
        href="https://www.linkedin.com/in/samuel-cupertino-618ba3218/"
        target="_blank"
      >
        LinkedIn
      </Link>
      <Link
        gridArea="link2"
        href="https://github.com/samuelCupertino"
        target="_blank"
      >
        GitHub
      </Link>
      <Link
        gridArea="link3"
        href="http://instagram.com/_u/samuelcupertino.dev"
        target="_blank"
      >
        Instagram
      </Link>
      <Link
        gridArea="link4"
        href="mailto:contato.samuelcupertino@gmail.com"
        target="_blank"
      >
        E-mail
      </Link>
    </GridNetwork>
  </Card>
)
