import {useState , useContext} from 'react'
import UserContext from '../Hooks/UserContext.js'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext (UserContext)

    const handleLogin = (e) => {
e.preventDefault()
        // perform login logic here
        // for example, you can check if the username and password are correct
        setUser({username, password})
      }
      
  return (
    <>
    <h2>login</h2>
    <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
    <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
    <button onClick={handleLogin}>login</button>    
    </>
  )
}

export default Login