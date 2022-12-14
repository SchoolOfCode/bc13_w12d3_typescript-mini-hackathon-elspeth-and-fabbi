
import "./App.css";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import Image from "../Image/Image";

function App() {

  const [imageUrl, setImageUrl] = useState("");
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    async function getCat() {
      try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await response.json();
        setImageUrl(data[0].url);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    }
    getCat();
  }, [clicks])

  function onClick() {
    setClicks(clicks + 1);
  }

  return (
    <div className="App">
      <Button onClick={onClick}/>
      <Image url={imageUrl}/>
    </div>
  );
}

export default App;
