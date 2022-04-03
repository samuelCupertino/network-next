import { Typewriter } from 'react-simple-typewriter'

import { Container } from './styles'

interface ITextRenderProps {
  children: string
  margin?: string
}

export const TextRender: React.FC<ITextRenderProps> = ({
  children,
  margin
}) => (
  <Container margin={margin}>
    <Typewriter
      words={[children]}
      loop={5}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={5000}
    />
  </Container>
)
