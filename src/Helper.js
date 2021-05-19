// Obtener diferencia año

export const obtenerDiferenciaYear = (year) => ( new Date().getFullYear() - year );

// Obtener Incremento por marca

export const calcularMarca = (marca) =>{

			const precioPorMarca = ( marca === "americano" ) ? 1.15  : // 15% aumento
                       	   ( marca === "europeo" )   ? 1.30  : // 30% aumento
                       	   ( marca === "asiatico" )  ? 1.05  : null; // 5% aumento o nada
            return precioPorMarca;           	   
        }  
// Obtener incremento por Plan
export const calcularPlan = ( plan ) =>{


			const precioPorPlan = ( plan === "basico" ) 	? 1.20  : // 20% aumento
                       	          ( plan === "completo" )  ? 1.50  : null; // 50% aumento o nada
            
			return precioPorPlan;           	   
        } 		
