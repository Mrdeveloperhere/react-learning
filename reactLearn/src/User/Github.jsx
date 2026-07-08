//import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
//     const [ data , setData ] = useState(null);
//  useEffect(() => {
//     fetch('https://api.github.com/users/Mrdeveloperhere')
//       .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             setData(data);
//         })
//   }, []);

const data = useLoaderData();

    return (
    <>
    <div className='text-3xl font-bold flex items-center justify-center p-4 bg-blue-800 text-white' >
Github
    </div>
 <div className="text-l font-bold flex items-center justify-center p-4 bg-blue-200 text-black  " >
    <div className="text-l font-bold column p-4 bg-blue-200 text-black " >
         <img src={data?.avatar_url} alt="Avatar" className="rounded-full" width={150}/> <br />
        Name: {data?.name} <br />
        Bio: {data?.bio} <br />
    </div>
    <div className="text-l font-bold flex items-center justify-center p-4 bg-blue-200 text-black" >
      
        Followers: {data?.followers} <br />
        Following: {data?.following} <br />
        Public Repos: {data?.public_repos} <br />
        Public Gists: {data?.public_gists} <br />
        Location: {data?.location} <br />
    </div>
</div>
    </>
    )
}

export default Github
// fast way to call Api better than useEffect and useState
export const ApiCallerLoader = async( )=>{
    const response = await fetch('https://api.github.com/users/Mrdeveloperhere');
    return response.json();
 }