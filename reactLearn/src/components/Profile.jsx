import  {useContext} from 'react'
import UserContext from '../Hooks/UserContext.js'

function Profile    () {
  const {user} = useContext(UserContext)
  if (!user) {
    return <p>Please login to view your profile</p>
  }
  return (
    <div>
      <h2>Profile welcome {user.username}</h2>
    </div>
  )
}

export default Profile