import { useState, useCallback ,useEffect } from 'react'

function PasswordCreate() {

    const [number, setNumber] = useState(false)
    const [lenght, setLength] = useState(4)
    const [special, setSpecial] = useState(false)
    const [password, setPassword] = useState('')


    const passwordGenerator = useCallback(() => {
         let Char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
         let SpecialChar = '!@#$%^&*()_+~`|}{[]:;?><,./-='
         let passwordLength = parseInt(lenght)
         let password = ''

         if (special === true) {
            Char += SpecialChar
         }
         if (number === true) {
            Char += '01234567890123456789'
         }

         if (passwordLength > 0) {
            for (let i = 0; i < passwordLength; i++) {
                let randomIndex = Math.floor(Math.random() * Char.length )
                password += Char[randomIndex]
            }
            setPassword(password)
        }
    }, [number, lenght, special])

 
    useEffect(() => {
    passwordGenerator();
}, [passwordGenerator]);

  return (
    <>

   <div className=' w-full max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded-lg  text-orange-300'>
  <h1 className="text-3xl font-bold mb-4 text-center ">Password Generator</h1>
   
    <div>
    <label>Password:</label>
    <input className='border border-gray-300 p-2 rounded w-3xl' type="text" value={password} readOnly />
    <button className='outline-none bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => {navigator.clipboard.writeText(password);   alert("Password copied to clipboard!")}}>Copy</button>
   </div>



      <div className='flex items-center w-3xl gap-0.5 mt-4'>

    <label>Length: {lenght}</label>
    <input  className='mx-2' type="range"  max={200} value={lenght} onChange={(e) => setLength(Number(e.target.value))} />

   
    <label>Include Numbers:</label>
    <input  className='mx-2' type="checkbox" checked={number === true} onChange={(e) => setNumber(e.target.checked)} />
   
    
    <label>Include Special Characters:</label>
    <input  className='mx-2' type="checkbox" checked={special === true} onChange={(e) => setSpecial(e.target.checked)} />
          </div>
      
      
      
   
</div>
  
  
  </>
  )
}

export default PasswordCreate