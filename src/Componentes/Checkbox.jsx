import {userState} from 'react'

function Checkbox () {
  const [clicado, setClicado] = userState("Não estou marcado");
  const clicadoConst = () => {
    if (clicado == "Não estou marcado") {
      setClicado("Estou marcado");
    }
    if (clicado == "Estou marcado") {
      setClicado("Não estou marcado");
    }
  }
  return(
    <form>
      <input type='checkbox' onChange={clicadoConst}/>
      <p> {clicado}</p>
    </form>
  )
}
export default Checkbox