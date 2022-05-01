import React from "react";
import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";
import { MainButton } from "../../components/MainButton";
import { PlantCard } from "../../components/PlantCard";
import {
    Container,
    HeadingContainer,
    PlantsList,
    MainButtonContainer,
} from './styles'

//devlop help extructure
const plantList = ['1','2','3','4']

export function MyPlants(){
    return(
        <Background>
            <Container>
            <HeadingContainer>
                <Heading title='Minhas Plantas'/>
            </HeadingContainer>
            
            <PlantsList 
                data={plantList}
                keyExtractor={ (plant: string) => plant}
                renderItem={ plant => {
                    return (
                        <PlantCard 
                            title="Samambinha"
                            subtitle="Primeira Plantinha a chegar"
                            wateryButton={ () => {}}
                        />
                    )
                }}
            />

            <MainButtonContainer>
                <MainButton onPress={ () => console.log('working') }/>  
            </MainButtonContainer>
            </Container>
        </Background>
    )
}

