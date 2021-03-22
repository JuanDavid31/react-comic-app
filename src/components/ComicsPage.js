import Header from "./Header";
import ComicsList from "./ComiList";
import ComicGrid from "./ComicGrid";
import {useEffect, useState} from "react";

const ComicsPage = () => {
    const [comics, setComics] = useState([]);
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        const url = `https://comicvine.gamespot.com/api/movies?api_key=603aa41c30f8420b9d4fa00584acf281ddca30ef&format=json`

        const fetchComics = async () => {
            const res = await fetch(url)
            const data = await res.json();
            setComics(data.results);
        };

        fetchComics();
    }, []);

    const activateList = () => {
        setShowList(true)
    };
    const activateGrid = () => {
        setShowList(false)
    };

    return (
        <>
            <Header onShowListClick={activateList} onShowGridClick={activateGrid}/>
            {showList ?
                <ComicsList comics={comics}/> :
                <ComicGrid comics={comics}/>}
        </>

    )
}

export default ComicsPage;
