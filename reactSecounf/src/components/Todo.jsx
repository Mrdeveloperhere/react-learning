import {useSelector , useDispatch} from 'react-redux'
import {removeTodo, updateTodo} from '../features/todo/TodoSlice'


function Todo() {
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()

  return (
    <>
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.title}</span>
          <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
          <button onClick={() => dispatch(updateTodo({id: todo.id, title: 'Updated Title', completed: !todo.completed}))}>Update</button>
        </div>
      ))}
    </div>

    </>
  )
}

export default Todo