import { FC } from 'react'

interface PictureProps {
    imageSrc: string,
    altText: string,
    id?: string
}

const Picture:FC <PictureProps> = ({ imageSrc, altText, id }) => {
  return (
    <picture id={id}>
        <img src={imageSrc} alt={altText} />
    </picture>
  )
}

export default Picture