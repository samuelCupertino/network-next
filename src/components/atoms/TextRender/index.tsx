import { Typewriter } from 'react-simple-typewriter'

import { Container } from './styles'

interface ITextRenderProps {
  text: string[]
  margin?: string
  gridArea?: string
}

export const TextRender: React.FC<ITextRenderProps> = ({
  text,
  margin,
  gridArea
}) => (
  <Container margin={margin} gridArea={gridArea}>
    <Typewriter
      words={text}
      loop={5}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={3000}
    />
  </Container>
)
