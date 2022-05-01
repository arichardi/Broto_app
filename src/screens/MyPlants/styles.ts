import { FlatList } from 'react-native';
import styled from 'styled-components/native'

export const HeadingContainer = styled.View`
    width: 80%;
`;
export const Container = styled.View`
    margin-top: 50px;
    margin-bottom: 16px;
    flex: 1;
`;

export const PlantsList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false
})`
    margin-top: 40px;
`;

export const MainButtonContainer = styled.View`
    justify-content: center;
    align-items: center;
`;
    


