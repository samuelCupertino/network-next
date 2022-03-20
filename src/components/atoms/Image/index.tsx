import ImageNext from 'next/image'

interface IImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export const Image: React.FC<IImageProps> = ({ src, alt, ...props }) => {
  return <ImageNext src={src} alt={alt} {...props} />
}
