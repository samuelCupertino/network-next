import { Container } from './styles'

interface IButtonProps {
  children: string
}

export const Button: React.FC<IButtonProps> = ({ children }) => {
  return <Container>{children}</Container>
}
