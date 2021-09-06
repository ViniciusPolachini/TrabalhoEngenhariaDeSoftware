import styled from 'styled-components';

export const Conteudo = styled.div `
    margin-left: 5vw;
    height: 100vh;
    display: grid;
    width: 80vw;
    overflow-y: scroll;
    grid-column-start: 2;
    grid-column-end: 3;

    .info {
      margin-top: 2vw;
    }

    .editaInfo {
      width: 50vw;
      height: 50vh;
      border: solid gray 1px;
      padding: 1vw 1vw 1vw 1vw;
    }

    .editar {
      margin-bottom: 2vw;
    }
`;