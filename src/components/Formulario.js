import React, { useState } from 'react';
import styled from '@emotion/styled';
import { obtenerDiferenciaYear, calcularMarca } from '../Helper';

const Campo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none; 

`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838F;
    font-size: 1rem;
    width: 100%;
    padding: 1rem;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;

    }
`;

const Error = styled.div`
    background-color: red;
    color: #fff;
    padding: 1rem;
    width: 100%;
    text-align: center;
    font-weight: bold;
    margin: 1rem 0;
`

const Formulario = () => {
    // state inicial del form
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState(false);

    // desestructurando datos
    const {marca, year, plan} = datos;

    // leer datos del formulario y colocarlos en el state

    const obtenerInformacion = e => {
        setDatos({
           ...datos,
            [e.target.name] : e.target.value
        })
    }

    // manejo del submit

    const handleSubmit = e => {
        e.preventDefault();
        
        // validar
        if ( ( marca.trim() === '' ) || ( year.trim() === '' ) || ( plan.trim() === '' ) ){

            setError(true);
            return
        }

        setError(false);
        
        // Una base de 2000        
        
        let resultado = 2000;

        //obtener diferencia de años        
       
        const diferencia = obtenerDiferenciaYear(parseInt(year, 10));
        console.log(diferencia);

        // Restar un 3% por cada diferencia menor de año 

        let porcentaje = 0.03 * diferencia;
        
        
        resultado -= porcentaje * resultado;
        console.log(resultado);

        resultado = calcularMarca(marca, resultado);
        console.log(resultado);               

    }

    return (
       <form
            onSubmit = { handleSubmit }
        >

            <Campo>{error ? <Error> Todos los Campos son Obligatorios</Error> : null}</Campo>

            <Campo>
                <Label htmlFor= "marca">Marca</Label>
                    <Select 
                        id="marca" 
                        value= { marca }
                        name= "marca"
                        onChange = { obtenerInformacion }
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </Select>
                
            </Campo>
            <Campo>
                <Label htmlFor= "año" >Año</Label>
                    <Select 
                        id="año"
                        value= { year }
                        name= "year"
                        onChange = { obtenerInformacion }
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                    </Select>
                
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    id="basico"
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={ plan === "basico" }
                    onChange = { obtenerInformacion }
                /> 
                <label htmlFor="basico">Basico</label>
                <InputRadio 
                    id="completo"
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={ plan === "completo" }
                    onChange = { obtenerInformacion }
                /> 
                <label htmlFor="completo">Completo</label>
            </Campo>
            <Button type="submit">Cotizar</Button>
        </form> 
    )
}

export default Formulario
