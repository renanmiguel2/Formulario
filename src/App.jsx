
function App() {

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className="flex flex-col gap-7">
        <div>
          <h1 className="text-white">Nome</h1>
          <input type="text" className="outline-none bg-gray-800 placeholder:text-gray-400 caret-gray-400 text-white w-120 h-10 px-2 rounded-lg appearance-none"
            placeholder="Nome" 
            />
        </div>
        <div>
          <h1 className="text-white">Email</h1>
          <input type="text" className="outline-none bg-gray-800 placeholder:text-gray-400 caret-gray-400 text-white w-120 h-10 px-2 rounded-lg appearance-none"
            placeholder="Email"
          />
        </div>
        <div>
          <h1 className="text-white">Senha</h1>
          <input type="text" className="outline-none bg-gray-800 placeholder:text-gray-400 caret-gray-400 text-white w-120 h-10 px-2 rounded-lg appearance-none"
            placeholder="Senha"
          />
        </div>
        <div>
          <h1 className="text-white">Genero</h1>
          <select className="outline-none bg-gray-800 text-white w-120 h-10 px-2 rounded-lg appearance-none">
            <option value="0">Selecione seu gênero...</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="noSelected">Prefiro não opinar</option>
          </select>
        </div>
        <button className="text-white bg-[#327894] h-10 rounded-lg font-normal hover:opacity-90 duration-200 cursor-pointer">Cadastrar</button>
      </div>
    </div>
  )
}

export default App
