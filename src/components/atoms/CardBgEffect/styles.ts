import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  .card-body {
    stroke: ${({ theme }) => theme.colors.secondary};
    stroke-opacity: 0.5;
    stroke-width: 3px;
    fill: url(#bodyGradient);
    opacity: 0.75;
  }
  #bodyGradient .stop-1 {
    stop-color: ${({ theme }) => theme.colors.tertiary};
  }
  #bodyGradient .stop-2 {
    stop-color: ${({ theme }) => theme.colors.quaternary};
  }

  .card-detail-line {
    stroke: ${({ theme }) => theme.colors.secondary};
    stroke-width: 7px;
    opacity: 0.95;
  }
  .card-detail-polygon {
    stroke-width: 8px;
    fill: transparent;
  }

  #detailGradient1 .stop-1,
  #detailGradient2 .stop-1 {
    stop-color: ${({ theme }) => theme.colors.secondary};
  }
  #detailGradient2 .stop-2,
  #detailGradient1 .stop-2 {
    stop-color: ${({ theme }) => theme.colors.tertiary};
  }

  .card-header {
    stroke: ${({ theme }) => theme.colors.secondary};
    stroke-opacity: 0.75;
    stroke-width: 2px;
    fill: transparent;
  }
`
