import { motion } from 'framer-motion'

import FacebookIcon from '../assets/icons/icon-facebook.svg?react'
import InstagramIcon from '../assets/icons/icon-instagram.svg?react'
import TwitterIcon from '../assets/icons/icon-twitter.svg?react'

const SocialIcons = () => {
    const socialIcons = [
        {
            icon: <FacebookIcon />,
            href: 'https://www.facebook.com'
        },
        {
            icon: <InstagramIcon />,
            href: 'https://www.instagram.com'
        },
        {
            icon: <TwitterIcon />,
            href: 'https://www.twitter.com'
        }
    ]

    return (
        <div className="social-icons">
            {socialIcons.map((socialIcon) => (
                <motion.a
                    key={socialIcon.href}
                    href={socialIcon.href}
                    whileHover={{ scale: 1.1, y: -5 }}
                >
                    {socialIcon.icon}
                </motion.a>
            ))}
        </div>
    )
}

export default SocialIcons