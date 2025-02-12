//import { useEffect, useState } from "react"
import { useLoaderData } from "react-router"

function Github() {
    const data = useLoaderData();
    // const[data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Ritik210')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

  return (
    <div className="text-center m-4 bg-gray-700 text-white p-4 text-3xl">Github:{data.followers}
    <img src={data.avatar_url} alt="Git profile pic"/>
    </div>
  )
}

export default Github

export const gitHubInfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/Ritik210')
    return response.json();
}
