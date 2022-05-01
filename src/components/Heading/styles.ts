import styled from 'styled-components/native'

export const Container = styled.View`
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${ ({theme}) => theme.fonts.display};
    font-size: 32px;
    color: ${ ({theme}) => theme.colors.main};
`;

export const ColorTag = styled.View`
    background-color: ${ ({theme}) => theme.colors.secondary_dark};
    height: 15px;
    width: 274px;
    border-radius: 8px;
    position: relative;
    top: 42px;
`;