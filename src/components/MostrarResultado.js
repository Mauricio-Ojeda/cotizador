import React from 'react';
import Proptypes from 'prop-types';
import styled from '@emotion/styled';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const Container = styled.div`
    background-color: #26daa5;
    text-align: center;
    padding: 0.5rem;
    font-weight: bolder;
    margin-top: 1rem;
    color: #ffffff;
    font-size: 1.5rem;
    
    
`;

const P = styled.p `
    font-size: 1rem;
`



const MostrarResultado = ({ cantidad }) => {
    
    

    const mostrar = (cantidad === 0) ? 
                            <Container>
                                <P>Debes Completar Marca, Año y Plan.</P>
                            </Container>  : 
                            (
                                                <Container>
                                                        <TransitionGroup
                                                            component="span"
                                                            className="resultado"
                                                        > 
                                                            <CSSTransition
                                                                classNames="resultado"
                                                                key={cantidad}
                                                                timeout={{ enter: 500, exit:500}}
                                                            >
                                                                <p><span>$ {cantidad}</span></p>
                                                            </CSSTransition>
                                                        </TransitionGroup>
                                                        
                                                    </Container>
                                                )
    return mostrar

}

MostrarResultado.propTypes = {
    
    cantidad: Proptypes.number.isRequired
    
}

export default MostrarResultado
