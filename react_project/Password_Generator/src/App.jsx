import { useState,useCallback,useEffect,useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed]=useState(false)
  const [charAllow, setCharAllow]=useState(false)
  const [Password,setPassword]=useState("")
  
  //useRef hook
  const passwordRef=useRef(null)



  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+="0123456789"
    if(charAllow) str+="~!@#$%^&*(){}[]+=<>;/?"

    for(let i=1;i<=length;i++)
      {
        let char=Math.floor(Math.random() * str.length+1)
        pass+=str.charAt(char);

      }
      setPassword(pass);




  },[length,numAllowed,charAllow,setPassword])

//for copy
  const copyPasswordTOClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,10 );
    window.navigator.clipboard.writeText(Password)
  },[Password])
  
useEffect(()=>{passwordGenerator()//function call for generating the password 
},[length,numAllowed,charAllow,passwordGenerator])

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
      ref={passwordRef}
      />
      <button onClick= {copyPasswordTOClipboard} 
       className='outline-none bg-blue-700 text-white
      px-3 py-0.5 shrink-0'>copy</button>


    </div>
    <div className='flex text-sm gap-x-2'>
      <div  className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}


        />
        <label>Length: {length} </label>
      </div>
      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
        defaultChecked={numAllowed}
        id="numberInput"
        onChange={()=>{
          setNumAllowed((prev)=>!prev);
        }}
        
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>

      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
        defaultChecked={charAllow}
        id="characterInput"
        onChange={()=>{
          setCharAllow((prev)=>!prev);
        }}
        
        />
        <label htmlFor="characterInput">Characters</label>
      </div>



    </div>
    </div>
    </>
  )
}

export default App
