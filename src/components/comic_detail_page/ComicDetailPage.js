import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {ComicApi} from "../../api";

const ComicDetailPage = () => {

    let { id } = useParams();

    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [comic, setComic] = useState({});

    useEffect(() =>{
        const fetchComic = async () => {
            const data = await ComicApi.fetchComic(id, setIsLoading, setIsError);
            setComic(data);
        }

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
