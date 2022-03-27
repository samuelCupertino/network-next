import { LinkCustom } from './styles'

interface ILinkProps {
  href: string
  target?: string
  children: string
}

export const Link: React.FC<ILinkProps> = ({ href, target, children }) => (
  <LinkCustom href={href} target={target}>
    {children}
  </LinkCustom>
)
