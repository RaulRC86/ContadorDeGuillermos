

import { useState } from "react"

const Contador= () => {
    const [cuenta, setCuenta] = useState(0)
    return(
        <>
        <button onClick={()=>cuenta >= 15 ? alert("Ya tienes los suficientes Guillermos para invadir Nicaragua.") : setCuenta(cuenta + 1)}>Agregar Guillermos</button>
        <button onClick={()=>cuenta <= 0 ? alert("No puedes privar a este mundo de Guillermo!") : setCuenta(cuenta - 1)}>Quitar Guillermos</button>

        <span>Cuenta de Guillermos: {cuenta}</span>
        </>
    )
} 
export default Contador


