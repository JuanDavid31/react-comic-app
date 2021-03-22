import Header from "./Header";
import ComicsList from "./ComiList";
import ComicGrid from "./ComicGrid";
import {useEffect, useState} from "react";

const ComicsPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false)
    const [comics, setComics] = useState([]);
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        const url = `https://comicvine.gamespot.com/api/movies?api_key=603aa41c30f8420b9d4fa00584acf281ddca30ef&format=json`

        const fetchComics = async () => {
            try {
                const res = await fetch(url)
                const data = await res.json();
                setComics(data.results);
            } catch (e) {
                setIsError(true);
                console.log(e);
            }

            setIsLoading(false)
        };

        setIsLoading(true);
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
            { isError && <h4>An error occurred, please try again.</h4> }
            { isLoading && <h4>Loading...</h4> }
            {showList ? <ComicsList comics={comics}/> : <ComicGrid comics={comics}/>}
        </>
    )
}

export default ComicsPage;
