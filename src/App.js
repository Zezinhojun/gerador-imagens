import { useEffect, useState } from 'react';
import './App.css';
import { CardsList } from './components/CardsList';

function App() {

  const [imageInfo, setImageInfo] = useState([])
  const numsCard = 4

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then(res => res.json())
      .then((data) => setImageInfo(data)
      )
  }, [])


  return (
    <div className="container-fluid">
      <div className="">
        <h1 className="diplay1 text-center my-5">Gerador de Imagens aleatórias</h1>
      </div>
      <CardsList
        numsCard={numsCard}
        imageInfo={imageInfo}
        setImageInfo={setImageInfo}
      />
    </div>
  );
}

export default App;
