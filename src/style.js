import styled from 'styled-components';


export const Container = styled.section`
    min-height: 300px;
    min-width: 300px;
    background: ${props => props.theme.background};
    color: ${props => props.theme.color}
`