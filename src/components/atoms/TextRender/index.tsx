import { Typewriter } from 'react-simple-typewriter'

import { Container } from './styles'

interface ITextRenderProps {
  children: string
}

export const TextRender: React.FC<ITextRenderProps> = ({ children }) => (
  <Container>
    <Typewriter
      words={[children]}
      loop={5}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={3000}
    />
  </Container>
)
