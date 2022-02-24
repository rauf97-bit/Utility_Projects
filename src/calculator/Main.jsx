import React, {useState} from "react";

const Main = () => {
  const [result, setResult] = useState('')
  const handleClick = (e) => {
    e.preventDefault()
    // console.log(e.target.name)
    const figure = e.target.name
    setResult(result.concat(figure))
    // console.log(result)

  }
  const clear = () =>{
    setResult('')
  }
  const backspace = () =>{
    setResult(result.slice(0, -1))
  }
  const evalute = () => {
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult("Error")
    }
  }
  return (
    <div className="container-md mx-auto p-3 h-[100vh] ">
      <div className="flex justify-center items-center mx-auto w-[70vw] bg-black h-[95vh] text-green-500 p-2 rounded-md">
        <div className="grid cols-span-4 gap-x-5 gap-y-3 ">
          <input
            type="text"
            value={result}
            onChange={handleClick}
            className="col-span-4 bg-inherit border-2 font-mono text-right text-5xl border-gray-700 outline-none focus:outline-none h-24 rounded-md "
          />
          <button onClick={clear} name='clear' className="p-5 rounded-2xl focus:outline-slate-500 focus:border-2 text-3xl col-span-2 bg-blue-500">Clear</button>
          <button onClick={backspace} name='backspace' className="p-5 rounded-2xl focus:outline-slate-500 focus:border-2 text-3xl col-span-1 bg-blue-500">C</button>
          <button onClick={handleClick} name='/' className="p-5 rounded-2xl focus:outline-slate-500 focus:border-2 text-3xl col-span-1 bg-blue-500">&divide;</button>
          <button onClick={handleClick} name='7' className="p-5 rounded-2xl focus:outline-slate-500 focus:border-2 text-3xl col-span-1 bg-gray-700">7</button>
          <button onClick={handleClick} name='8' className="p-5 rounded-2xl focus:outline-slate-500 focus:border-2 text-3xl col-span-1 bg-gray-700">8</button>
          <button onClick={handleClick} name='9' className="p-5 rounded-2xl focus:outline-slate-500 focus:border-2 text-3xl col-span-1 bg-gray-700">9</button>
          <button onClick={handleClick} name='*' className="p-5 rounded-2xl focus:outline-slate-500 focus:border-2 text-3xl col-span-1 bg-blue-500">&times;</button>
          <button onClick={handleClick} name='4' className="p-5 rounded-2xl focus:outline-slate-500 focus:border-2 text-3xl col-span-1 bg-gray-700">4</button>
          <button onClick={handleClick} name='5' className="p-5 rounded-2xl focus:outline-slate-500 focus:border-2 text-3xl col-span-1 bg-gray-700">5</button>
          <button onClick={handleClick} name='6' className="p-5 rounded-2xl focus:outline-slate-500 focus:border-2 text-3xl col-span-1 bg-gray-700">6</button>
          <button onClick={handleClick} name='/' className="p-5 rounded-2xl focus:outline-slate-500 focus:border-2 text-3xl col-span-1 bg-blue-500">/</button>
          <button onClick={handleClick} name='1' className="p-5 rounded-2xl focus:outline-slate-500 focus:border-2 text-3xl col-span-1 bg-gray-700">1</button>
          <button onClick={handleClick} name='2' className="p-5 rounded-2xl focus:outline-slate-500 focus:border-2 text-3xl col-span-1 bg-gray-700">2</button>
          <button onClick={handleClick} name='3' className="p-5 rounded-2xl focus:outline-slate-500 focus:border-2 text-3xl col-span-1 bg-gray-700">3</button>
          <button onClick={handleClick} name='+' className="p-5 rounded-2xl focus:outline-slate-500 focus:border-2 text-3xl col-span-1 bg-blue-500">+</button>
          <button onClick={handleClick} name='.' className="p-5 rounded-2xl focus:outline-slate-500 focus:border-2 text-3xl col-span-1 bg-gray-700">.</button>
          <button onClick={handleClick} name='0' className="p-5 rounded-2xl focus:outline-slate-500 focus:border-2 text-3xl col-span-1 bg-gray-700">0</button>
          <button onClick={evalute} name='=' className="p-5 rounded-2xl focus:outline-slate-500 focus:border-2 text-3xl col-span-2 bg-blue-500">=</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
