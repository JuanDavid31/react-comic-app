const fetchComics = async (setIsLoading, setIsError) => {
    setIsLoading(true);
    let data = [];
    try {
        const url = `https://comicvine.gamespot.com/api/movies?api_key=603aa41c30f8420b9d4fa00584acf281ddca30ef&format=json`
        const res = await fetch(url)
        const { results } = await res.json();
        data = results;
    } catch (e) {
        setIsError(true);
        console.log(e);
    }
    setIsLoading(false)
    return data;
}

const fetchComic = async (id, setIsLoading, setIsError) => {
    setIsLoading(true);
    let data = {};
    try {
        const url = `https://comicvine.gamespot.com/api/movie/${id}?api_key=603aa41c30f8420b9d4fa00584acf281ddca30ef&format=json`
        const res = await fetch(url);
        const { results } = await res.json();
        data = results;
    } catch (e) {
        setIsError(true);
        console.log(e);
    }
    setIsLoading(false);
    return data;
}

const api = { fetchComics, fetchComic }

export default api;
