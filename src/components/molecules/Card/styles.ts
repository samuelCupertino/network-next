import styled from 'styled-components'

export const Container = styled.article`
  width: 400px;
  aspect-ratio: 2/3;
  position: relative;
`

export const CardContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: min(10px, 3vw);
  padding: min(10px, 3vw) min(15px, 3.3vw);
`

export const CardTitle = styled.h1`
  height: 8.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: min(23px, 6vw);
`

export const CardBody = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.colors.textSecondary};
`
