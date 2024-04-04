import { useState } from "react"
import confetti from "canvas-confetti"


// Turnos posibles : 
 const TURNS = {
  X: '🟣',
  O: '🔴'
}

// Definición de una Casilla : 
const Casilla = ({children, updateBoard, index}) =>{

  const handleClick = ()=>{
    updateBoard(index)
  }

  return(
      <div onClick={handleClick} className="  bg-sky-950 border-[2px] border-gray-300 font-mono text-4xl lg:text-7xl text-gray-300 flex items-center justify-center rounded-2xl hover:border-teal-300 cursor-pointer transition-all hover:bg-red-700/40 active:bg-yellow-500/50 select-none aspect-square">
          {children}
      </div>
  )
}

// Definicion de Marcadores : 
const Marcador = ({children, isSelected}) =><div className={`${isSelected ?'bg-blue-700' : null} text-neutral-100 border-[1px] border-neutral-100/30 text-5xl lg:text-7xl p-3 lg:p-8 text-center content-center rounded-xl aspect-square`} >{children}</div>

// Combos Ganadores : 
const combosGanadores = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],

]

// Componente Principal : 
const TresEnRaya = ()=>{

  // Reset Game : Tan simple como devolver todos los Estados a sus Valores Iniciales.
  const resetGame = ()=>{
    setTablero(Array(9).fill(null));
    setTurno(TURNS.X)
    setGanador(null)
    // Si pulsamos el boton reset, borraremos las Keys guardadas en el localStorage.
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }
   
    // Comprobación de combos Ganadores : 
    const comprobacionCombos = (tableroAComprobar)=>{
      for ( const combo of combosGanadores){
        const [a,b,c] = combo // Destructuración de las posiciones de cada una de las Posibilidades 
        if(
          tableroAComprobar[a] && // Comrpobación de las 3 casillas de los combos tienen el mismo Contenido.
          tableroAComprobar[a] == tableroAComprobar[b] &&
          tableroAComprobar[a] == tableroAComprobar[c]
        ){
          return tableroAComprobar[a] // Jugador X o Jugador O
        }
      }

      return null // No hay ganador.
    }

    const checkEndGame=(nuevoTablero)=>{
      // Revisamos si hay un empate comprobando si no hay ninguna casilla con Null : 
      return nuevoTablero.every((celda)=>celda !== null) // Devuelve True si todas las iteraciones cumplen la condición.

    }

    // Ganador de la Partida : 
    const [ganador,setGanador] = useState(null) //  null, Partida en Curso / false, hay un EMPATE

    // Creación del Tablero y su Estado para cuando haya un cambio rerenderice :  
    const [tablero, setTablero] = useState(()=>{
      const boardFromStorage = window.localStorage.getItem('board') // Al estar dentro de la inicialización del estado no nos Lee cada el LS en cada renderizado.
      return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
    })

    // Creación de manejo de Turnos : 
    const [turno,setTurno] = useState(()=>{
      const turnFromStorage = window.localStorage.getItem('turn')
      return turnFromStorage ?? TURNS.X
    })

    // Función para Actualizar el Tablero : 
    const updateBoard = (index)=>{
      // No actualizar el Tablero si en la Casilla ya hay contenido :
      if ( tablero[index] || ganador ) return // Abortamos la Actualización.
      
      // Creación del Nuevo Tablero : 
      const nuevoTablero = [...tablero];
      nuevoTablero[index] = turno; // Escribimos 'X' o 'O'
      setTablero(nuevoTablero) // Actualización del Tablero.
      // Nuevo Turno
      const nuevoTurno = turno == TURNS.X ? TURNS.O : TURNS.X;
      setTurno(nuevoTurno)
      //Guardar la Partida
      window.localStorage.setItem('board',JSON.stringify(nuevoTablero)) // Lo tenemos que serializar ya que es un Array
      window.localStorage.setItem('turn',nuevoTurno) // Lo guardamos tal cual
      // Revisar si hay Ganador : 
      const nuevoGanador = comprobacionCombos(nuevoTablero);
      if ( nuevoGanador){
        confetti()
        setGanador(nuevoGanador)
      } else if (checkEndGame(nuevoTablero)){
        setGanador(false) // Empate
      }
  
}

    return(
        <div className="h-[100%] w-[100%] gap-20 flex flex-col lg:flex-row justify-center items-center bg-gray-900 ">
          <div className=" grid grid-cols-3 w-[80%] lg:w-[40%] aspect-square gap-2">
            {/* Mapeado de la lista Tablero para renderizar las Casillas : */}
            {tablero.map((_,index)=>{
                return(
                    <Casilla
                    key={index}
                    index={index}
                    updateBoard={updateBoard}
                    >{tablero[index]}</Casilla>
                )
            })}
            </div>
            <article className="flex flex-wrap lg:flex-col relative lg:left-36 lg:border-[1px] justify-center border-neutral-100/10 px-10  lg:py-20 gap-5 rounded-xl">
              <Marcador isSelected={turno == TURNS.X}>{TURNS.X}</Marcador>
              <Marcador isSelected={turno == TURNS.O}>{TURNS.O}</Marcador>
              <button onClick={resetGame} className="text-lg bg-red-500/90 rounded-lg text-neutral-100 w-[100%] py-2 hover:scale-[1.05] hover:bg-red-400 select-none transition-all">Reset</button>
            </article>
            { ganador !== null && (
              <article className=" absolute bg-black/80 w-[100%] lg:w-[60%] h-[80%] rounded-xl border-[5px] border-neutral-100/10 flex flex-col items-center justify-center gap-10">
                <div className="text-neutral-100 text-3xl lg:text-5xl text-center">
                  {
                    ganador == false
                      ? 'Empate entre los Jugadores...'
                      : 'Partida ganada por...'
                  }
                </div>

                <header className="w-fit">
                  { ganador && <Marcador>{ganador}</Marcador>}
                </header>

                <footer>
                  <button onClick={resetGame} className="text-lg lg:text-2xl px-10 py-4 rounded-lg bg-red-700 text-neutral-100 hover:scale-[1.05] hover:bg-red-400 transition-all">Empezar de nuevo</button>
                </footer>
              </article>
            ) }
        </div>
    )

}

export default TresEnRaya;

