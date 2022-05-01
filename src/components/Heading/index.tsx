import React from 'react';
import {
Container,
Title,
ColorTag
} from './styles'

interface Props {
    title: string;
}

export function Heading({title}: Props){
    return (
        <Container>
            <ColorTag />
            <Title>{title}</Title>
        </Container>
    )
}