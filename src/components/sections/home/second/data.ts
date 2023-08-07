import { AnimationControls, Variants, motion } from "framer-motion"

const ContainerVar: Variants = {
    visible: {
        opacity: 1,
        transition: { duration: .6, staggerChildren: 2 }
    },
    hidden: {
        opacity: 0,
    }
}

const TextVar: Variants = {
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: .8, staggerChildren: .2 }
    },
    hidden: {
        opacity: 0,
        y: '-20%',
    }
}

const TextChildVar: Variants = {
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: .8 }
    },
    hidden: {
        opacity: 0,
        y: '20%',
    }
}

const VideoVar: Variants = {
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: .8 }
    },
    hidden: {
        opacity: 0,
        y: '20%',
    }
}

const variants = {
    container: ContainerVar,
    text: TextVar,
    textChild: TextChildVar,
    video: VideoVar
}

export const animations = (animation: AnimationControls) => {
    return {
        text: {
            as: motion.div,
            initial: 'hidden',
            whileInView: 'visible',
            viewport: { once: false },
            variants: { ...variants.text },
            animate: animation
        },
        textChild: {
            as: motion.div,
            initial: 'hidden',
            whileInView: 'visible',
            viewport: { once: false },
            variants: { ...variants.textChild },
            animate: animation
        },
        video: {
            as: motion.div,
            initial: 'hidden',
            whileInView: 'visible',
            viewport: { once: false },
            variants: { ...variants.video },
            animate: animation
        },
        container: {
            as: motion.div,
            initial: 'hidden',
            whileInView: 'visible',
            viewport: { once: false },
            variants: { ...variants.container },
            animate: animation
        }
    }
}


