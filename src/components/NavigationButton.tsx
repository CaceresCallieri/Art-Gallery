import { FC } from 'react'

import { motion } from 'framer-motion'

import ArrowRight from "../assets/icons/icon-arrow-right.svg?react"
import ArrowLeft from "../assets/icons/icon-arrow-left.svg?react"

interface NavigationButtonProps {
    text: string
    reversed?: boolean
}

const NavigationButton: FC<NavigationButtonProps> = ({ text, reversed }) => {
    const Arrow = reversed ? ArrowLeft : ArrowRight;
    const buttonClasses = 'navigation-button ' + (reversed ? 'reversed' : '')

    return (
        <motion.button className={buttonClasses}
            whileHover={{ scale: 1.1 }}
        >
            {reversed && <div className="arrow"><Arrow /></div>}
            {text.toUpperCase()}
            {!reversed && <div className="arrow"><Arrow /></div>}
        </motion.button>
    )
}

export default NavigationButton