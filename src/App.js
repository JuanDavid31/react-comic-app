import logo from './logo.svg';
import { useState, useEffect } from 'react';
import Header from "./components/Header";
import ComicsList from "./components/ComiList";
import './App.css';
import ComicGrid from "./components/ComicGrid";

function App() {

  const [comics, setComics] = useState([]);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const url = `https://comicvine.gamespot.com/api/movies?api_key=603aa41c30f8420b9d4fa00584acf281ddca30ef&format=json`

    const getComicsFromServer = async () => {
      const res = await fetch(url)
      const data = await res.json();
      setComics(data.results);
    };

    getComicsFromServer();
  }, []);

  const activateList = () => { setShowList(true) };
  const activateGrid = () => { setShowList(false) };

  return (
    <>
        <Header onShowListClick={activateList} onShowGridClick={activateGrid} />
        {showList ?
            <ComicsList comics={comics} /> :
            <ComicGrid comics={comics} />}
    </>
  );
}

export default App;
