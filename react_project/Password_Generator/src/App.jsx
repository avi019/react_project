import { useState,useCallback } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed]=useState(false)
  const [charAllow, setCharAllow]=useState(false)
  const [Password,setPassword]=useState("")

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+="0123456789"
    if(charAllow) str+="~!@#$%^&*(){}[]+=<>;/?"

    for(let i=1;i<=Array.length;i++)
      {
        let char=Math.floor(Math.random() * str.length+1)
        pass=str.charAt(char);

      }
      setPassword(pass);




  },[length,numAllowed,charAllow,setPassword])
  


  return (
    < >
    <div className="content-center w-full max-w-md mx-auto shadow-md rounded-lg
     px-5 py-3 my-1 text-orange-500 bg-gray-800
     ">
      <h1 className='text-white text-center'>Password Generator</h1>
    <div className="content-center flex shadow rounded-lg 
    overflow-hidden mb-4">
      <input type="text" 
      value={Password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly 
      />


    </div>
    </div>
    </>
  )
}

export default App
