import { useState } from 'react'

function Login() {
  const [SenhaInicial] = useState(1234)

  return (
    <div>
      <form>
        <p>Nome: <input type="text" name="name" /></p>
        <p>Senha: <input type="password" name="senha"/></p>
        <input type="submit"/>
      </form>
      <p>Senha atual: {SenhaInicial}</p>
    </div>
  )
}
export default Login;
