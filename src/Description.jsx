// @ts-check
import { useState } from "react"
import DogImage from "./DogImage"

export const Description = () => {

  const [dogUrl,setDogUrl] = useState("https://images.dog.ceo/breeds/terrier-bedlington/n02093647_2306.jpg")

  const updateImage = () =>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res=>res.json())
    .then(data => {
      const newDogUrl = data.message
      setDogUrl(newDogUrl)
    })
    .catch(error => console.error("Error fetching dog image:",error))
  }

  return (
    <div className='Dogdiv'>
      <p>犬の画像を表示するサイトです</p>
      <DogImage imageUrl={dogUrl}/>
      <button onClick={updateImage}>更新</button>
    </div>
  )
}

export default Description
