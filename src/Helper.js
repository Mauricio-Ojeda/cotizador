// Obtener diferencia año

export const obtenerDiferenciaYear = (year) => ( new Date().getFullYear() - year );

// Obtener Incremento por marca

export const calcularMarca = (marca, resultado) =>{

			const precio = ( marca === "americano" ) ? resultado * 1.15  :
                       	   ( marca === "europeo" )   ? resultado * 1.30  :
                       	   ( marca === "asiatico" )  ? resultado * 1.05  : null;
            return precio;           	   
        }               	