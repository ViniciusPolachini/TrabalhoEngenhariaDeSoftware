import styled from 'styled-components';

export const Conteudo = styled.div `
    margin-left: 5vw;
    height: 100vh;
    display: grid;
    width: 80vw;
    overflow-y: scroll;
    grid-column-start: 2;
    grid-column-end: 3;
    > Button {
      margin-top: 3vh;
      margin-bottom: 3vh;
      width: 6vw;
    }
    .textarea {
      width: 50vw;
    }
`;