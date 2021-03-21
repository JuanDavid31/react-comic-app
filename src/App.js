import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [comics, setComics] = useState([]);

  useEffect(() => {
    const url = `https://comicvine.gamespot.com/api/movies?api_key=603aa41c30f8420b9d4fa00584acf281ddca30ef&format=json`

    const getComicsFromServer = async () => {
      const res = await fetch(url)
      const data = await res.json();
      setComics(data.results);
    };

    getComicsFromServer();
  }, []);

  const comicsList = comics.map((comic) => {
    return (
        <li key={comic.id}>
          {comic.name}
          <img src={comic.image.thumb_url} />
        </li>
    )
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ul>
        {comicsList}
      </ul>
    </div>
  );
}

export default App;
