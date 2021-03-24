import Header from "../header/Header";
import ComicsList from "../comics_list/ComicsList";
import ComicGrid from "../comics_grid/ComicsGrid";
import {useEffect, useState} from "react";
import { useHistory, useLocation } from "react-router";

const ComicsPage = () => {
    let history = useHistory();
    let query = useQuery();

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false)
    const [comics, setComics] = useState([]);
    const [showList, setShowList] = useState(() => {
        const type = query.get('type');
        if (type == null) return true;
        return type.toLocaleLowerCase() === 'list';
    });

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
        history.push({ search: '?type=list' })
        setShowList(true)
    };
    const activateGrid = () => {
        history.push({ search: '?type=grid' })
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

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default ComicsPage;
