import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import MostrarResultado from './components/MostrarResultado';
import Resumen from './components/Resumen';
import Spinner from './components/spinner/Spinner';
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
  
  const {cantidad, datos} = resultado
  const [spinner, setSpinner] = useState(false);

  return (
    <Container >
        <Header
          title="Cotizador de Seguros"
        />
        <ContainerForm>
            <Formulario
              setResultado= { setResultado }
              setSpinner= { setSpinner }
             
            />

            {(spinner) ? <Spinner/> : null}
            
            {(!spinner) ? <Resumen
                            datos={ datos }
              
                          /> : null
            }  
           
            {(!spinner) ? <MostrarResultado
                            cantidad = { cantidad }
                          /> : null
            }  

        </ContainerForm>

    </Container>
  );
}

export default App;
