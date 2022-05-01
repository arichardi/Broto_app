import styled from 'styled-components/native'

export const Container = styled.View`
flex: 1;
background-color: ${ ({theme}) => theme.colors.background};

`;

export const TopCircle = styled.View`
width: 500px;
height: 500px;
border-radius: 250px;
background-color: ${ ({theme}) => theme.colors.secondary_light};
position: absolute;
top: -250px;
right: 150px;
`;
export const BottomCircle = styled.View`
width: 500px;
height: 500px;
border-radius: 250px;
background-color: ${ ({theme}) => theme.colors.terciary_light};
position: absolute;
bottom: -250px;
left: 150px;
`;

