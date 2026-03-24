import { useState } from "react"

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [genero, setGenero] = useState("")
  const [error, setError] = useState("")
  const [sucesso, setSucesso] = useState("")
  function validar() {
    if(!name || !email || !senha || !genero) {
      setError("Todos os campos precisam ser preenchidos")
      setSucesso("")
      return
    }
    if(!email.includes("@") || !email.includes(".")) {
      setError("email invalido")
      setSucesso("")
      return
    }
    if(senha.length < 6) {
      setError("Sua senha precisa ter pelo menos 6 caracteres")
      setSucesso("")
      return
    }
    setError("")
    setSucesso("Sucesso")
    setName("")
    setEmail("")
    setSenha("")
    setGenero("")

  }

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className="flex flex-col gap-7">
        <div>
          <h1 className="text-white">Nome</h1>
          <input type="text" className="outline-none bg-gray-800 placeholder:text-gray-400 caret-gray-400 text-white w-70 md:w-120 h-10 px-2 rounded-lg appearance-none"
            placeholder="Nome" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div>
          <h1 className="text-white">Email</h1>
          <input type="text" className="outline-none bg-gray-800 placeholder:text-gray-400 caret-gray-400 text-white w-70 md:w-120 h-10 px-2 rounded-lg appearance-none"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <h1 className="text-white">Senha</h1>
          <input type="password" className="outline-none bg-gray-800 placeholder:text-gray-400 caret-gray-400 text-white w-70 md:w-120 h-10 px-2 rounded-lg appearance-none"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div>
          <h1 className="text-white">Genero</h1>
          <select className="outline-none bg-gray-800 text-white w-70 md:w-120 h-10 px-2 rounded-lg appearance-none"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          >
            <option value="" disabled>Selecione seu gênero...</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="noSelected">Prefiro não opinar</option>
          </select>
        </div>
        <div>
          {error && <p className="text-red-600 font-semibold">{error}</p>}
          {sucesso && <p className="text-green-500 font-semibold">{sucesso}</p>}
        </div>
        <button className="text-white bg-[#327894] h-10 rounded-lg font-normal hover:opacity-90 duration-200 cursor-pointer"
        onClick={validar}
        >Cadastrar</button>
      </div>
    </div>
  )
}

export default App
