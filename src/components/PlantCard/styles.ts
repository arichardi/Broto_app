import styled from 'styled-components/native'

export const Container = styled.View.attrs({
    elevation: 10,
})`
    width: 100%;
    height: 59px;
    background-color: ${ ({theme}) => theme.colors.background};
    border-radius: 16px;
    margin-bottom: 8px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
`;

export const PlantImageContainer = styled.View`

`;

export const PlantName = styled.Text`
    font-family: ${ ({theme}) => theme.fonts.black};
    font-size: 14px;
    color: ${ ({theme}) => theme.colors.main};
`;

export const PlantSubtitle = styled.Text`
    font-family: ${ ({theme}) => theme.fonts.regular};
    font-size: 14px;
    color: ${ ({theme}) => theme.colors.main_light};
`;

export const PlantDetailsContainer = styled.View`

`;

export const WateryButton = styled.View`

`;
