import { motion } from 'framer-motion';

export const SnakeLoader = ({bg}) => {
    const loaderContainer = {
        start: {
            transition: {
                staggerChildren: 0.1,
            },
        },
        end: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    }
    
    const cVariants = {
        start: {
            y: '0%',
            opacity: 0,
            scale: 1
        },
        end: {
            y: ['50%', '-50%'],
            opacity: 1,
            scale: 1.5,
        },
    }
    
    const cTransition = {
        duration: 0.7,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
    }
    
    
    const circle = {
        width: '.8rem',
        height: '.8rem',
        backgroundColor: bg,
        borderRadius: '50%',
    }
    
    return (
        <motion.div variants={loaderContainer} initial="start" animate="end" >
            <motion.span style={circle} variants={cVariants} transition={cTransition} className="text-bold ml-2"></motion.span>
            <motion.span style={circle} variants={cVariants} transition={cTransition} className="text-bold ml-2"></motion.span>
            <motion.span style={circle} variants={cVariants} transition={cTransition} className="text-bold ml-2"></motion.span>
            <motion.span style={circle} variants={cVariants} transition={cTransition} className="text-bold ml-2"></motion.span>
            <motion.span style={circle} variants={cVariants} transition={cTransition} className="text-bold ml-2"></motion.span>
            <motion.span style={circle} variants={cVariants} transition={cTransition} className="text-bold ml-2"></motion.span>
        </motion.div>
    )
}