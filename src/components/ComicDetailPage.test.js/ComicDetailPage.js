import {useEffect, useState} from "react";
import {useParams} from "react-router";

const ComicDetailPage = () => {

    let { id } = useParams();

    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [comic, setComic] = useState({});

    useEffect(() =>{
        const fetchComic = async () => {
            try {
                const url = `https://comicvine.gamespot.com/api/movie/${id}?api_key=603aa41c30f8420b9d4fa00584acf281ddca30ef&format=json`
                const res = await fetch(url);
                const data = await res.json();
                setComic(data.results);
            } catch (e) {
                console.log(e);
                setIsError(true);
            }
            setIsLoading(false)
        }

        setIsLoading(true)
        fetchComic();
    }, [id])

    return (
        <>
        { isError && <h4>An error occurred, please try again.</h4> }
        {isLoading ?
                <h4>Loading...</h4> :
                <h1>{comic.name}</h1>}
        </>
    )
}

export default ComicDetailPage;
