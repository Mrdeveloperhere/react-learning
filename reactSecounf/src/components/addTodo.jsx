import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/TodoSlice'

function AddTodo() {
  const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(inputValue))
    setInputValue('')
  }

  return (
   <>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Add a new todo..." value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
          <button type="submit">Add</button>
        </form>
   </>
  )
}

export default AddTodo