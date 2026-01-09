import type { ReactNode } from "react";
import { motion } from "framer-motion";

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        y: -20,
    },
};

export default function PageTransition({ children }: { children: ReactNode }) {
    return (
        <motion.div
            {...({
                variants: pageVariants,
                initial: "initial",
                animate: "animate",
                exit: "exit",
                transition: { duration: 0.35, ease: "easeOut" }
            } as any)}
        >
            {children}
        </motion.div>
    );
}