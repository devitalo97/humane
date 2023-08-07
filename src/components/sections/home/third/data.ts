import { AnimationControls, Variants, motion } from "framer-motion"

const ListVar: Variants = {
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        }
    },
    hidden: {
        opacity: 0,
    }
}

const ItemVar: Variants = {
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
        }
    },
    hidden: {
        opacity: 0,
        x: '-20%',
    }
}

const HeaderVar: Variants = {
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
        }
    },
    hidden: {
        opacity: 0,
        x: '-20%',
    }
}

const variants = {
    list: ListVar,
    item: ItemVar,
    header: HeaderVar,
}

export const animations = (animation: AnimationControls) => {
    return {
        header: {
            as: motion.div,
            initial: 'hidden',
            variants: { ...variants.header },
            whileInView: 'show',
            animate: animation
        },
        list: {
            as: motion.div,
            initial: 'hidden',
            variants: { ...variants.list },
            whileInView: 'show',
            animate: animation
        },
        item: {
            as: motion.div,
            variants: { ...variants.item },
        },
    }
}


