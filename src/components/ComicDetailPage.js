import {useEffect, useState} from "react";
import {useParams} from "react-router";

const ComicDetailPage = () => {

    let { id } = useParams();

    const [comic, setComic] = useState({});

    useEffect(() =>{
        const fetchComic = async () => {
            const url = `https://comicvine.gamespot.com/api/movie/${id}?api_key=603aa41c30f8420b9d4fa00584acf281ddca30ef&format=json`
            const res = await fetch(url);
            const data = await res.json();
            setComic(data.results);
        }

        fetchComic();
    }, [id])

    return (
        <h1>{comic.name}</h1>
    )
}

export default ComicDetailPage;
