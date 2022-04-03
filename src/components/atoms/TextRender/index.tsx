import { Typewriter } from 'react-simple-typewriter'

import { Container } from './styles'

interface ITextRenderProps {
  children: string
  margin?: string
  gridArea?: string
}

export const TextRender: React.FC<ITextRenderProps> = ({
  children,
  margin,
  gridArea
}) => (
  <Container margin={margin} gridArea={gridArea}>
    <Typewriter words={[children]} cursor cursorStyle="_" typeSpeed={70} />
  </Container>
)
