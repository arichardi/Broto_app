import React from "react";
import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";
import { MainButton } from "../../components/MainButton";
import { PlantCard } from "../../components/PlantCard";
import {
    Container,
    HeadingContainer,
} from './styles'

export function MyPlants(){
    return(
        <Background>
            <Container>
            <HeadingContainer>
                <Heading title='Minhas Plantas'/>
            </HeadingContainer>
            
            <PlantCard 
                title="Samambinha"
                subtitle="Primeira Plantinha a chegar"
                wateryButton={ () => {}}
            />

            <MainButton onPress={ () => console.log('working') }/>
            </Container>
        </Background>
    )
}

