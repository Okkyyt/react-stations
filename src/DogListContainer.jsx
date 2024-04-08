// @ts-nocheck

import { useEffect } from "react"
import { useState } from "react";
import BreedsSelect from "./BreedsSelect";

export const DogListContainer = () => {

  const [breeds,setBreeds] = useState([])

  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res=>res.json())
    .then(data=>{
      // @ts-ignore
      setBreeds(data.message)
    })
  },[])// 空の配列を第二引数として渡し、初回のレンダリング時のみ実行されるようにする
  console.log(breeds)

  const [selectedBreed,setSelectedBreed] = useState("")

  const handleBreedChange=(/** @type {{ target: { value: import("react").SetStateAction<string>; }; }} */ event)=>{
    setSelectedBreed(event.target.value); // 選択された品種を更新
  }

  const [images, setImages] = useState([]); // 画像の配列を state で管理

  const click = () =>{
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
    .then(res=>res.json())
    .then(data=>{
      const image = data.message
      setImages(image)
    })
    .catch(error=>console.error("Error fetching dog image:",error))
  }

  return (
    <div>
      <BreedsSelect breeds={breeds} onChange={handleBreedChange} images={images}/>
      <button onClick={click}>表示</button>
    </div>
  )
}

export default DogListContainer
