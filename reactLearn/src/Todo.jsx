import { useState, useEffect } from "react"
import { TodoProvider } from "./components/Contexts";
import { TodoForm } from "./components/Contexts/components";
import TodoItem from "./components/Contexts/components/TodoItems";


function Todo() {
    const [todos, setTodos] = useState(() => {
        return JSON.parse(localStorage.getItem("todos")) || [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }
, [todos]);


    const addTodo = (todo) => {
        setTodos(prevTodos => [...prevTodos, {
            id: prevTodos.length + 1,
            ...todo,
        }]);
    };

    const updateTodo = (id, todo) => {
        setTodos(prevTodos => prevTodos.map((t) => t.id === id ? { ...t, ...todo } : t));
    };

    const deleteTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }

    const completeTodo = (id) => {
        setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    }

    return (
        <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, completeTodo

        }}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                     <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                            <div key={todo.id} className="w-full">
                                <TodoItem todo={todo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </TodoProvider>
    )
}

export default Todo