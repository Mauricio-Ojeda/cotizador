import React from 'react';
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
    
    
`

const MostrarResultado = ({ resultado }) => {
    
    const { cantidad } = resultado;

    const mostrar = (cantidad === 0) ? null : (
                                                <Container>
                                                        <TransitionGroup
                                                            component="div"
                                                            className="resultado"
                                                        > 
                                                            <CSSTransition
                                                                classNames="resultado"
                                                                key={cantidad}
                                                                timeout={{ enter: 500, exit:500}}
                                                            >
                                                                <div><p>$ {cantidad}</p></div>
                                                            </CSSTransition>
                                                        </TransitionGroup>
                                                        
                                                    </Container>
                                                )
    return mostrar

}

export default MostrarResultado
