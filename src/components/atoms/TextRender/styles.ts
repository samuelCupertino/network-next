import styled from 'styled-components'

interface ITextRenderProps {
  margin?: string
  gridArea?: string
}
export const Container = styled.p<ITextRenderProps>`
  grid-area: ${({ gridArea = 'unset' }) => gridArea};
  font-size: min(12px, calc(12 * 0.228vw));
  line-height: min(20px, calc(20 * 0.228vw));
  margin: ${({ margin = 0 }) => margin};
`
