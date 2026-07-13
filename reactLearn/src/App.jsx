// import Login from "./components/Login"
// import Profile from "./components/Profile"
// import UserContextprovider from "./Hooks/UserContextprovider"

import Card from "./components/Card";
import ThemeBtn from "./components/ThemeButton";
import { ThemeProvider } from "./Hooks/theme"
import { useState, useEffect } from "react"
import Todo from "./Todo";



function App() {
  const [theme, setTheme] = useState("light");
  const darkTheme = () => {
    setTheme("dark");
  };
  
  const lightTheme = () => {
    setTheme("light");
  };


  useEffect(() => {
    document.querySelector("html").classList.remove(theme === "light" ? "dark" : "light");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  return (

 <>
    <Todo />
 </>


//     //  <div >
//     // // <UserContextprovider>
//     //   <h2>Welcome to the App</h2>
//     //   <Login />
//     //   <Profile />
//     //   </UserContextprovider>
//     // </div>

//     <ThemeProvider value={{ theme, darkTheme, lightTheme }}>

    
// <div className="flex flex-wrap min-h-screen items-center">
//                 <div className="w-full">
//                     <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//                         <ThemeBtn />
//                     </div>

//                     <div className="w-full max-w-sm mx-auto">
//                       <Card />
//                     </div>
//                 </div>
//             </div>

//     </ThemeProvider>

  )
}

export default App