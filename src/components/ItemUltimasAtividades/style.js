import styled from 'styled-components';

export const Atividade = styled.div`
    width: 100%;
    height: ${props => props.height ? height : "25%"};
    display: grid;
    align-content: center;
    justify-items: center;
    grid-template-columns: 1fr 2fr 1fr;
    font-size: small;
    font-weight: 600;
    background-color: ${props => props.BackGrey ? "#E4E4E4" : "none"};

    div{
        min-width: max-content;
    }
`;
