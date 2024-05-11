import { FC } from 'react'
import LightLogo from '../assets/icons/logo-light.svg?react'
import SocialIcons from './SocialIcons'

interface FooterProps {
    goldTheme?: boolean
}

const Footer: FC<FooterProps> = ({ goldTheme }) => {
    return (
        <footer className={`${goldTheme ? 'gold-theme' : ''}`}>
            <div className="schedule">
                <LightLogo />

                <p>
                    The Modern Art Gallery is free to all visitors and open seven days a week
                    from 8am to 9pm. Find us at 99 King Street, Newport, USA.
                </p>
            </div>

            <SocialIcons /> 

        </footer>
    )
}

export default Footer