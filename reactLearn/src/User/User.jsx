
import { useParams } from "react-router-dom";
function User() {
    const { id } = useParams();
  return (
    <div className="text-3xl font-bold flex items-center justify-center" >User: {id} </div>
  )
}

export default User