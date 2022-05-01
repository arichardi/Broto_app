import React from "react";
import { Container, TopCircle, BottomCircle} from './style'

interface Props {
    children: React.ReactNode
}

export function Background({children}: Props){
    return(
        <Container>
            <TopCircle />
            <BottomCircle />
            {children}
        </Container>
    )
}