import styled from 'styled-components/native'

export const Container = styled.View.attrs({
    elevation: 10,
})`
    height: 59px;
    background-color: ${ ({theme}) => theme.colors.background};
    border-radius: 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    margin: 0px 8px 8px 8px
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

export const WateryButton = styled.TouchableOpacity`

`;
