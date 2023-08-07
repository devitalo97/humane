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
        transition: { duration: .8 }
    },
    hidden: {
        opacity: 0,
        y: '-20%',
    }
}

const EllipseVar: Variants = {
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, staggerChildren: 4 }
    },
    hidden: {
        opacity: .5,
        y: '-20%',
    }
}

export const variants = {
    container: ContainerVar,
    text: TextVar,
    ellipse: EllipseVar
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
        container: {
            as: motion.div,
            initial: 'hidden',
            whileInView: 'visible',
            viewport: { once: false },
            variants: { ...variants.container },
            animate: animation
        },
        ellipse: {
            as: motion.div,
            initial: 'hidden',
            whileInView: 'visible',
            viewport: { once: false },
            variants: { ...variants.ellipse },
            animate: animation
        },
    }
}

