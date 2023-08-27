import { AnimationControls, Variants, cubicBezier, motion } from "framer-motion"

const CardVar: Variants = {
    visible: (direction) => {
        return {
            x: direction > 0 ? 200 : -200,
            opacity: 0
        }
    },
    center: {
        x: 0,
        zIndex: 1,
        opacity: 1
    },
    hidden: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 200 : -200,
            opacity: 0
        }
    },
}


export const variants = {
    card: CardVar,
}

export const animations = () => {
    return {
        card: {
            as: motion.div,
            exit: "hidden",
            initial: "visible",
            animate: "center",
            variants: variants.card,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.1 }
            }
        }
    }
}

