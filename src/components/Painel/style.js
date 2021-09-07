import styled from 'styled-components';

export const Container = styled.div `
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 15vw 85vw;

  > nav {
    grid-column-start: 1;
    grid-column-end: 2;
    height: 100vh;
    display: flex;
    flex-direction: column;
    
    > Button {
      height: 100vh;
      font-size: 2vw;
    }
  }

`;
