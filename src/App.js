import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import MostrarResultado from './components/MostrarResultado';
import Resumen from './components/Resumen';
import styled from '@emotion/styled';

const Container = styled.div` 
    max-width: 600px;
    margin: 10% auto;
`;
const ContainerForm = styled.div`
    background-color: #ffffff;
    padding: 3rem;
`;


function App() {

  const [resultado, setResultado] = useState({
        cantidad: 0,
        datos:{
          marca:'',
          year: '',
          plan: ''
        }
  })

  return (
    <Container >
        <Header
          title="Cotizador de Seguros"
        />
        <ContainerForm>
            <Formulario
              setResultado= { setResultado }
            />
               
           <Resumen
              datos={resultado.datos}
            />
            <MostrarResultado
              resultado = { resultado }
            />
        </ContainerForm>

    </Container>
  );
}

export default App;
