import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
    background-color: ${ ({theme}) => theme.colors.main};
    width: 76px;
    height: 76px;
    border-radius: 38px;
`;
