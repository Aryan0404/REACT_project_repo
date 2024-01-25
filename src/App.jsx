import { useRef,useState,useCallback,useEffect } from 'react'

import './App.css'


function App() {
    const passWordRef= useRef(null);
    const[length,setLength] = useState(8);
    const[numb,setNumber] = useState(false);
    const[char,setCharacter] = useState(false);
    const[Password,setPassword] = useState("asdas");
    console.log(Password)

    const copyPasswordClipBoard=useCallback(()=>{
      passWordRef.current?.select();
      passWordRef.current?.setSelectionRange(0,999);
      window.navigator.clipboard.writeText(Password);
      console.log("meow")
    },[Password])

    
    const passwordGenerator=useCallback(()=>{
      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(numb) str+="0123456789"

      if(char) str+="!@#$%^&*(){}[]\:_"
      
      for(let i=0;i<length;i++){
        let charIndex = Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(charIndex);
      }
      console.log(numb)
    
      console.log("11")
      setPassword(pass)
    },[length,numb,char,setPassword])

    useEffect(()=>{
      passwordGenerator()
    },[length,numb,char])

  return (
    <div className='flex justify-center h-screen w-screen'>
    <div className='text-orange-400  mt-16 flex h-[30%] w-[60%] flex-col justify-center  items-center   gap-5 rounded-lg bg-slate-900 rounded-r-md'>
      <div>
      <h1 >Password generator</h1>
      </div>
      <div>
        <input type="text" value={Password} placeholder='Password' readOnly  className='w-[30vw] h-[38px] border-none  rounded-none rounded-l-[20px]  bg-white ' ref={passWordRef}/>
        <button className='bg-blue-700 border-none rounded-none rounded-r-md' onClick={copyPasswordClipBoard}>Copy</button>
      </div>
      <div className='flex w-[50%] justify-between'>
        <input type="range"  max={100} min={6} className='cursor-pointer' value={length} onChange={e=>setLength(e.target.value)} />
        <label >Length: {length}</label>
        <input type="checkbox"  defaultChecked={numb} id='numberInput' onChange={()=>{
          setCharacter((prev)=>{
            return !prev;
          })
        }}  />
                <label htmlFor='charInput'>Character</label>

        <input type="checkbox" defaultChecked={char} id='charInput' onChange={()=>{
          setNumber((prev)=>{
            return !prev;
          })
        }} />
                <label htmlFor='numberInput'>Number</label>

      </div>
    </div>
    </div>
  )
}

export default App
