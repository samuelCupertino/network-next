import { Container, CardContent, CardTitle, CardBody } from './styles'

import { CardBgEffect } from '../../atoms'

interface ICardProps {
  title: String
}
export const Card: React.FC<ICardProps> = ({ title, children }) => (
  <Container>
    <CardBgEffect />
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardBody>{children}</CardBody>
    </CardContent>
  </Container>
)
