import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextprovider from "./Hooks/UserContextprovider"




function App() {
  return (
     <div >
     <UserContextprovider>
      <h2>Welcome to the App</h2>
      <Login />
      <Profile />
      </UserContextprovider>
    </div>
  )
}

export default App