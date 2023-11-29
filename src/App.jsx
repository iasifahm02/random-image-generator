import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [imageSrc, setImageSrc] = useState(null);
  const [category, setCategory] = useState("nature");

  const getImage = ()=>{
    //Get images through api
    fetch("https://api.api-ninjas.com/v1/randomimage?category="+category, {
      mode: 'cors',
      method: "GET",
      headers: {
        'X-Api-Key': '44iHpuNYGNM/NBt6qlTNfw==UfMh0o59kce09oBM',
        'Accept': 'image/jpg'
      }
    }).then( (response) => {
       return response.blob();
    }).then((data)=>{
      const imageUrl = URL.createObjectURL(data);
      setImageSrc(imageUrl);
    })
    .catch(error => {
      console.error('Error: ', error.message);
    });
    
  }

  useEffect(()=>{
    getImage();
  }, [])

  return (
    <>
      <input type="text" onChange={(e) => setCategory(e.target.value)}/> <></>
      <button onClick={getImage}>Get Image</button>
      <br />
      <br />
      {imageSrc && <img src={imageSrc} alt="Random Nature Image" />}
    </>
  )
}

export default App
