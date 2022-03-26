import styled from 'styled-components'

export const GridNetwork = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  grid-template-rows: min(165px, calc(165 * 0.228vw));
  gap: min(30px, calc(30 * 0.228vw)) min(10px, calc(10 * 0.228vw));
`
