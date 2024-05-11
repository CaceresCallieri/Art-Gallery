import { FC } from 'react'
import { motion } from 'framer-motion'

interface PictureProps {
    imageSrc: string,
    altText: string,
    id?: string
}

const Picture: FC<PictureProps> = ({ imageSrc, altText, id }) => {
    return (
        <motion.picture id={id}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            <img src={imageSrc} alt={altText} />
        </motion.picture>
    )
}

export default Picture