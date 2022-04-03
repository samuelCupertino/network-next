import { LinkCustom } from './styles'

interface ILinkProps {
  href: string
  target?: string
  children: string
  gridArea?: string
}

export const Link: React.FC<ILinkProps> = ({
  href,
  target,
  children,
  gridArea
}) => <LinkCustom {...{ href, target, gridArea }}>{children}</LinkCustom>
