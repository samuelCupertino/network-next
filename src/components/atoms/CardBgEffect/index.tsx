import { Container, GlobalStyle } from './styles'

export const CardBgEffect: React.FC = () => {
  const b = 3
  return (
    <>
      <GlobalStyle />
      <Container>
        <svg
          className="card"
          height="100%"
          width="100%"
          viewBox={`0 0 ${400 + b} ${600 + b}`}
        >
          {/*  -------- BODY -------- */}
          <path
            className="card-body"
            d={`
            M${30 - b / 4},1
            H390
            L${400 + b / 2},10
            V555
            L${355 - b / 2},${599 + b}
            H${15 + b}
            L${0 + b / 2},585
            V${30 - b}
            L30,${0 - b / 4}
          `}
          />
          <linearGradient id="bodyGradient" gradientTransform="rotate(65)">
            <stop className="stop-1" offset="5%" />
            <stop className="stop-2" offset="95%" />
          </linearGradient>

          {/*  -------- DETAIL left-top -------- */}

          <line className="card-detail-line" x1={-5} y1={15} x2={15} y2={-5} />
          <path
            className="card-detail-polygon"
            d={`
            M-20,120
            L${0 + b / 2},100
            V${30 - b / 2}
            L${30 + b / 2},0
            H100
            L150,-50
          `}
            stroke="url(#detailGradient1)"
          />
          <linearGradient id="detailGradient1" gradientTransform="rotate(45)">
            <stop className="stop-1" offset="40%" />
            <stop className="stop-2" offset="65%" />
          </linearGradient>

          {/*  -------- DETAIL right-bottom -------- */}

          <path
            className="card-detail-polygon"
            d={`
            M420,480 
            L${400 + b / 2},500 
            V555
            L355,${601 + b / 2}
            H300
            L280,620
          `}
            stroke="url(#detailGradient2)"
          />
          <linearGradient id="detailGradient2" gradientTransform="rotate(45)">
            <stop className="stop-2" offset="80%" />
            <stop className="stop-1" offset="100%" />
          </linearGradient>
          <line
            className="card-detail-line"
            x1={365}
            y1={610}
            x2={610}
            y2={365}
          />
          <line
            className="card-detail-line"
            x1={385}
            y1={610}
            x2={610}
            y2={385}
          />

          {/*  -------- HEADER -------- */}
          <path
            className="card-header"
            d={`
            M40,12
            H380
            L390,21
            V60
            H15
            V35 
            L40,12
          `}
          />
        </svg>
      </Container>
    </>
  )
}
