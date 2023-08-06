import styled from "styled-components";
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    position: fixed; 
    inset: 0;
    backdrop-filter: blur(5px); 
    background: rgba(1, 10, 12, 0.3);
    display: grid;
    place-content: center;
    z-index: 1000;
    overflow: hidden;
`

export const Wrapper = styled.div`
    margin: 0 auto;
    overflow: hidden;
    width: 100%;
    max-width: 1024px;
`