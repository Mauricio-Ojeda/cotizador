import React from 'react';
import Proptypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.div`
    background-color: #00838F;
    text-align: center;
    padding: 1.5rem;
    font-weight: bolder;
    color: #ffffff;
    margin-top: 1rem;   
`;
const Ul = styled.ul `
    text-align: left;
    text-transform: capitalize;
    font-weight: bold;
    
`;

const Resumen = ({ datos }) => {
    const {marca, year, plan} = datos;
    
   return (marca === '' || year === '' || plan === '') ? null :(
                                                                    <Container>
                                                                        <h2>Resumen de Cotización</h2>
                                                                        <Ul>
                                                                            <li>Marca: {marca}</li>
                                                                            <li>Año: {year}</li>
                                                                            <li>Plan: {plan}</li>
                                                                        </Ul>

                                                                    </Container>
                                                                )

    
}    

Resumen.propTypes = {
    
    datos: Proptypes.object.isRequired
    
}

export default Resumen
