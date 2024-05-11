import { motion } from 'framer-motion';

function transition(Component: React.FC) {
    const TransitionComponent: React.FC = () => {
        return (
            <>
                <Component />
                <motion.div className='slide-in'
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 0 }}
                    exit={{ scaleX: 1 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                />
                <motion.div className='slide-out'
                    initial={{ scaleX: 1 }}
                    animate={{ scaleX: 0 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                />
            </>
        );
    };
    TransitionComponent.displayName = 'TransitionComponent';
    return TransitionComponent;
}
export default transition;