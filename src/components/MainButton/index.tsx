import React from 'react';
import PlantAddIconButton from '../../assets/PlantAddIconButton';
import {
Container,
} from './styles'

interface Props {
    onPress: () => void;
}

export function MainButton({onPress}: Props){
    return (
        <Container onPress={onPress}>
            <PlantAddIconButton />
        </Container>
    )
}