import React from 'react';
import BrotoIcon from '../../assets/BrotoIcon';
import WateryIcon from '../../assets/WateryIcon';
import {
Container,
PlantImageContainer,
PlantName,
PlantSubtitle,
PlantDetailsContainer,
WateryButton,
} from './styles'

interface Props {
    title: string;
    subtitle: string;
    wateryButton: () => void;
}

export function PlantCard({title, subtitle, wateryButton}: Props){
    return (
        <Container>
            <PlantImageContainer>
                <BrotoIcon />
            </PlantImageContainer>
            <PlantDetailsContainer>
                <PlantName>{title}</PlantName>
                <PlantSubtitle>{subtitle}</PlantSubtitle>
            </PlantDetailsContainer>
            <WateryButton onPress={wateryButton}>
                <WateryIcon />
            </WateryButton>
        </Container>
    )
}