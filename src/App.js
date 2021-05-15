import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import styled from '@emotion/styled';

const Container = styled.div` 
    max-width: 600px;
    margin: 0 auto;
`;
const ContainerForm = styled.div`
    background-color: #ffffff;
    padding: 3rem;
`;

function App() {
  return (
    <Container >
        <Header
          title="Cotizador de Seguros"
        />
        <ContainerForm>
            <Formulario
              
            />
        </ContainerForm>
    </Container>
  );
}

export default App;
